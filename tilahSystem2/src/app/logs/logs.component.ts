import { Component, OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { HistoryService } from '../history.service';
import { History } from '../history';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  elements: any = [];
  previous: any = [];
  headElements = ['User', 'Seed', 'Action', 'Date'];

  private logs: History[];

  constructor(private logService: HistoryService,
              private authService: AuthService,
              private modalService: NgbModal,
              private cdRef: ChangeDetectorRef,
              private router: Router) { }

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
          
  ngOnInit() {
    if(this.logService.userId == ""){
      this.getLogs();
    }
    else{
      this.getLog();
    }
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  getLogs(){
    this.logService.getHistory().subscribe(
      data => {
        this.logs = data;

        this.mdbTable.setDataSource(this.logs);
        this.logs = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();

        this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);

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

  getLog(){
    this.logService.getUserHistory(this.logService.userId).subscribe(
      data => {
        console.log(data)
        this.logs = data;

        this.mdbTable.setDataSource(this.logs);
        this.logs = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();

        this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);

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
    this.logService.userId = "";
  }

  logoutModal(logout){
    this.modalService.open(logout, { centered: true });
  }

  clickLogout(){
      this.authService.logOut();
  }

}
