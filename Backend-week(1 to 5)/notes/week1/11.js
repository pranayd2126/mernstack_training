 let studnet =[
    
        {sno:1,name:"prranay",age:21}
        ,{sno:2,name:"ravi",age:22}
        ,{sno:3,name:"rajesh",age:19}
        ,{sno:4,name:"suresh",age:15}   

    
]

// find studnets age less then 20

let res= studnet.filter((s)=>s.age<20);
//console.log(res);


 //inceremnt age by 3 yaers or rajesh
 let res12= studnet.map((s)=>{
    if( s.name=="rajesh"){
        s.age+=3;
    }
    return s;
 })
   // console.log(res12);

let res2= studnet.reduce((acc,e)=>acc+e.age,0);
console.log(res2);
