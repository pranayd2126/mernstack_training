 const obj1 = {
  name: "Pranay",
  address: { city: "Hyderabad" }
};

const obj2 = obj1;   // shallow copy (reference copy)

obj2.name = "Reddy";
obj2.address.city = "Delhi";

console.log(obj1.name);          // Reddy
console.log(obj1.address.city);  // Delhi ❗