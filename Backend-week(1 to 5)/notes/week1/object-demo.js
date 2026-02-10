// student aboject woth props rollno name age city
let student={
    rollno:101,
    name:"pranay",
    age:21,
    city:"hyd"
}
// prodeuct obj woth prop productem brand price

let product={
    productname:"iphone",
    brand:"apple",
    price:90000
}

 //All premetives are immutable in js

 let a=10
    a=20
    
   // console.log(a); //20
    a = a + 10;
// all ref ypes are mutables
// perration on object 

 let emp ={
    eno:1,
    name:"pranay"
 }


  emp.city="hyd"
   console.log(emp);

   //update a prop
    emp.eno=2
    console.log(emp);
    //delete a prop
    delete emp.name
    console.log(emp);
     // freeze an object
        Object.freeze(emp)
        // all key ead keys

         console.log(Object.keys(emp));
         // all values
         console.log(Object.values(emp));
         // all entries
         emp.country="india" // will not add
         
      console.log(Object.entries(emp));