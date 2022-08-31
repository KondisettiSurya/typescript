interface Twitter{
    twitteruser:String;
    twitterUserName:string;
    twitterPassword:string;
    twitterAddress:string;
    Age:Number;
}
let users:Twitter[]=[
    {
 
    twitteruser:'surya',
    twitterUserName:'suryakondisetti',
    twitterPassword:'surya@123',
    twitterAddress:'Rajendra nagar 16taps',
    Age:22
},
{
 
    twitteruser:'krishna',
    twitterUserName:'krishna',
    twitterPassword:'Krishna@123',
    twitterAddress:'Hyderabad',
    Age:21
},
{
 
    twitteruser:'suresh',
    twitterUserName:'suresh',
    twitterPassword:'suresh@123',
    twitterAddress:'Hyderabad',
    Age:24
},
{
 
    twitteruser:'murali',
    twitterUserName:'lipstick remover',
    twitterPassword:'lip@123',
    twitterAddress:'Hyderabad',
    Age:23
}
];
// console.log(users);

 let olduser:Twitter[]=users.filter((twitter:Twitter)=>{
    return twitter.Age<22;
 });
 console.log(olduser);