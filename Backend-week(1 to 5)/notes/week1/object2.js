let test={
    a:10,
    b:20,
    c:30
}
// umpacking object
// let {a,b,c}= test;
// console.log(a);
// console.log(b);
// console.log(c);

 let student ={
    sno:100,
    sname:"pranay",
    marks:[90,80,70],
    address:{
        city:"hyd",
        state:"ts"
    },

    getAvarage:function(){
        let total=0;
        for(let marks of this.marks){
            total+=marks;
        }   
        return total / this.marks.length;   
  }

}
let avarage= student.getAvarage();
console.log(avarage);