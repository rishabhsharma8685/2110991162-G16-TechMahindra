// // function a(){
// //     console.log("Function a");
// // }

// // function b(x){
// //     console.log("Function b");
// //     x();
// // }

// // b(a());

// // create closures of add event listener function????
// var count=0;

// document.getElementById("btn1").addEventListener("click" , function(){
//     count++;
//     console.log("Clicked");
// });

// document.getElementById("btn2").addEventListener("click" , function(){
//     count++;
//     console.log("Clicked");
// })
// // ----hw----

// // document.getElementById("btn2").addEventListener("click" , function(){
// //     console.log("Clicked-2");
// // })

// // document.getElementById("btn3").addEventListener("click" , function(){
// //     console.log("Clicked-3");
// // })

// // document.getElementById("btn4").addEventListener("click" , function(){
// //     console.log("Clicked-4");
// // })

// // document.getElementById("btn5").addEventListener("click" , function(){
// //     console.log("Clicked-5");
// // })


function reachedRestaurant(callback){
    console.log("Reached Restaurant");
    setTimeout(callback, 1000);
}

function TableFinding(callback){
    console.log("Table Finding");
    setTimeout(callback, 1000);
}

function MenuDiscover(callback){
    console.log("Menu Discover");
    setTimeout(callback, 1000);
}

function starterOrder(callback){
    console.log("Starter Order");
    setTimeout(callback, 1000);
}

function mainCourse(callback){
    console.log("Main Course Order");
    setTimeout(callback, 1000);
}

function dessert(callback){
    console.log("Dessert Order");
    setTimeout(callback, 1000);
}

function payBill(callback){
    console.log("PayBill");
    setTimeout(callback, 1000);
}

// Chaining the Callbacks

// // function a(){
// //     console.log("Function a");
// // }

// // function b(x){
// //     console.log("Function b");
// //     x();
// // }

// // b(a());

// // create closures of add event listener function????
// var count=0;

// document.getElementById("btn1").addEventListener("click" , function(){
//     count++;
//     console.log("Clicked");
// });

// document.getElementById("btn2").addEventListener("click" , function(){
//     count++;
//     console.log("Clicked");
// })
// // ----hw----

// // document.getElementById("btn2").addEventListener("click" , function(){
// //     console.log("Clicked-2");
// // })

// // document.getElementById("btn3").addEventListener("click" , function(){
// //     console.log("Clicked-3");
// // })

// // document.getElementById("btn4").addEventListener("click" , function(){
// //     console.log("Clicked-4");
// // })

// // document.getElementById("btn5").addEventListener("click" , function(){
// //     console.log("Clicked-5");
// // })


function reachedRestaurant(callback){
    console.log("Reached Restaurant");
    setTimeout(callback, 1000);
}

function TableFinding(callback){
    console.log("Table Finding");
    setTimeout(callback, 1000);
}

function MenuDiscover(callback){
    console.log("Menu Discover");
    setTimeout(callback, 1000);
}

function starterOrder(callback){
    console.log("Starter Order");
    setTimeout(callback, 1000);
}

function mainCourse(callback){
    console.log("Main Course Order");
    setTimeout(callback, 1000);
}

function dessert(callback){
    console.log("Dessert Order");
    setTimeout(callback, 1000);
}

    function payBill(){
    console.log("PayBill");
}

// Chaining the Callbacks

reachedRestaurant(()=>{
    TableFinding(()=>{
        MenuDiscover(()=>{
            starterOrder(()=>{
                mainCourse(()=>{
                    dessert(()=>{
                        payBill();
                    })
                })
            })
        })
    })
});

