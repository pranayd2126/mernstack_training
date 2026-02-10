
// // Async Example
// // person1 order biriyani (5 sec)
// console.log("person1 :ordered biriyani"); //non-blocking
// setTimeout(() => {
//   console.log("biriyani served to person1"); // callback function non-blocking
// }, 5000);

// // person2 order curd (2 sec)
// //

// console.log("person2 :ordered CURID "); //non-blocking
// setTimeout(() => {
//   console.log("curd served to person2"); // callback function non-blocking
// }, 2000);
// // person3 order water (1 sec)
// console.log("person3 :water");  //non-blocking
// setTimeout(() => {
//   console.log("water served to person3");  // callback function non-blocking
// }, 1000);




 console.log("start");

    setTimeout(() => {
        console.log("inside timeout");
    }, 1000);

    for (let i = 0; i < 100000; i++) {
        console.log(i);
        // some heavy computation
    }

 console.log("end");