//assignment1:daily temperature analyzer
let temp=[32,35,28,40,38,30,42]
let result=temp.filter(e=>e>35)
console.log(result)
let result1=temp.map(e=>
{
    e=(e*9/5)+32
    return e
}
)
console.log(result1)
let result2=temp.reduce((acc,e)=>
{
    return (acc+e)/temp.length
}
)
console.log(result2)
console.log(temp.find(temp=>temp>40))
console.log(temp.findIndex(temp=>temp==28))



//assignment2:online course name processor
let courses=["javascript","react","node","mangodb","express"]
let result3=courses.filter(e=>e.length>5)       
console.log(result3)    
let result4=courses.map(e=>
{
    e=e.toUpperCase()
    return e
}
)
console.log(result4)
console.log(courses.find(e=>e=='react'))
console.log(courses.findIndex(e=>e=='node'))



//assignment3:student mark list
let marks=[78,92,35,88,40,67]
console.log(marks.filter(e=>e>=40))
console.log(marks.map(e=>e=e+5))
console.log(marks.reduce((acc,e)=>(acc>e?acc:e)))
console.log(marks.find(e=>e<40))
console.log(marks.findIndex(e=>e==92))
