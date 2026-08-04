// function placeholder(callback){
//     setTimeout(()=>{
//         console.log("order placed");
//         callback();

//     },2000);
// }
// function process(callback){
//     setTimeout(() => {
//         console.log("payment successful");
//         callback();
//     }, 2000);
// }
// function inventory(callback){
//     setTimeout(() => {
//         console.log("updated inventory");
//         callback();
//     }, 2000);
// }
// function send(callback){
//     setTimeout(()=>{
//         console.log("email send");
//         callback();
//     },2000);
// }
// placeholder(() => {
//     process(() => {
//         inventory(() => {
//             send(() => {
//                 console.log("All tasks completed");
//             });
//         });
//     });
// });

// function placeholder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Order placed");
//             resolve();
//         }, 2000);
//     });
// }
// function process() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Payment successful");
//             resolve();
//         }, 2000);
//     });
// }
// function inventory() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Inventory updated");
//             resolve();
//         }, 2000);
//     });
// }
// function send() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Email sent");
//             resolve();
//         }, 2000);
//     });
// }
// async function process() {
//     let placeholders = await placeholder();
//     console.log(placeholders);
    
// }
// placeholder();
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login successful");
            resolve();
        }, 2000);
    });
}
function loadprofile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("loading profile");
            resolve();
        }, 2000);
    });
}
function loginprofile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("loading posts,load comments");
            resolve();
        }, 2000);
    });
}
async function start() {
    await login();
    await loadprofile();
    await loginprofile();
    console.log("All tasks completed");
}

start();