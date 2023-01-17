// setTimeout(()=>{
//     console.log("async")
// },0)

// console.log("sync");

// console.log(Promise)

// const p1 = new Promise((res,rej)=>{
//     res("p1 information")
// });

// p1.then(data=>{
//     console.log(data);
//     return new Promise((res,rej)=>{
//         if(data){
//             res("p2 information")
//         }
//     })
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err)
// })

// const numP = new Promise((res,rej)=>{
//     res(1)
// })

// numP.then(data=>{
//     console.log(data);
//     return data + 1
// }).then(data=>{
//     console.log(data);
//     return "other totally random stuff"
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("it's finally ")
// })



// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then(console.log)
//   .catch(console.log);

// async function foo(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
// }

// foo();


function getData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                res("the data")
            } else {
                rej("no data");
            }
        },1000)
    })
}


// // getData().then(console.log)
async function foo(){
    try {
        const data = await getData();
        console.log("ioqdwjoiwqjodqwodjwq")
        console.log(data);
    } catch(err){
        console.log(err)
    }
}

// foo();

async function specialFn(){
    return 5;
}
specialFn().then(console.log)


