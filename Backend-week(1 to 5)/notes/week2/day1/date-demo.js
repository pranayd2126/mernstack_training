//  let di=new Date();
//  let date2= new Date('2022-1-12')
//  let date3=new Date(2022,0,12)
//  console.log(di);
//  console.log(date3.toDateString());
// consolel.log(   date2)

import { b } from "./day-1module1"

// getFullYear()
//getMonth()
//getDate()
//getDay()
//getHours()



//set date componets
// setFullYear()
// setMonth()
//setDe(dayeofMonth)
//setHours()




// let date1= new Date(2022,0,1)
// let date2=new Date(2024,0,1)

// //find diff

//  if(date1>date2){
//     [date1,date2]=[date2,date1]

//  }

// //find year

// let years=date2.getFullYear()-date1.getFullYear()
// //find months
// let months=date2.getMonth()-date1.getMonth()
//  if (months<0){
//     years--;
//     months+=12;
//  }
// let days=date2.getDate()-date1.getDate()
//     if (days<0){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

// console.log(years,months,days)



//  let obj={
//     a:10,
//     b:20    
//  }

//  let copyObj={...obj}
// console.log(copyObj)


//  let student={
//      collageName:"anurag unityr",
//      collageAddres:{
//         street:"uppal"
//      }

//  }
 const obj1 = {
  name: "Pranay",
  address: { city: "Hyderabad" }
};

const obj2 = obj1;   // shallow copy (reference copy)

obj2.name = "Reddy";
obj2.address.city = "Delhi";

console.log(obj1.name);          
console.log(obj1.address.city);  
