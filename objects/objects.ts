
//objects declaration

interface car{

    Name:string;
    Color:string;
    Price:number;
}
let carobj:car={

    Name:'kia',
    Color:'Red',

    Price: 1200
}

console.log(carobj);
console.log(carobj.Name);



//nested objects


interface address{
   
    country:string;
    state:string;    

}
interface contact{
    phone:number;
    email:string;
}
interface Employee{
    employeeName:string;
    age:number;
    Address:address;
    contactus:contact;
   
}


let employee:Employee={
    employeeName : 'surya',
    age: 21,
    Address:{
        country:'India',
        state:'Andhrapradesh'
    },
    contactus:{
          phone:9154612347,
          email:'suryakondisetti123@gmail.com'
    }
    
};
console.log(employee);
