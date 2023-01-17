Array.prototype.myForEach = function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i],i,this)
    }
}


const arr = [
    {name:"Brandon",money:1},
    {name:"Joe",money:11},
    {name:"Mike",money:111},
    {name:"Jack",money:1111},
];




// const sum1 = arr.reduce((prev,curr)=>{
//     console.log(prev,curr)
//     return prev + curr;
// })
// console.log("sum1",sum1);

Array.prototype.myReduce = function(cb,initValue){
    if(initValue===undefined){
        if(this.length===0){
            throw new TypeError("Reduce of empty array with no initial value")
        }
        let result = this[0];
        for(let i=1;i<this.length;i++){
            result = cb(result,this[i])
        }
        return result        
    } else {
        let result = initValue;
        for(let i=0;i<this.length;i++){
            result = cb(result,this[i])
        }
        return result;
    }
}

// const people = arr.myReduce((prev,curr)=>{
//     return [...prev,curr.name]
// },[])
// console.log(people)


// const sum2 = arr.myReduce((prev,curr)=>{
//     console.log(prev,curr)
//     return prev + curr;
// },0)
// console.log("sum2",sum2);

