// You are building a shopping cart summary for an e-commerce website.

// Test Data :
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true },
];

// Tasks:

// Use filter() to get only inStock products
let res = cart.filter((c) => c.inStock === true);
console.log(res);
// Use map() to create a new array with:  { name, totalPrice }
let totalPrice = cart.reduce((acc, c) => acc + c.price, 0);
let ans2 = cart.map((c) => {
  return {
    name: c.name,
    totalPrice,
  };
});
console.log(ans2);

// Use reduce() to calculate grand total cart value
let res3 = cart.reduce((acc, c) => acc + c.price, 0);
console.log(res3);
// Use find() to get details of "Mouse"
let res4 = cart.find((c) => c.name == "Mouse");
console.log(res4);
// Use findIndex() to find the position of "Keyboard"
let res5 = cart.findIndex((c) => c.name == "Keyboard");
console.log(res5);

let studnet = [
  { sno: 1, name: "prranay", age: 21 },
  { sno: 2, name: "ravi", age: 22 },
  { sno: 3, name: "rajesh", age: 19 },
  { sno: 4, name: "suresh", age: 15 },
];

// find studnets age less then 20

let res = studnet.filter((s) => s.age < 20);
//console.log(res);

//inceremnt age by 3 yaers or rajesh
let res12 = studnet.map((s) => {
  if (s.name == "rajesh") {
    s.age += 3;
  }
  return s;
});
// console.log(res12);

let res2 = studnet.reduce((acc, e) => acc + e.age, 0);
console.log(res2);

//assignment3:employee payroll processor
let employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];
let itEmployees = employees.filter((e) => e.department === "IT");
let updatedSalary = itEmployees.map((e) => ({
  ...e,
  netSalary: e.salary + e.salary * 0.1,
}));
let totalPayout = employees.reduce((sum, e) => sum + e.salary, 0);
let lowSalaryEmployee = employees.find((e) => e.salary === 30000);
let nehaIndex = employees.findIndex((e) => e.name === "Neha");
console.log(updatedSalary, totalPayout, lowSalaryEmployee, nehaIndex);

//assignment4: movie streaming platform
let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
];
let sciFiMovies = movies.filter((m) => m.genre === "Sci-Fi");
let movieLabels = sciFiMovies.map((m) => `${m.title} (${m.rating})`);
let avgRating = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
let jokerMovie = movies.find((m) => m.title === "Joker");
let avengersIndex = movies.findIndex((m) => m.title === "Avengers");
console.log(movieLabels, avgRating, jokerMovie, avengersIndex);

//assignment5:bank transaction analyzer
let transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 },
];
let credits = transactions.filter((t) => t.type === "credit");
let amounts = transactions.map((t) =>
  t.type === "credit" ? t.amount : -t.amount,
);
let balance = amounts.reduce((sum, a) => sum + a, 0);
let firstDebit = transactions.find((t) => t.type === "debit");
let transactionIndex = transactions.findIndex((t) => t.amount === 10000);
console.log(credits, amounts, balance, firstDebit, transactionIndex);
