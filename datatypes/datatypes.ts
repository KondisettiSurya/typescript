
//string example 

let employeeName:string='suryaKondisetti';
console.log(`Employee Name : ${employeeName}`);

// number example

let price:number=1200;
console.log(`Food price : ${price}`);

// boolean example

let manager:boolean=true;
console.log(`mananger : ${manager}`);

//null
let managers:null= null;
console.log(`manangers : ${manager}`);

//undefined
let manager1:undefined= undefined;
console.log(`mananger1 : ${manager1}`);

//objects

let mobiles:object={

    Brand:'sumsung',
    color: 'white',
    price: 3500
}
console.log(mobiles);

//arrays

let colors:string[]=['white','black','red','orange'];
console.log(colors);

//void

// let greet=(name:string):void =>{
//     console.log(`Hello : ${name}`);
    
// };
// greet(name:'surya');

//enum

enum Months{  //enum we use capitals letters at first linke months
      
    JAN='JANUARY',
    FEB='FEBRUARY'
}
console.log(Months.FEB);// can access only one things

//any

let car:any='kia';
console.log(`car : ${car}`);
