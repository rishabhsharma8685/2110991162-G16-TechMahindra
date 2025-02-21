// let studentSahil ={
//     firstName:"Sahil",
//     lastName:"Aggarwal",

//     // getName:function (){
//     //     console.log(this.firstName+" "+this.lastName);
//     // }
//     // getResult:function (){
//     //     console.log("Passed")
//     // }
// }

//  let getName= function (classStudent,test){
//     // console.log(this.firstName+" "+this.lastName);
//     console.log(this.firstName+" "+this.lastName+" from class "+ classStudent+test);
// }

// let studentJasjot ={
//     firstName:"Jasjot",
//     lastName:"Singh",

    // getName:function (){
    //     console.log(this.firstName+" "+this.lastName);
    // }

    // getResult:function(){
    //     console.log("Passed");
    // }
// }

//call
// getName.call(studentSahil);
// getName.call(studentJasjot);

// const getStudent1= getName.call(studentSahil,"G16","g23");
// const getStudent2= getName.apply(studentJasjot,["G16,g15,g17"],["g22"]);

// //bind

// const getStudentBind = getName.bind(studentSahil,"G16");
// console.log(getStudentBind())
// console.log(getStudent1);


// var print= studentSahil.firstName+" "+ studentSahil.lastName;
// console.log(print);
// studentSahil.getResult();

// studentSahil.getName();



//====================================================



// What is Event Bubbling and Event Capturing?
// Event Bubbling is Happening from child to GrandParent (by doing false {which is by default})
// Event capturing is from grandparent to child (By doing true)

// document.getElementById("grandParent").addEventListener("click", 
//     (e)=>{
//         console.log("THIS IS GRAND PARENT DIV");
//         e.stopPropagation()
//         console.log(e);
//     },false
// )

// document.getElementById("parent").addEventListener("click", 
//     (e)=>{
//         console.log("THIS IS PARENT DIV");
//         e.stopPropagation()
//         console.log(e);
//     },false
// )

// document.getElementById("Child").addEventListener("click", 
//     (e)=>{
//         console.log("THIS IS CHILD DIV");
//         e.stopPropagation()
//         console.log(e);
//     }, false
// )



// document.getElementById("cs").addEventListener("click", ()=>{
//     window.location.href="localhost/cs"
// })

// document.getElementById("ece").addEventListener("click", ()=>{
//     window.location.href="localhost/ece"
// })

// document.getElementById("me").addEventListener("click", (e)=>{
//     window.location.href="localhost/me";
//     e.stopPropagation()
//     console.log(e);
// })


// This is event delegation where we use only one eventlistener instead of multiple event listeners
// each element.

// document.getElementById("subjects").addEventListener("click", (e)=>{
//     window.location.href=e.target.id;
//     console.log("https://localhost/" + e.target.id);
// }
// )




//=====================================================

// Debouncing in JS


document.getElementById("searchBox").addEventListener("input", debouncingFunction);

let whichCall=0;

function fetchData(){
    console.log("Fetching API data", whichCall++);
}
let timeout;
function debouncingFunction(){
    clearTimeout(timeout);
    timeout = setTimeout(fetchData,2000);
}