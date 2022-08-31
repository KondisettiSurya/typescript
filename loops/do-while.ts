//while loop

//syntax

/*
    initialize;
    do{
          // statements
        //incr/decr (last stmt)
    }

    while(condition);

      

*/

let i:number=0;
let result:string='';
 do{
    result += `${i} `;
    i++;
}
while(i<=10);
console.log(result);


let i1:number=20;
let result1:string='';
do{

    result1 += `${i1} `;
    i1-=2;
}
while(i1>=0);
console.log(result1);

