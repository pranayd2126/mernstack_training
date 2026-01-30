//  fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));


    // modren way using async await
   async function getData
    () {
        let res= await fetch('https://jsonplaceholder.typicode.com/posts/')
        let data= await res.json();
        console.log(data);
    }
    getData();
