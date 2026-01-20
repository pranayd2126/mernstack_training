let user={
    id:101,
    name:'ravi',
    email:'ravi@gmail.com',
    role:'student',
    isActive:true
}
console.log(user.email,user.name)
user.lastlogin='2026-01-01'
user.student='admin'
delete user.isActive
console.log(Object.keys(user))
console.log(user)