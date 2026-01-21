let user={
    id:101,
    name:'ravi',
    email:'ravi@gmail.com',
    role:'student',
    isActive:true
}
console.log(user.name, user.email);
 user.lastLogin= "2024-06-15 10:00:00";
 user.role="admin";
 delete user.isActive;
 console.log(Object.keys(user));
 console.log(user);
 
