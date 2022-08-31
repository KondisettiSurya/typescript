//if else and switch

//prompt for dynamics


//if else

let weather:string='sunny';
if(weather=='rainy'){
    console.log('Grab an ☔')
}
else if(weather=='snow'){
     
    console.log('Grab an 🧣');
}
else if(weather=='spring'){
    console.log('Grab an 🍵');
}
else{
    console.log('Grab an 😎');
}


//switch

let day:number= new Date().getDay();
let today:string ='';
switch(day){

    case 0: today='sunday'; break;
    case 1: today='Monday'; break;
    case 2: today='Tueday'; break;
    case 3: today='Wednesday'; break;
    case 4: today='Thrusday'; break;
    case 5: today='Friday'; break;
    case 6: today='Saturday'; break;
}
console.log(today);
