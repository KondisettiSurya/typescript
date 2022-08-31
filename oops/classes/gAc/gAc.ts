
class Mobile{

    private mobilename:string;
    private color:string;
    private price:number;
    
    constructor(mobilename:string,color:string,price:number){
   
       this.mobilename=mobilename;
       this.color=color;
       this.price=price;
    }

    // Getters and setters to access the above private properties
   
    //getter
    public getmobilename():string{
      return this.mobilename;
    }
    public getcolor():string{
        return this.color;
      }
      public getprice():number{
        return this.price;
      }
    //setter

    public setmobilename(mobilename : string):void{
         this.mobilename=mobilename;
      }
      public setcolor(color : string):void{
        this.color=color;
     }
     public setprice(price : number):void{
        this.price=price;
     }
   }
   let mobile=new Mobile('iphone','red',1200);
  
   console.log(mobile.getmobilename());
   mobile.setmobilename('lenovo');
   console.log(mobile);
   console.log(mobile.getcolor());
   mobile.setcolor('red');
   console.log(mobile);
   console.log(mobile.getprice());
   mobile.setprice(15000);
   console.log(mobile);