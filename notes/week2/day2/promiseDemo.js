// pranay main pomince to call anand  to call him later


let futureavailable = false;


//create a promise 
let pranayPromise = new Promise((resolve, reject) => {
     setTimeout(() => {
        if (futureavailable) {
            resolve("pranay is calling anand");
        }
        else {
            reject("pranay is busy");
        }
     }, 5000);
})

//consume the promise
 

pranayPromise.then(
    (message)=>{
console.log("anand received call from pranay : ",message);
    }
) // when promise is resolved
.catch((message)=>{
    console.log("anand could not receive call from pranay : ",message);
}) // when promise is rejected



// lesest 



//promise examle 2

let job=false;

let p= new Promise((fulfill, reject)=>{
    setTimeout(()=>{
        if( job){
            console.log("i got the job")
        }
        else(
            console.log("jog rejected")
        )

    },5000)
})
//concum promice

p.then((message)=>{
    console.log(message)

}).catch((erroe)=>{
    console.log( erroe)
})