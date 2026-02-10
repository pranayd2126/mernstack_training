import { courses } from "./data";

// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
let pubCourses = courses.filter((course) => course.published === true);
//   -> Sort courses by price (high → low)

//   -> Extract { title, price } only
const { title, price } = courses;
//   -> Calculate total value of published courses
const total = pubCourses.reduce((acc, val) => acc + val.price, 0);
//   -> Add a new course immutably
courses.push({ id: 104, title: "Java", price: 888, published: true });
