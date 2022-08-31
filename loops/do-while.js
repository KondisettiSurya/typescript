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
var i = 0;
var result = '';
do {
    result += "".concat(i, " ");
    i++;
} while (i <= 10);
console.log(result);
var i1 = 20;
var result1 = '';
do {
    result1 += "".concat(i1, " ");
    i1 -= 2;
} while (i1 >= 0);
console.log(result1);
