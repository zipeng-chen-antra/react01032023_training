// function getBun() {
//   return "bun";
// }

// function getBeef() {
//   return "beef";
// }

// function cookBeef(beef) {
//   if (beef === "beef") return "patty";
// }

// function makeBurger(bun, patty) {
//   if (bun === "bun" && patty === "patty") {
//     return "burger";
//   }
// }

// const bun = getBun();
// const beef = getBeef();
// const patty = cookBeef(beef);
// const burger = makeBurger(bun,patty);
// console.log(burger)

// function getBun(cb) {
//     setTimeout(()=>{
//         const bun = "bun";
//         cb(bun)
//     },1000)
// }

// function getBeef(cb) {
//     setTimeout(() => {
//         const beef = "beef";
//         cb(beef);
//     }, 1000);
// }

// function cookBeef(beef,cb) {
//     setTimeout(()=>{
//         if(beef==="beef"){
//             const patty = "patty"
//             cb(patty)
//         }
//     },1000)
// }

// function makeBurger(bun, patty, cb) {
//   setTimeout(() => {
//     if (bun === "bun" && patty === "patty") {
//         const burger = "burger"
//       cb(burger)
//     }
//   }, 1000);
// }

// getBun((bun)=>{
//     console.log(bun)
//     getBeef((beef)=>{
//         console.log(beef)
//         cookBeef(beef,(patty)=>{
//             console.log(patty);
//             makeBurger(bun,patty,burger=>{
//                 console.log(burger,"is ready")
//             })
//         })
//     })
// })

function getBun() {
  return new Promise((res) => {
    setTimeout(() => {
      res("bun");
    }, 1000);
  });
}

function getBeef() {
  return new Promise((res) => {
    setTimeout(() => {
      res("beef");
    }, 1000);
  });
}

function cookBeef(beef) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (beef === "beef") res("patty");
      else rej("no beef available");
    }, 1000);
  });
}

function makeBurger(bun, patty) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (bun !== "bun") rej("no bun");
      else if (patty !== "patty") rej("no patty");
      else res("burger");
    }, 1000);
  });
}



async function getBurger(){
  const bun = await getBun();
  const beef = await getBeef();
  const patty = await cookBeef(beef);
  const burger = await makeBurger(bun,patty);
  return burger
}



// getBeef().then(beef=>{
//     console.log(beef)
//     return Promise.all([
//         getBun(),
//         cookBeef(beef)
//     ])
// }).then(ingredients=>{
//     console.log(ingredients);
//     const [bun,beef] = ingredients;
//     return makeBurger(bun,beef)
// }).then(burger=>{
//     console.log(burger)
// })

// Promise.all([
//     getBun(),getBeef()
// ]).then(res=>{
//     console.log(res);
//     const [bun,beef] = res;
//     return cookBeef(beef);
// }).then(patty=>{
//     console.log(patty)
// })