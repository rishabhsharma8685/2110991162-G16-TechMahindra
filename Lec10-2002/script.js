// PROMISE APIs

// const myPromiseFromNetflix = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         //  resolve("Fetched Data From Netflix");
//         reject("Fetching Data Failed from Netflix");
//     }, 1000)
// });

// const myPromiseFromTwitter = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // resolve("Fetched Data From Twitter");
//         reject("Fetching Data Failed from Twitter");
//     }, 2000)
// });

// const myPromiseFromGithub = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // resolve("Fetched Data From Github");
//         reject("Fetching Data Failed from Github");
//     }, 3000)
// });

// const myPromiseFromhotstar = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // resolve("Fetched Data From Hotstar");
//         reject("Fetching Data Failed from Hotstar");
//     }, 4000)
// });



// const dataFromAll = Promise.all([myPromiseFromNetflix, myPromiseFromTwitter, 
//     myPromiseFromGithub, myPromiseFromhotstar])

// console.log(dataFromAll);


// const dataFromAllsettled = Promise.allSettled([myPromiseFromNetflix, myPromiseFromTwitter, 
//     myPromiseFromGithub, myPromiseFromhotstar])

// console.log(dataFromAllsettled);

// const fromRace = Promise.race([myPromiseFromNetflix, myPromiseFromTwitter, 
//     myPromiseFromGithub, myPromiseFromhotstar])

// console.log(fromRace);

// const fromany = Promise.any([myPromiseFromNetflix, myPromiseFromTwitter, 
//     myPromiseFromGithub, myPromiseFromhotstar])

// console.log(fromany);




// Async - Await

// Async -> Async is Also a promise


// async function techDirectFunction() {
//     console.log("THIS IS helloTECH MAHINDRA");
// }

// const techData = techDirectFunction();

//  console.log(techData);

// techData.then((res)=>{
//     return res;
// })

// ================================

// console.log("VIVA START")
// const projectSubmission = new Promise(function(res,rej){
//     setTimeout(()=>{
//         res("SUBMITTED PROJECT SUCCESSFULLY")
//     },5000);
// });

// console.log("LUNCH BREAK")

// async function projectEvaluation(){
//     console.log("Attendance viva");
//     const projectFile =  await projectSubmission;
//     // return projectFile
//     // projectFile.then((res)=>{
//     //     console.log(res);
//     // })
//     console.log(projectFile);
//     console.log("Project File Check");
// }


// // console.log(projectEvaluation())
// projectEvaluation();

// console.log("CLASS END")


// ===================================

// console.log("Class Start");

// const FileWriting =  new Promise(function(res,rej){
//     setTimeout(()=>{
//         res("File Written Successfully")
//     },1000);
// });

// console.log("Attendance Marking");

// async function FileEvaluation(){
//     const file = await FileWriting;

//     console.log(file);

//     console.log("File Evaluation");

//     console.log("Class End");
// }


// FileEvaluation();


// =================================================


async function fetchApiData(){
    // const data = await fetch("https://api.chucknorris.io/jokes/categories");
    // const mydata = await data.json();
    // // console.log(data);
    // return mydata;
    try{
    const data = await fetch("https://api.chucknorris.io/jokes/categories");
    const mydata = await data.json();
    return mydata;
    }
    catch(err){
        console.log(err);
    }

}

const finalData = fetchApiData();

finalData.then((res)=>{
    console.log(res);
})



