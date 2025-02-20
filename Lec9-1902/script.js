// Reduce:

// sum of array

// const arr=[5,7,3,1,8];

// var sumOfArr=0;

// for(let i=0;i<arr.length;i++){
//     sumOfArr+=arr[i];
// }

// console.log(sumOfArr);

// const ans=arr.reduce(function(acc,curr){
//     acc += curr;
//     return acc
// },0);

// console.log(ans);

// accumalator : maintain state and count
// current:


// const users=[
//     { firstName:"Pratiyush", lastName:"Ray", age:25},
//     { firstName:"Piyush", lastName:"Saini", age:22},
//     { firstName:"Sahil", lastName:"Aggarwal", age:25},
//     { firstName:"Ayush", lastName:"Jawa", age:28},
//     { firstName:"Daksh", lastName:"Singh", age:40},
//     { firstName:"Agamjot", lastName:"Singh", age:26},
//   ];

// const ans=users.reduce(function(acc,curr){
//     if(!acc[curr.age]){
//         acc[curr.age]=1;
//     }
//     else{
//         acc[curr.age]++;
//     }
//     return acc; 
// },{})

// console.log(ans);

// dataMap = [2,5,7,8,3,7,9,10]

// var maxNumber = 0;

// for(let i=0 ; i<dataMap.length ; i++){
//     if(maxNumber<dataMap[i]){
//         maxNumber=dataMap[i];
//     }
// }

// console.log(maxNumber);

// const sol = dataMap.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// }, 0);

// console.log(sol);






// CALLBACK

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

// reachedRestaurant(()=>{
//     TableFinding(()=>{
//         MenuDiscover(()=>{
//             starterOrder(()=>{
//                 mainCourse(()=>{
//                     dessert(()=>{
//                         payBill();
//                     })
//                 })
//             })
//         })
//     })
// });

// PROMISE

// reachedRestaurant(function(){
//     console.log("I Reached Eagle Motel")
// })
// .then(TableFinding)
// .then(MenuDiscover)
// .then(starterOrder)
// .then(mainCourse)

// const myRestaurantPromise = new Promise(resolve,reject){
//     if(1:30>time>2:30){  
//         resolve("Yes successfully reached");
//     }
//     else{
//         reject("can't reach on time");
//     }
// }  pending ,,,, do it from gh


// const githubData = fetch("https://api.github.com/rishabhsharma8685");
// setTimeout(()=>{
//     console.log(githubData);
// },1000)
// console.log(githubData);





// const cart = ["shoes" , "watches" , "bags" , "glasses" , "shirts"];

// createOrder(cart,callback){
//     console.log("ORDER CREATION")
//     orderPayment(orderId,callback){
//         console.log("ORDER PAYMENT")
//         orderSummary(orderId,callback){
//             console.log("Order Summary")
//             updateWallet(){
//                 console.log("WALLET UPDATED")
//             }
//         }
//     }
// }

const cart = [];

function createOrder(cart){
    const myPromise = new Promise(function(resolve,reject){
        if(cart.length>0){
            resolve("12345");
            console.log("order created successfully")
        }
        else{
            const err = new Error("Order Failed")
            reject(err.message);
        }
    });
    return myPromise;
}

function orderPayment(orderId){
    console.log("Order Payment Successfully", orderId);
}
function orderSummary(orderId){
    console.log("Order summary created");
}
function updateWallet(){
    console.log("Wallet updated");
}
// console.log(createOrder(cart));

createOrder(cart)
.then(function (orderId){
    return orderPayment(orderId)
})
.then(function (orderId){
    return orderSummary(orderId)
})
.then(function (orderId){
    return updateWallet();
})
.catch(function (err){
    console.log("ERROR OCCURED")
    console.log(err.message);
})

// only create order failed next things worked
// createOrder(cart)
// .catch(function (err){
//     console.log("ERROR OCCURED")
//     console.log(err.message);
// })
// .then(function (orderId){
//     return orderPayment(orderId)
// })
// .then(function (orderId){
//     return orderSummary(orderId)
// })
// .then(function (orderId){
//     return updateWallet();
// })







// createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("Order Payment Successfully", orderId)
// })
// .then(function orderSummary(orderId){
//     console.log("Order Summary" , orderId)
// })

// createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)





// Promise APi

// promise.all -> return failure Even if one promise failed and first failed reason is given

/* promise.allSettled -> return an array of fulfilled or rejected promise at the end of longest promise time
even if some promises fail*/

/*promise.any -> if any fulfilled it will return it and if all failed it will return
error messages of all.called aggregate error*/ 

/*promise.race -> if any promise settled first whether fulfilled or reject is returned*/







