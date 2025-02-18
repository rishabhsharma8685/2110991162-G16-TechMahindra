// Higher Order Function

// data = [2,4,6,8,10];


// const calculateDoubleData = function (data){
//     var output =[];
//     for(let i=0 ; i<data.length ; i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }

// const calculateHalfData = function (data){
//     const output = [];
//     for(let i=0 ; i<data.length ; i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }

// const calculateAddTen = function (data){
//     const output = [];
//     for(let i=0 ; i<data.length ; i++){
//         output.push(data[i]+10);
//     }
//     return output;
// }

// console.log(calculateDoubleData(data));
// console.log(calculateHalfData(data));
// console.log(calculateAddTen(data));


// function doubleData(insideData){
//     var ans = insideData*2;
//     return ans;
// }

// function halfData(insideData){
//     var ans = insideData/2;
//     return ans;
// }

// function addTen(insideData){
//     var ans = insideData+10;
//     return ans;
// }

// const calculateData = function(data, callback){
//     console.log("We are inside CalculateData");
//     var output=[];
//     for(let i=0 ; i<data.length ; i++){
//         output.push(callback(data[i]));
//     }
//     return output;
// }


// Polyfill of Map feature of JS;
// By Using Prototype

// Array.prototype.mapp = function (logic){
//     var output=[];
//     for(let i=0 ; i<this.length ; i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// console.log(data.mapp(doubleData));



// console.log(calculateData(data,doubleData));
// console.log(data.map(doubleData));

// console.log(calculateData(data,doubleData));
// console.log(calculateData(data,halfData));
// console.log(calculateData(data,addTen));



// data = [2,9,16,42,71];

// function diameter(insidedata){
//     var sol = insidedata*2;
//     return sol;
// }

// function circumference(insidedata){
//     var sol = insidedata*2*3.14;
//     return sol;
// }

// function area(insidedata){
//     var sol = insidedata*insidedata*3.14;
//     return sol;
// }

// console.log(data.map(diameter));
// console.log(data.map(area));
// console.log(data.map(circumference));


// Filter

// data = [5, 4, 2, 6, 1 ,3, 7];

// function checkodd(insidedata){
//     if(insidedata%2!=0){
//         return insidedata;
//     }
// }

// const check = function (data,callback){
//     var output = [];
//     for(let i=0 ; i<data.length ; i++){
//             output.push(callback(data[i]));
//     }
//     return output;
// } 
// console.log(check(data,checkodd));


// Array.prototype.filtrr = function (logic){
//     var output=[];
//     for(let i=0 ; i<this.length ; i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// console.log(data.filtrr(checkodd));

// console.log(data.filter(checkodd));


const users=[
    {firstName:"Rishabh", lastName:"Sharma" , age:22},
    {firstName:"Rituraj", lastName:"Bhardwaj" , age:28},
    {firstName:"Chirag", lastName:"Gupta" , age:21},
    {firstName:"Shivam", lastName:"Goel" , age:29},
    {firstName:"Rishav", lastName:"Kumar" , age:25},
]

// combine FirstName and LastName

const FullName = users.map((user)=>{ user.firstName+ " " + user.lastName});


// Lets filter out age above 24, there full name:










