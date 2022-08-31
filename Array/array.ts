let fruits:string[]=['🍎','🥭','🍉','🍍','🍊'];
console.log(fruits);

let output:string='';
for(let i=0; i<fruits.length; i++){
    // output += `${fruits[i].toUpperCase} `;
    output += `${fruits[i]} `;
}
console.log(output);

//for -in
// we get index of the object

output='';
for(let index in fruits){
    output += `${fruits[index]} `;
}
console.log(output);

//for of


output='';
for(let fruit of fruits){
    output += `${fruit} `;
}
console.log(output);