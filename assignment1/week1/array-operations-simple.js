// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temps = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
let res1 = temps.filter((t) => t > 35);
console.log(res1);
//     2. map() to convert all temperatures from Celsius → Fahrenheit
let res2 = temps.map((t) => (t * 9) / 5 + 32);
console.log(res2);

//     3. reduce() to calculate average temperature
let res3 = temps.reduce((acc, t) => acc + t, 0) / temps.length;
console.log(res3);
//     4. find() first temperature above 40
let res4 = temps.find((t) => t > 40);
console.log(res4);
//     5. findIndex() of temperature 28
let res5 = temps.findIndex((t) => t == 28);
console.log(res5);

// task 3

// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const cou = ["javascript", "react", "node", "mongodb", "express"];

// Tasks:
//     1. filter() courses with name length > 5
let res1 = cou.filter((c) => c.length > 5);
console.log(res1);

//     2. map() to convert course names to uppercase
let res2 = cou.map((c) => c.toUpperCase());
console.log(res2);
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let res3 = cou.reduce((acc, c) => acc + " | " + c.toUpperCase());
console.log(res3);

//     4. find() the course "react"
let res4 = cou.find((c) => c == "react");
console.log(res4);
//     5. findIndex() of "node"
let res5 = cou.findIndex((c) => c === "node");
console.log(res5);

// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
let res = marks.filter((m) => m >= 40);
console.log(res);
//     2. map() to add 5 grace marks to each
let res2 = marks.map((m) => m + 5);
console.log(res2);

//     3. reduce() to find highest mark
let res3 = marks.reduce((acc, m) => {
  return acc > m ? acc : m;
});
console.log(res3);
//     4. find() first mark below 40
let res4 = marks.find((m) => m < 40);
console.log(res4);
//     5. findIndex() of mark 92
let res5 = marks.findIndex((m) => m == 92);
console.log(res5);
