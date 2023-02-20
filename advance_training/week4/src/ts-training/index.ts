let number: number = 2;
let b: boolean = true;
let s: string = "alksdjo";
let n: null = null;
let un: undefined = undefined;

let any: any = "qweoqwiej";
any = 123;
any = true;

const sum = (a: number, b: number): number => {
  return a + b;
};

// function sum(a:number,b:number):number{
//     return a + b;
// }
// console.log(sum(1,2));

// type Person = {
//     name: string;
//     age: number;
// }

interface Person {
  name: string;
  age: number;
  wage: number;
  job?: string;
  friends?: Person[];
  sayHi?: (name:string)=>string;
}

function getPersonName(person: Person): string {
  return person.name;
}

const person: Person = {
  name: "Mark",
  age: 4,
  wage: 10,
  friends: [{ name: "Micheal", age: 5, wage: 11, friends: [] }],
  sayHi: (name:string)=>{
    return "dqwdqwd"
  }
  //   job: "neurosurgon"
};
// console.log(getPersonName(person));

function getWeeklyIncome(person: Person): [string, number] {
  const { name, wage } = person;
  return [name, wage * 40];
}

//union types
type ID = string | number;
const id1: ID = "12312";
const id2: ID = 124124;
// const arr:(number|string)[] = [123123,"123","wkfqdw",124124];

// function sumOfArr(arr:number[]):number{
//     return arr.reduce((prev,curr)=>prev+curr,0)
// }

// console.log(sumOfArr([1,2,3]))



// function makeNumArr(...rest:number[]):number[]{
//   return rest;
// }

// console.log(makeNumArr(52,12,10,121,2,3));

// function makeStringArr(...rest:string[]){
//   return rest;
// }
// console.log(makeStringArr("a","b","b"));

function makeArr<T>(...rest:T[]):T[]{
  return rest;
}

console.log(makeArr<Person>())

