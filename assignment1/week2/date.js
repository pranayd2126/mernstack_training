// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.

    let today=new Date(); 

//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds
//   t today = new Date();

let year = today.getFullYear();
console.log(year);

let month = today.getMonth(); 
console.log(month+1);

let date = today.getDate();
console.log(date);


let day = today.getDay();
console.log(day);

let hours = today.getHours();
console.log(hours);

let minutes = today.getMinutes();
console.log(minutes);

let seconds = today.getSeconds();
console.log(seconds);

console.log(`${date}-${month}-${year} ${hours}:${minutes}:${seconds}`);


// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
   let enrollmentDeadline = new Date("2026-01-25");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

 let todat2=new Date;
    if(todat2<enrollmentDeadline){
        console.log("Enrollment Open");
    }
    else{
        console.log("closed")
    }

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid


   




// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
   let dob = "2000-05-15";
   let dobDate = new Date(dob);


// Tasks:
//         1. Calculate exact age in years
   
    let today3=new Date();
    let age=today3.getFullYear()-dobDate.getFullYear();
 console.log(age);