//assignment1:smart login status engine

let isLoggedIn=true;
let isProfileComplete=true;
if( !isLoggedIn){
    console.log("please login to continue")
}
 else if(isLoggedIn && !isProfileComplete){
    console.log("please complete your profile")
 }
 else if(isLoggedIn && isProfileComplete){    
        console.log("welcome to the dashboard")
    }



//assignment2:course price tag labeler
let price = 1299;
let label;
if (price < 500) {
  label = "Budget Course";
} else if (price >= 500 && price <= 1000) {
  label = "Standard Course";
} else {
  label = "Premium Course";
}
console.log(label);


//assignment3:enrollment eligibility checker
let hasPaid = true;
let hasCompletedBasics = false;
let enrollMessage =
  hasPaid && hasCompletedBasics ? "Enroll Now": "Complete Requirements";
console.log(enrollMessage);
