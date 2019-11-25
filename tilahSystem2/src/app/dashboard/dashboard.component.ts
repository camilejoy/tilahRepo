import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';
import { SeedService } from '../seed.service';
import { Seed } from '../seed';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //arrays
  private sales: Sale[];
  private seeds: Seed[];
  public ctr: Array<any>;
  public seedSale: Array<any> = [];
  public chartLabels; 
  private variety = ["inbred", "hybrid"];
  private classification = ["long", "round", "medium"];
  private category = ["Seed Name", "Seed Variety", "Seed Classification"];
  public chartDatasets: Array<any> = [
    { data: [], label: 'Seed Sales' },
    { data: [], label: 'Seed Sales' }
  ];
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public date = Date();
  public dateNow;

  //formNames
  public seedname = "";
  public seedname1 = "";
  public seedvariety = "";
  public seedvariety1 = "";
  public seedclass = "";
  public seedclass1 = "";
  public cat = "";

  public seedId;
  public totalSales = 0;
  public totalCount = 0;

  public chartType: string = 'line';

  
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor(private saleService: SaleService,
              private seedService: SeedService,
              private userService: UserService,
              private authService: AuthService,
              private modalService: NgbModal,
              private router: Router) { }

  ngOnInit() {
    this.getSales();
    this.dateNow = this.date.substring(4, 7);
    this.seedService.getSeeds().subscribe(
      data => {
        this.seeds = data;
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

  getSales(){
    this.totalCount = 0;
    this.saleService.getSales().subscribe(
      data => {
        this.sales = data;
        this.setChartLabels();
        this.setChartData();

        for(var i=0; i<this.sales.length; i++){
          this.totalSales += this.sales[i].amount;
          this.totalCount ++;
        }

        //this.getSeedSaleCount();

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

  // getSeedSaleCount(){
  //   this.seedSale = [];
  //   this.seedService.getSeeds().subscribe((data) => {
  //     this.seeds = data;

  //     for(var i=0; i<this.sales.length; i++){
  //       for(var j=0; j<this.seeds.length; j++){
  //         if(this.sales[i].itemId == this.seeds[j]._id){
  //           for(var k=0; k<this.seedSale.length; k++){
  //             if(this.seedSale[k].seedId == this.sales[i].itemId){
  //               var bool = true;
  //               var index = k;
  //             }
  //           }
  //           if(bool){
  //             this.seedSale[index].saleCount = this.seedSale[index].saleCount + 1;
  //           }
  //           else{
  //             var obj = {seedId: this.seeds[j]._id, saleCount: 1}
  //             this.seedSale.push(obj);
  //           }
  //         }
  //       }
  //     }
  //   });
    
  //   console.log(this.seedSale)
  // }

  setChartLabels(){
    switch(this.dateNow){
      case "Jan" : 
        this.chartLabels = ['September', 'October', 'November', 'December', 'January'];
        this.ctr = ['09', '10', '11', '12', '01'];
        break;
      case "Feb" :
        this.chartLabels = ['October', 'November', 'December', 'January', 'February'];
        this.ctr = ['10', '11', '12', '01', '02'];
        break;
      case "Mar" : 
        this.chartLabels = ['November', 'December', 'January', 'February', 'March'];
        this.ctr = ['11', '12', '01', '02', '03'];
        break;
      case "Apr" : 
        this.chartLabels = ['December', 'January', 'February', 'March', 'April'];
        this.ctr = ['12', '01', '02', '03', '04'];
        break;
      case "May" : 
        this.chartLabels = ['January', 'February', 'March', 'April', 'May',];
        this.ctr = ['01', '02', '03', '04', '05'];
        break;
      case "Jun" : 
        this.chartLabels = ['February', 'March', 'April', 'May', 'June'];
        this.ctr = ['02', '03', '04', '05', '06'];
        break;
      case "Jul" : 
        this.chartLabels = ['March', 'April', 'May', 'June', 'July'];
        this.ctr = ['03', '04', '05', '06', '07'];
        break;
      case "Aug" : 
        this.chartLabels = ['April', 'May', 'June', 'July', 'August'];
        this.ctr = ['04', '05', '06', '07', '08'];
        break;
      case "Sep" : 
        this.chartLabels = ['May', 'June', 'July', 'August', 'September'];
        this.ctr = ['05', '06', '07', '08', '09'];
        break;
      case "Oct" : 
        this.chartLabels = ['June', 'July', 'August', 'September', 'October'];
        this.ctr = ['06', '07', '08', '09', '10'];
        break;
      case "Nov" : 
        this.chartLabels = ['July', 'August', 'September', 'October', 'November'];
        this.ctr = ['07', '08', '09', '10', '11'];
        break;
      case "Dec" : 
        this.chartLabels = ['August', 'September', 'October', 'November', 'December'];
        this.ctr = ['08', '09', '10', '11', '12'];
        break;
      default: this.chartLabels = ['January', 'February', 'March', 'April', 'May'];
    }
  }

  setChartData(){
   this.chartDatasets = [
      { data: [], label: 'Seed Sales' },
      { data: [], label: 'Seed Sales' }
    ];
    var ctr=0;
    var ctr2=0;
    var label, label2;
    for(var i=0; i<this.ctr.length; i++){
      ctr=0;
      ctr2=0;
      for(var  j=0; j<this.sales.length; j++){
        if(this.cat == ""){
          if(this.sales[j].dateNow == this.ctr[i]){
            ctr++;
            label = "Seed Sales";
            label2 = "---";
          }
        }
        else{
          this.seedId = this.getSeedId();
          if(this.cat == "Seed Name" && this.seedname1 == ""){
            if(this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId){
              ctr++;
              label = this.seedname + " Sales";
              label2 = "---";
            }
          }
          else if(this.cat == "Seed Variety" && this.seedvariety1 == ""){
            for(var k=0; k<this.seedId.length; k++){
              if(this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId[k]){
                ctr++;
                label = this.seedvariety + " Sales";
                label2 = "---";
              }
            }
          }
          else if(this.cat == "Seed Classification" && this.seedclass1 == ""){
            for(var k=0; k<this.seedId.length; k++){
              if(this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId[k]){
                ctr++;
                label = this.seedclass + " Sales";
                label2 = "---";
              }
            }
          }
          else if(this.seedname1 != ""){
            this.seedId2 = this.getSeedId2();
            if(this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId){
              ctr++;
              label = this.seedname + " Sales";
            }
            if(this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId2){
              ctr2++;
              label2 = this.seedname1 + " Sales";
            }
          }
          else if(this.seedvariety1 != "" || this.seedclass1 != ""){
            this.seedId2 = this.getSeedId2();
            for(var k=0; k<this.seedId.length; k++){
              if(this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId[k]){
                ctr++;
                label2 = "Seed Sales";
              }
            }
            for(var l=0; l<this.seedId.length; l++){
              if(this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId2[l]){
                ctr2++;
                label2 = "Seed Sales";
              }
            }
          }
          else{
            if(this.sales[j].dateNow == this.ctr[i]){
              ctr++;
              label = "Seed Sales";
            }
          }
        }
      }
      this.chartDatasets[0].data[i] = ctr;
      this.chartDatasets[0].label = label;
      this.chartDatasets[1].data[i] = ctr2;
      this.chartDatasets[1].label = label2;
    }
    this.cat = "";
    this.seedname = "";
    this.seedname1 = "";
    this.seedvariety = "";
    this.seedvariety1 = "";
    this.seedclass = "";
    this.seedclass1 = "";
  } 

  getSeedId(){
    var x=0;
    if(this.cat == "Seed Name"){
      for(var i = 0; i<this.seeds.length; i++){
        if(this.seedname == this.seeds[i].name){
          this.seedId = this.seeds[i]._id;
        }
      }
    }
    else if(this.cat == "Seed Variety"){
      this.seedId = [];
      for(var i = 0; i<this.seeds.length; i++){
        if(this.seedvariety == this.seeds[i].variety){
          this.seedId[x] = this.seeds[i]._id;
          x++;
        }
      }
    }
    else if(this.cat == "Seed Classification"){
      this.seedId = [];
      for(var i = 0; i<this.seeds.length; i++){
        if(this.seedclass == this.seeds[i].classification){
          this.seedId[x] = this.seeds[i]._id;
          x++;
        }
      }
    }

    return this.seedId;
  }

  public seedId2;
  getSeedId2(){
    var y=0;
    if(this.cat == "Seed Name"){
      for(var i = 0; i<this.seeds.length; i++){
        if(this.seedname1 == this.seeds[i].name){
          this.seedId2 = this.seeds[i]._id;
        }
      }
    }
    else if(this.cat == "Seed Variety"){
      this.seedId2 = [];
      for(var i = 0; i<this.seeds.length; i++){
        if(this.seedvariety1 == this.seeds[i].variety){
          this.seedId2[y] = this.seeds[i]._id;
          y++;
        }
      }
    }
    else if(this.cat == "Seed Classification"){
      this.seedId2 = [];
      for(var i = 0; i<this.seeds.length; i++){
        if(this.seedclass1 == this.seeds[i].classification){
          this.seedId2[y] = this.seeds[i]._id;
          y++;
        }
      }
    }

    return this.seedId2;
  }

  logoutModal(logout){
    this.modalService.open(logout, { centered: true });
  }

  clickLogout(){
      this.authService.logOut();
  }
}