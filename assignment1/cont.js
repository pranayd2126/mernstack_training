//assignment1:smart login status engine

let isLoggedIn = true;
let isProfileComplete = false;
let message;
if (!isLoggedIn) {
  message = "Please login";
} else if (isLoggedIn && !isProfileComplete) {
  message = "Complete your profile";
} else {
  message = "Welcome back!";
}
console.log(message);


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
