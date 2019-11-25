import { Component, OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'; 
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

import { Seed } from '../seed';
import { SeedService } from '../seed.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { History } from '../history';
import { HistoryService } from '../history.service';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {

  elements: any = [];
  previous: any = [];
  headElements = ['Name', 'Variety', 'Classification', 'Days of Maturity', 'Stocks', ''];

  private seeds: Seed[];
  private list: Seed[];
  private seed;

  private variety = ["inbred", "hybrid"];
  private classification = ["long", "round", "medium"];
  private seedName:String;
  private seed_variety:String;
  private seed_classification:String;
  private description:String;
  private price: number;
  private maturity:Number; 
  private stock:number;

  private editName;
  private editVariety;
  private editClassification;
  private editDesc;
  private editPrice;
  private editMaturity;
  private editStock;

  private users: User[];
  private user: User[];
  private id;
  public index;

  private name;
  private username;

  private action;
  private role = true;

  myform: FormGroup;
  seedname: FormControl;
  seedVariety: FormControl;
  seedClassification: FormControl;
  seedDescription: FormControl;
  seedPrice: FormControl;
  seedMaturity: FormControl;
  seedStocks: FormControl;

  constructor(private seedService: SeedService, 
    private userService: UserService, 
    private modalService: NgbModal,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private historyService: HistoryService,
    private authService: AuthService) { }

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  ngOnInit() {
    this.getSeeds();
    this.createFormControls();
    this.createForm();
    this.userService.getUser(this.userService.currentUser).subscribe(
      data => {
        this.user = data;
        if(this.user[0].role == "admin"){
         this.role = false;
        }
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  getSeeds(){
    this.seedService.getSeeds().subscribe(
      data => {
        this.seeds = data;
        this.list = data;
  
        this.mdbTable.setDataSource(this.seeds);
        this.seeds = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
  
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
  
        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  createFormControls() {
    this.seedname = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9\s-]*")]);
    this.seedVariety = new FormControl('', Validators.required);
    this.seedClassification = new FormControl('', Validators.required);
    this.seedDescription = new FormControl('', [Validators.required, Validators.pattern("[^@#$*<>~`{}+=]*")]);
    this.seedPrice = new FormControl('', [Validators.required, Validators.pattern("[0-9.]*")]);
    this.seedMaturity = new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(2), Validators.pattern("[0-9]*")]);
    this.seedStocks = new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern("[0-9]*")]);
  }

  createForm() {
    this.myform = new FormGroup({
      seedname: this.seedname,
      seedVariety: this.seedVariety,
      seedClassification: this.seedClassification,
      seedDescription: this.seedDescription,
      seedPrice: this.seedPrice,
      seedMaturity: this.seedMaturity,
      seedStocks: this.seedStocks
    });
  }

  addSeed(deletedModal){
    var bool = true;

    for(var i=0; i<this.seeds.length; i++){
      if(this.seeds[i].name == this.seedName){
        bool = false;
      }
    }

    if(bool){
      var seed = new Seed();
      seed.name = this.seedName;
      seed.variety = this.seed_variety;
      seed.classification = this.seed_classification;
      seed.description = this.description;
      seed.price = this.price;
      seed.number_of_days = this.maturity;
      seed.stocks = this.stock;
      seed.updated_by = this.userService.currentUser;

      this.seedService.addSeed(seed).subscribe(
        data => {
          this.getSeeds();
          this.addHistory(seed.name, "Added");
        },
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this.router.navigate(['/login']);
            }
          }
        }
      );
      
      this.myform.reset();
      this.modalService.dismissAll();
      this.deletedModal(deletedModal, "add");
    }
    else{
      this.deletedModal(deletedModal, "exist");
    }
  }

  editSeed(deletedModal){
    var bool = true;

    for(var i=0; i<this.seeds.length; i++){
      if(this.seeds[i].name == this.seedName){
        bool = false;
      }
    }

    if(bool){
      var seed = new Seed();
      seed.name = this.editName;
      seed.variety = this.editVariety;
      seed.classification = this.editClassification;
      seed.description = this.editDesc;
      seed.price = this.editPrice;
      seed.number_of_days = this.editMaturity;
      seed.stocks = this.editStock;
      seed.updated_by = this.userService.currentUser;
    
      this.seedService.updateSeed(seed, this.id).subscribe(
        data => {
          this.getSeeds();
          this.addHistory(seed.name, "Updated");
        },
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this.router.navigate(['/login']);
            }
          }
        }
      );

      this.myform.reset();
      this.modalService.dismissAll();
      this.deletedModal(deletedModal, "update");
    }
    else{
      this.deletedModal(deletedModal, "exist");
    }
  }

  deleteSeed(deletedModal){
    var seedname
    for(var i=0; i<this.seeds.length; i++){
      if(this.id == this.seeds[i]._id){
        seedname = this.seeds[i].name;
      }
    }

    var histo = new History();
      histo.seed = seedname;
      histo.userID = this.user[0]._id;
      histo.user = this.user[0].name;
      histo.action = "Deleted";

    this.historyService.addHistory(histo).subscribe(
      data => {
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );

    this.seedService.deleteSeed(this.id).subscribe(
      data => {
        this.getSeeds();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
    
    this.modalService.dismissAll();
    this.deletedModal(deletedModal, "delete");
  }

  viewSeedModal(viewseed, id, index) {
    this.id = id;
    this.index = index;
    this.seedService.getSeed(id).subscribe((data)=>{
      this.seed = data;
      this,this.getSeeds();
    })
    
    this.modalService.open(viewseed, { centered: true });
  }

  addSeedModal(addseed, name, username) {
    this.modalService.open(addseed, { centered: true });
    this.name = name;
    this.username = username;
  }

  editSeedModal(editseed, id, index) {
    this.id = id;
    this.seedService.getSeed(id).subscribe(
      data => {
        this.seeds = data;
        this.getSeeds();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
    
    this.editName = this.seeds[index].name;
    this.editVariety = this.seeds[index].variety;
    this.editClassification = this.seeds[index].classification;
    this.editDesc = this.seeds[index].description;
    this.editMaturity = this.seeds[index].number_of_days;
    this.editStock = this.seeds[index].stocks;
    this.editPrice = this.seeds[index].price;
    this.modalService.open(editseed, { centered: true });
  }

  deleteModal(del, id){
    this.id = id;
    this.modalService.open(del, { centered: true });
  }

  deletedModal(deletedModal, action){
    this.modalService.open(deletedModal, { centered: true });
    this.action = action;
  }

  logoutModal(logout){
    this.modalService.open(logout, { centered: true });
  }

  clickLogout(){
      this.authService.logOut();
  }

  addHistory(seedname, action){
    var histo = new History();
    histo.seed = seedname;
    histo.userID = this.user[0]._id;
    histo.user = this.user[0].name;
    histo.action = action;

    this.historyService.addHistory(histo).subscribe(
      data => {
        this.getSeeds();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

}
