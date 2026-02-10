//callback functio a funcetion sends as arg to antherfunction
 function test1(a)
 {
    //console.log(a)
 }

  test1(function(){
    return 123;
  });


  // arrat
let skills=["html","css","js","react"];

let [skill1,skill2,skill3,skill4]=skills;

//insering 
 //ar start
    skills.unshift("nodejs");
   // console.log(skills);
    //ar end    
    skills.push("express");
    //console.log(skills);
    //ar mid
    skills.splice(2,0,"mongodb");
  //  console.log(skills);
    //remove from start



    // write a function that can extract  marks grater then 70 , packed them into an array and return the array



     let marks=[45,67,89,90,23,56,78,88];
    function getMarks(marks){
        let res=[];
        for(let mark of marks){
            if(mark>70){
                res.push(mark);
            }   
    }
    return res;
}
let highMarks=getMarks(marks);
//


 let result =marks.filter((e)=>e>70);
 //console.log(result);                   

// find all marks between 30 qnd 90

// let res2= marks.filter((e)=>e>30 && e<90);
// console.log(res2);



//maps demo




 let salaries=[100,200,300];

 //add 50 foe eachsalary

//  function addslasries(salaries){
//     let res=[];
//     for(let sal of salaries){
//         res.push(sal+50);
//     }       
//     return res;
//     }
//     let newSalaries=addslasries(salaries);               


//     console.log(newSalaries);


    let newSalaries=salaries.map((e)=>e+50);
    console.log(newSalaries);


// reduce demo
 let reslut4= marks.reduce((acc,e) => acc + e);
    console.log(reslut4);

    let reslut5= marks.reduce((acc,e) => acc<e? acc : e);
    console.log(reslut5);

    let result6= function findMin(marks){
        let min=marks[0];
        for(let mark of marks){
            if(mark<min){   
                min=mark;
            }
        }   
        return min;
        
    }

// find the max mark


 let result7= marks.find((e))


