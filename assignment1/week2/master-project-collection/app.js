// Project story:
// -------------
// “We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

// Data setup:
// -----------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false },
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true },
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 },
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"],
};

// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
let activeUsers = users.filter((user) => user.active === true);
//   -> Extract names of active users
let names = activeUsers.map((m) => m.name);
//   -> Check if any admin exists
let admin = users.find((user) => user.role === "admin");
//   -> Find user by id
let user = users.find((user) => user.id === 3);
//   -> Deactivate a user immutably
user.active = false;

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

// MODULE 3: SHOPPING CART ENGINE
//   -> Merge cart with courses to get full course info
const detailedCart = cart.map((item) => {
  const course = courses.find((c) => c.id === item.courseId);
  return {
    ...course,
    qty: item.qty,
    totalPrice: course.price * item.qty,
  };
});
console.log(detailedCart);
//   -> Calculate total cart amount
const totalCart = detailedCart.reduce((acc, val) => acc + val.totalPrice, 0);
//   -> Increase quantity of a course (immutably)
const increaseQty = cart.map((item) =>
  item.courseId === 101 ? { ...item, qty: item.qty + 1 } : item,
);
//   -> Remove a course from cart
const removeCart = cart.filter((item) => item.courseId != 103);
//   -> Check if all cart items are paid courses

// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
const roleNames = Object.keys(roles);
//   -> Check if student can delete
const canStudentDelete = roles.student.includes("delete");
//   -> Create a flat list of all unique permissions
const allPermissions = [...new Set(Object.values(roles).flat())];
//   -> Add new role moderator immutably
const updatedRoles = {
  ...roles,
  moderator: ["view", "update"],
};
