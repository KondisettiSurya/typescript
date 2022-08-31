//functions

//i used arrow function here

let greet=(username:string):void=>{

    let msg:string=`Hello ${username}`;
    console.log(msg);
}
greet('surya');

// return function

let add=(a : number , b : number):number=>{
   let result:number= a + b;
   return result;
}
let output:number=add(10,20);
console.log(output);

// function with object types

interface mobile{
    Brand:string;
    color:string;
    price:number;
}
let printmobile=(mobile:mobile):void=>{

    console.log(JSON.stringify(mobile));
}
let mobileone:mobile={
      Brand:'iphone',
      color:'white',
      price:52000 
}
let mobiletwo:mobile={
    Brand:'sumsung',
    color:'black',
    price:152000 
}
printmobile(mobileone);
printmobile(mobiletwo);