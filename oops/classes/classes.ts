//classes

class Mobile{

 private mobilename:string;
 private color:string;
 private price:number;
 
 constructor(mobilename:string,color:string,price:number){

    this.mobilename=mobilename;
    this.color=color;
    this.price=price;
 }

}
let mobile=new Mobile('iphone','red',1200);
console.log(mobile);