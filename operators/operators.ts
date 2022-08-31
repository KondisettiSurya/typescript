

//logical operators     &&  ||  ^

//ternary operators  ?:


//arithmetic operators  +  _  *  /  %  


let num1:number= 10;
let num2:number= 20;

console.log(`${num1 + num2}`);
console.log(`${num1 - num2}`);
console.log(`${num1 * num2}`);
console.log(`${num1 / num2}`);
console.log(`${num1 % num2}`);


// shorthand math       +=  -=  *=  /=


let var1:number=10;
let var2:number=20;
let var3:number=30;
//instead of var3= var3 + (var1 * var2);
var3 += var1 * var2;
console.log(var3);
var3 -= var1 * var2;
console.log(var3);
var3 *= var1 * var2;
console.log(var3);
var3 /= var1 * var2;
console.log(var3);

//incr/decr operators ++ --

let x:number=10;
x++;
console.log(x);
x--;
console.log(x);


//conditional operators  <  > >= <= != !==
//logical operators     &&  ||  ^

let marks:number=145;
let result:string='surya';
if(marks<=145) {
    result ='Good';
}
else if(marks >=145){
   result='outstanding'
}
else if(marks>100 || marks<80){
    result='passed'
}
else{
    result='failed.......'
}
console.log(result);


