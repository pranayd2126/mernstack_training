// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)



class Book {
  title;
  author;
  pages;
  isAvailabe = true;
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  //   Methods:
  //       borrow() - Marks the book as not available
  //       returnBook() - Marks the book as available
  //       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
  //       isLongBook() - Returns true if pages > 300, false otherwise

  borrow() {
     this.isAvailabe=false;
     return ` the book ${this.title} is available: ${this.isAvailabe}`;

        

  }
  returnBook() {
    this.isAvailabe=true;
      return ` the book ${this.title} is available: ${this.isAvailabe}`;
  }
  getInfo() {
     return ` the ${this.title} ,by ${this.author} no of pages ${this.pages}`
  }
  isLongBook() {
     if( this .pages>300){
        return true;
     }
     return false;
  }
}


//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.

let book1=new Book("harry Poter","The Hobbit",300);
let book2= new Book("pranay" ,"anand",250);
let book3=new Book("rich dad ","robert",350)
let book4 = new Book("habits","adithya",400)
let book5= new Book("alloe" ,"jeshwanth" ,200)

//   2. Perform the following operations:

//       i. Display info of all books
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());
console.log(book4.getInfo());
console.log(book5.getInfo());
        
//       ii. Borrow 2 books and show their availability status

 console.log(book1.borrow());
console.log(book2.borrow());

//       iii. Return 1 book and show updated status
console.log(book1.returnBook());
//       iv. Count how many books are "long books" (more than 300 pages)
let count=0;
let booksLong=[book1,book2,book3,book4,book5];
let res=booksLong.filter((b)=>b.isLongBook()===true);
//console.log(res);
console.log(`Number of long books: ${res.length}`);

//       v. List all available books
 let books=[book1,book2,book3,book4,book5];
 let availableBooks=books.filter((b)=>b.isAvailabe===true);
 console.log("Available books:");
 //console.log(availableBooks);
 availableBooks.forEach((b)=>console.log(b.getInfo()));

