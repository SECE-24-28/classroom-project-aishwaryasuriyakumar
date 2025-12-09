// setTimeout(()=>{
//     console.log("setTimeout Function");
// }, 0);
// //callback fun n timer
// console.log("Hello World!");

// //callback Hell
// //Next callbacks

// setTimeout(() => {
//     console.log(setTimeout Function 1);
//     setTimeout(() => {
//     console.log(setTimeout Function 2);
//     setTimeout(() => {
//     console.log(setTimeout Function 3);
//     setTimeout(() => {
//     console.log(setTimeout Function 4);
//     setTimeout(() => {
//     console.log(setTimeout Function 5);
    
// }, 2000);
// }, 2000);
// }, 2000);
// }, 2000);
// }, 2000);

// //promise
// //3 states:
// //pending
// //fulfilled
// //rejected

// let myPromise = neew Promise((res, rej) => {
//     let Marks = 40;
//     if (Marks >= 60) {
//         res("pass");
//     } else {
//         rej("fail");

//     }
// });

// //way to call a promise
// //.then() n .catch()
// myPromise
//     .then((a) => {
//         console.log(a);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// //Async n await
// //no error handling

// let handlePromise = async () => { 
//     try {
//         console.log("ASDF");
//         let response = await myPromise;
//         console.log(response);
//         console.log("Anything")

//     }
//     catch (err) {
//         console.log(err);
//     } finally { 
//         console.log("this will execute anyway"); 
//     }
//  }