import { Component, OnInit } from '@angular/core';

import { Seed } from '../seed';
import { User } from '../user';
import { Sale } from '../sale';

import { SeedService } from '../seed.service';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';
import { SaleService } from '../sale.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  private user: User[];
  public items: Seed[];
  public item: Seed[];
  public orders;
  public obj;
  public total = 0;
  public payment = 0;
  public change = 0;
  basicModal;

  public date = Date();
  public dateNow;
  public dateNum;

  headElements = ['Item Name', 'Price', 'Quantity', 'Amount'];

  constructor(private itemService: SeedService,
    private orderService: OrderService,
    private userService: UserService,
    private saleService: SaleService,
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
    this.getItems();
    this.orders = this.orderService.getOrders();
    this.getUser();
    this.dateNow = this.date.substring(4, 7);
    this.setDate();
  }

  getUser(){
    this.userService.getUser(this.userService.currentUser).subscribe(
      data => {
        this.user = data;
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

  getItems(){
    this.itemService.getSeeds().subscribe(
      data => {
        this.items = data;
        this.item = data;
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

  onClick(item){
    var x = false;
    for(var i=0; i<this.items.length; i++){
      if((this.items[i]._id == item) && (this.items[i].stocks != 0 )){
        this.obj = 
          {"name": this.items[i].name, "price": this.items[i].price};
        x = true;
      }
    }
    if(x){
        this.total = this.orderService.setOrders(this.obj);
        x = false;
    }
    else{
      alert("This Seed was out of Stock!")
      x = false;
    }
  }

  clickClear(){
    this.orderService.clearOrders();
    this.orders = this.orderService.getOrders();
    this.total = this.orderService.getTotal();
  }

  payModal(pay){
    this.modalService.open(pay, { centered: true });
  }

  clickPay(id){
    if(this.change >= 0){
      for(var j=0; j<this.items.length; j++){
        for(var i=0; i<this.orders.length; i++){
          if(this.items[j].name == this.orders[i].name){
            //this.items[j].stocks = this.items[j].stocks - this.orders[i].quantity;
            var seed = new Seed();
            seed.name = this.items[j].name;
            seed.variety = this.items[j].variety;
            seed.classification = this.items[j].classification;
            seed.description = this.items[j].description;
            seed.stocks = this.items[j].stocks - this.orders[i].quantity;
            seed.number_of_days = this.items[j].number_of_days;
            seed.price = this.items[j].price;
            seed.updated_by = this.userService.currentUser;
            this.itemService.updateSeed(seed, this.items[j]._id).subscribe(
              data => {
                this.getItems();
                this.orders = this.orderService.getOrders();
                this.getUser();
              },
              err => {
                if(err instanceof HttpErrorResponse){
                  if(err.status === 401){
                    this.router.navigate(['/login']);
                  }
                }
              }
            );
            var sale = new Sale();
            sale.itemId = this.items[j]._id;
            sale.quantity = this.orders[i].quantity;
            sale.amount = this.orders[i].amount;
            sale.sold_by = id;
            sale.dateNow = this.dateNum;

            this.saleService.addSale(sale).subscribe((data) => {
              this.getItems();
              this.orders = this.orderService.getOrders();
              this.getUser();
            })
          }
        }
      }

      this.orderService.clearOrders();
      this.orders = this.orderService.getOrders();
      this.total = this.orderService.getTotal();
      this.payment = 0;
      this.change = 0;
    }
  }

  setDate(){
    switch(this.dateNow){
      case "Jan" : 
        this.dateNum = '01';
        break;
      case "Feb" :
        this.dateNum = '02';
        break;
      case "Mar" : 
        this.dateNum = '03';
        break;
      case "Apr" : 
        this.dateNum = '04';
        break;
      case "May" : 
        this.dateNum = '05';
        break;
      case "Jun" : 
        this.dateNum = '06';
        break;
      case "Jul" : 
        this.dateNum = '07';
        break;
      case "Aug" : 
        this.dateNum = '08';
        break;
      case "Sep" : 
        this.dateNum = '09';
        break;
      case "Oct" : 
        this.dateNum = '10';
        break;
      case "Nov" : 
        this.dateNum = '11';
        break;
      case "Dec" : 
        this.dateNum = '12';
        break;
      default:
        this.dateNum = '00';
    }
  }

  logoutModal(logout){
    this.modalService.open(logout, { centered: true });
  }

  clickLogout(){
      this.authService.logOut();
  }

}
