// console.log(a);
// var a=10;

// function asumOfTwo(a,b){
//     var sum =a+b;
//     return sum

// }

// console.log(asumOfTwo(10,9))
// console.log(a);

// setInterval 

// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3)
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(3)
// },5000)
// console.log(6)


// function counter(){
//     var count=0;
//     return function increment(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1=counter();
// counter1();
// counter1();
// counter1();
// counter1();

function Counter(){
    var count=0;
    this.increment=function (){
        count++;
        console.log(count);
    }
    this.decrement= function (){
        count--;
        console.log(count);
    }
    
}

var counter1=new Counter();
counter1.increment();
counter1.increment();
counter1.decrement();