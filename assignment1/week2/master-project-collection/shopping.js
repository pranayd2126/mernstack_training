import { courses, cart } from "./data";

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
