import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders = [];
  private total = 0;

  setOrders(order){
    var res =false;
    var index;
    for(var i=0; i<this.orders.length; i++){
      if(order.name == this.orders[i].name){
        res = true;
        index = i;
      }
    }
    if(res){
      var ctr = this.orders[index].quantity + 1;
      var amt = this.orders[index].price * ctr;
      this.orders[index] = 
        {"name": this.orders[index].name, "quantity": ctr, "price": this.orders[index].price, "amount": amt};
      this.total += this.orders[index].price; 
    }
    else{
      var obj = {"name": order.name, "quantity": 1, "price": order.price, "amount": order.price}
      this.orders.push(obj);  
      this.total += order.price;
    }
    return this.total;
  }

  getOrders(){
    return this.orders;
  }

  getTotal(){
    return this.total;
  }

  clearOrders(){
    this.orders = [];
    this.total = 0;
  }

  constructor() { }
}
