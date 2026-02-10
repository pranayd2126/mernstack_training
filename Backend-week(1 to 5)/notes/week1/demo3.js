// let tatalAmount=0;
// tatalAmount+=500 ;


// tatalAmount+=1200;
// tatalAmount-=200;


//  tatalAmount=tatalAmount -(tatalAmount/18)
//  console.log(tatalAmount)




// let isLoggedIn=true;
// let isProfileComplete=true;
// if( !isLoggedIn){
//     console.log("please login to continue")
// }
//  else if(isLoggedIn && !isProfileComplete){
//     console.log("please complete your profile")
//  }
//  else if(isLoggedIn && isProfileComplete){    
//         console.log("welcome to the dashboard")
//     }
// 


//  let sum=0;
//  for( let v of marks){
//     sum+=v
//  }
//  console.log("the total marks is "+ sum)    


// write a funtion that  resivees marks array as argument and retuns small elemnts



// function small(marks){
//     let small= marks[0];
//      for( let v of marks){
//          if(v<small){
//             small=v;
//          }
//      }
//         return small;
// }

// marks = [90, 80, 70, 60];

//     let s=small(marks)
//     console.log("the smalles marks is "+ s)



 // write a function that resives "skaills arratand skillNmae" as argumnes and return indexif skillname is existed ,otherwise  skill not found


  function findSkill(skills,skillName){

    //   for( let i=0; i<skills.length; i++){
    //     if(skillName==skills[i]){
    //         return i;
    //     }
       
    //   }
    //     return "skill not found"

     for( let v of skills){
        if(skillName===v){
            return skills.indexOf(v);
        }
        
  }
  return "skill not found";
}

let skills = ["html","css","js","react", "nodejs"];
let result=findSkill(skills,"react");
console.log(result)