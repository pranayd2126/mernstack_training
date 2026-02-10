import { roles } from "./data";

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
