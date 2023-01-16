// const arr = [1,2,3,4];

// console.log(arr instanceof Array)

// arr.forEach((e,i,arr)=>{
//     // console.log(e,i,arr)
// })

// Array.prototype.myForEach = function(cb){
//     for(let i=0;i<this.length;i++){
//         cb(this[i],i,this)
//     }
// }

// const newArr = arr.map(e=>e*2)

// const obj1 = {
//     a: "a",
//     b: "b",
//     sayHi(){
//         console.log("hi")
//     },
// }

// const obj2 = {
//     c: "c",
//     //an object has access to all of
//     //its prototypes' properties
//     //obj1 will be obj2's prototype
//     __proto__: obj1
// }

// const obj3 = {
//     a: "obj3 a",
//     d: "d",
//     __proto__: obj2
// }
// console.log(obj3.a);

// const person = {
//     name: "Brandon",
//     intro(){
//         console.log(`Hi my name is ${this.name}`);
//     }
// }

// person.intro();

// function Person(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// Person.prototype.intro = function(){
//     console.log(`Hello my name is ${this.name}`)
// }

// Person.prototype.canDrink = function(){
//     return this.age >= 21;
// }

// const p1 = new Person("Brandon",21,"M");
// const p2 = new Person("Joe",12,"M");
// p1.intro();
// p2.intro();

// class Person {
//     constructor(name,age,gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }

//     canDrink(){
//         return this.age >= 21;
//     }
// }

// const p1 = new Person("Brandon",21,"M");
// const p2 = new Person("Joe",12,"M");
// console.log(p1.canDrink());
// console.log(p2.canDrink());

// class Animal {
//     constructor(name,id){
//         this.name = name;
//         this.id = id;
//     }
//     eat(){
//         console.log(this.name, "eats")
//     }
// }

// class Dog extends Animal {
//     constructor(name,id){
//         super(name,id)
//     }
//     bark(){
//         console.log(this.name, "barks")
//     }
// }

// const dog = new Dog("Husky","1");
// console.log(dog instanceof Animal)

// console.log(this);

// const foo= ()=>{
//     console.log(this)
// }

// foo();

// const obj = {
//     a: "aa",
//     getA(){
//         console.log(this.a)
//     },

//     getAWithDelay(){

//         const thisHere = this;
//         setTimeout(()=>{
//             console.log("this",this===thisHere)
//             console.log(this.a)
//         }, 200);
//     }
// }

// obj.getAWithDelay()

// function x(a){
//     return function y(b){
//         return function z(c){
//             return a + b + c
//         }
//     }
// }

// const x = (a) => (b) => (c,d) =>  a + b + c + d;

//currying
// console.log(x(1)(2)(3,7));

// const counterApp = (function counter() {
//   let count = 0;
//   return {
//     getCount: () => count,
//     increment: () => {
//       count += 1;
//     },
//   };
// })();


// console.log(counterApp.getCount());
// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// counterApp.increment();
// console.log(counterApp.getCount());



