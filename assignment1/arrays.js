//assignment 1:shopping cart summary for an e-commerce website
let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let inStockItems = cart.filter(item => item.inStock);
let priceList = inStockItems.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
let grandTotal = priceList.reduce((sum, item) => sum + item.totalPrice, 0);
let mouseDetails = cart.find(item => item.name === "Mouse");
let keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log(inStockItems, priceList, grandTotal, mouseDetails, keyboardIndex);



//assignment2:student performance dashboard
let students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let passedStudents = students.filter(s => s.marks >= 40);
let gradedStudents = passedStudents.map(s => ({
  ...s,
  grade:
    s.marks >= 90 ? "A" :
    s.marks >= 75 ? "B" :
    s.marks >= 60 ? "C" : "D"
}));
let averageMarks =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;
let topScorer = students.find(s => s.marks === 92);
let kiranIndex = students.findIndex(s => s.name === "Kiran");
console.log(gradedStudents, averageMarks, topScorer, kiranIndex);


//assignment3:employee payroll processor
let employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
let itEmployees = employees.filter(e => e.department === "IT");
let updatedSalary = itEmployees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.10
}));
let totalPayout =
  employees.reduce((sum, e) => sum + e.salary, 0);
let lowSalaryEmployee = employees.find(e => e.salary === 30000);
let nehaIndex = employees.findIndex(e => e.name === "Neha");
console.log(updatedSalary, totalPayout, lowSalaryEmployee, nehaIndex);



//assignment4: movie streaming platform
let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
let sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");
let movieLabels = sciFiMovies.map(m => `${m.title} (${m.rating})`);
let avgRating =
  movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
let jokerMovie = movies.find(m => m.title === "Joker");
let avengersIndex = movies.findIndex(m => m.title === "Avengers");
console.log(movieLabels, avgRating, jokerMovie, avengersIndex);



//assignment5:bank transaction analyzer
let transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
let credits = transactions.filter(t => t.type === "credit");
let amounts = transactions.map(t =>
  t.type === "credit" ? t.amount : -t.amount
);
let balance = amounts.reduce((sum, a) => sum + a, 0);
let firstDebit = transactions.find(t => t.type === "debit");
let transactionIndex = transactions.findIndex(t => t.amount === 10000);
console.log(credits, amounts, balance, firstDebit, transactionIndex);
