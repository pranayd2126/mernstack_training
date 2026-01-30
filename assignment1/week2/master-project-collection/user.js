import { users } from "./data";

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
