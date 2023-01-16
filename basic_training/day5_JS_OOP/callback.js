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



function getBun(cb) {
    setTimeout(()=>{
        const bun = "bun";
        cb(bun)
    },1000)
}

function getBeef(cb) {
    setTimeout(() => {
        const beef = "beef";
        cb(beef);
    }, 1000);
}

function cookBeef(beef,cb) {
    setTimeout(()=>{
        if(beef==="beef"){
            const patty = "patty"
            cb(patty)
        }
    },1000)
}

function makeBurger(bun, patty, cb) {
  setTimeout(() => {
    if (bun === "bun" && patty === "patty") {
        const burger = "burger"
      cb(burger)
    }
  }, 1000);
}

getBun((bun)=>{
    console.log(bun)
    getBeef((beef)=>{
        console.log(beef)
        cookBeef(beef,(patty)=>{
            console.log(patty);
            makeBurger(bun,patty,burger=>{
                console.log(burger,"is ready")
            })
        })
    })
})



