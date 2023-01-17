const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submitted")
});


const parentDiv = document.querySelector(".parent");
parentDiv.addEventListener("click",e=>{
    if(e.target.classList.contains("a")){
        console.log("btn a clicked")
    }
    if(e.target.classList.contains("c")){
        console.log("btn c clicked")
    }
})



// const buttons = document.querySelector('#');

