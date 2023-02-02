$("button.continue")
  .html("Next Step...")
  .on("click", (e) => {
    console.log("next steps");
  })
  .addClass("bg");



class MyQuery {
  constructor(query) {
    this.elements = document.querySelectorAll(query);
  }

  html(innerHTML) {
    this.elements.forEach((element) => {
      element.innerHTML = innerHTML;
    });
    return this;
  }
  on(actionType, cbFn) {
    this.elements.forEach((element) => {
      element.addEventListener(actionType, cbFn);
    });
    return this;
  }
  addClass(className) {
    this.elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }
}

const $$ = (query) => {
  const myQuery = new MyQuery(query);
  return myQuery;
};

// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/comments",
//   data: {
//     postId: 1
//   },
//   success: function( result ) {
//     console.log(result)
//   }
// })


$$.ajax = (req) => {
    let url = req.url;
    if(req.data){
      url += "?";
      for(const [key,value] of Object.entries(req.data)){
        url += key + "=" + value + "&"
      }
      url = url.slice(0,-1);
    }
    fetch(url).then(res=>res.json()).then(req.success).catch(req.failure);
}

$$.ajax({
  url: "https://jsonplaceholder.typicode.com/comments",
  data: {
    postId: 1
  },
  success: function( result ) {
    console.log(result)
  },
  failure: function (err){
    console.log(err)
  }
})


$$("button.ourBtn").html("Our Btn").addClass("sm");
const a1 = $$(".ourBtn1").on("click", (e) => console.log("btn 1"));
const a2 = $$(".ourBtn2").on("click", (e) => console.log("btn 2"));
const a3 = $$(".ourBtn3").on("click", (e) => console.log("btn 3"));





