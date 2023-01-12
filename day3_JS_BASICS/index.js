//the five most common primitive data types in javascript
// var num = 1;
// console.log(num,typeof num);
// var string = "string";
// console.log(string,typeof string);
// var bool = true;
// console.log(bool,typeof bool);
// var und = undefined;
// console.log(und,typeof und);
// var n = null;
// console.log(n,typeof n);

//we can change the data type of variable
// var variable = 1;
// variable = "string";
// variable = true;
// variable = null;
// console.log(variable);

//obj, array
// var obj = {
//     key: "value",
//     a: 1,
//     b: 2,
//     c: 3
// }

// var theKey = "key";

// console.log(obj[theKey])
// console.log(obj["a"])

// var arr = [1,2,3,4,5,"a","b","c"];

// console.log(arr);
// console.log(arr);

//primitive vs reference
// var a = 1;
// var b = a;
// b = 2
// console.log("a",a)
// console.log("b",b)

// var person = {
//     name: "Brandon",
//     gender: "M",
//     income: "999999",
//     netWorth: "1 billion",
//     SSN: "123",
//     creditCard: "1111-1111-2222-3333",
//     homeAdress: "123 React St, Antra Ave"
// }

// var person2 = person;
// person2.netWorth = "2 billion";

// console.log(person)

// var reactStudents = ["Brandon","Baoshu","Claire","David"];
// var angularStudents = reactStudents;
// angularStudents.push("Gao");
// console.log(reactStudents);

//in es5, var
//in es6, let & const

// var theRichestMan = "Brandon";
// var theRichestMan = true;

// console.log(hello);
// var hello = "hello";

// console.log(hello);
// let hello = "hello";

// let a = "a";
// a = "214124124";
// const value = "jaiowqdqw";
// value = "12091092";

let outside = "outside";

function scope() {
  var a = "a";
  let b = "b";

  if (true) {
    let outside = "the fake outside";
    // console.log(outside);
    //function scope for var, accessible anywhere in a function
    // var a = "a";
    //let and const block scope, accessible only in the block they're
    //defined in
    // let b = "b";
    // console.log("block a",a);
    // console.log("block b",b);
    console.log(a);
    console.log(b);
  }

  // function innerFunction(){
  //     console.log(outside);
  //     var innerA = "innerA";
  // }

  // console.log(innerA)

  // console.log("outside of block a",a)
  // console.log("outside of block b",b)
}

// scope();

//closure
// function outerFn(){
//     let count = 0

//     return {
//         get: function(){
//             return count;
//         },
//         add: function(){
//             count = count + 1;
//         }
//     }
// }

// const counter = outerFn();
// console.log(counter.get());
// counter.add()
// console.log(counter.get());

// let a = 2;
// const b = "cannot";
// const obj = {
//     name: "some value",
//     age: 0,
// }

// obj.name = "another name"
// console.log(obj)

// function foo(obj){
//     console.log("inside function", obj);
// }

// foo(obj)
// console.log(obj)

//spread operator
// const arr1 = [1, 2, 3, 4, 5, 6];

// const arr2 = [7, 8, 9, 10];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const obj1 = {
//     name: "Brandon",
//     job: "plumber"
// }

// const obj2 = {
//     job: "Google CEO"
// }

// const obj3 = {
//     ...obj2,
//     ...obj1,
// }

// console.log(obj3);

// const todos = [
//   {
//     id: 1,
//     task: "go code",
//     person: "Brandon",
//     theme: "light",
//     completed: true,
//   },
//   {
//     id: 2,
//     task: "go code",
//     person: "Brandon",
//     theme: "light",
//     completed: true,
//   }
// ];

// const newTodos = todos.map(todo=>{
//     if(todo.id===1){
//         return {
//             ...todo,
//             completed: !todo.completed
//         }
//     } else return todo;
// })

// console.log(newTodos)

//flaw of spread operator
// const person = {
//     name: "Jack",
//     age: -1,
//     friends: ["Mike","Jackie","Jeffrey"]
// }

// const person2 = {
// ...person
// name: person.name,
// age: person.age,
// friends: person.friends
// }

// person2.name = "Brandon";
// person2.friends.push("Andrew");
// console.log(person.friends === person2.friends)

//comparison
// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// console.log({}==={});

//type coercion

// console.log(typeof ("string"+100))

// const num = 5;
// if(!num>10) {
//     console.log("true")
// }else{
//     console.log("false")
// }

//flow control, while loop, for loop, switch, if else
//if you don't know these, go watch videos

// const person = {
//     name: "Brandon",
//     income: "500000"
// }

// person.income = +person.income * 1.2;
// console.log(person);

const obj = {
  string: "strong",
  num: 100,
  bool: true,
  anotherOBJ: {},
  fn: function () {},
  fn2() {},
  fn3: () => {},
};

let fname = "Brandon";
let info = "info";

const obj2 = {
  fname,
  info,
};


console.log(obj2);