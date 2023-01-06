// variable✅ ,datatypes✅, operators, conditional statements,loops,functions,class
// var let const

// const name = "reethu";

// 100 lines 




// string✅ number boolean array object undefined null



let name = "reethu";
console.log(name.substr(0,2).toUpperCase().toLowerCase())
let age = 21;
let isingle = true;
let crush = ["arjun","abhay","haroon","muhammed",1,[1,2,3],{name:"arjun"},null,undefined,function (){console.log("func")}]
let person = {
    name:"arjun",
    age:21,
    isingle:true,
    crush:["reethu","nimisha","vijitha"],
    trip:function (){
        console.log(this.name+" is tripping with "+this.crush[0])
    }
}
// console.log(crush[crush.length - 1]())
// console.log(person.trip())
let ismarried;
let boyfreinds = null;

let Console = {
    log:function (arg){
        console.log(arg)
    }
}
// Console.log("arjun is tripping")

let document = {
    getElementById:function (arg){
console.log("element with this id : "+arg+" is selected")
    }
}
// document.getElementById("num")
let animals = ["🐯","🦁","🦊"]
let arjun = {
    log:function(arg){
        console.log(arg)
    },
    name:"arjun asok"
}
// array methods
// push
animals.push("🦄")
animals.shift()
// es6 map reduce filter foreach find findIndex
console.log(animals)
// callback

let display = function (arg){
    let name = "reethu michael";
    arg(name)
}
display(function (name){
    console.log(name)
})





function foreach(cb){
    for(let i = 0; i < animals.length; i++){
        cb(animals[i])
    }
}


animals.forEach(function (i){
    console.log(i)
})
// es6





let sum = num1 => num1+10

let result = sum(10)

// function sum(num1,num2){

//     return [num1 +num2,100,"reethu","arjun","haroon"]
//     // console.log(num1,num2)
// }
// let result = sum(1000,100)
let users = [
    {
        name:"reethu",
        age:17,
        id:1
    },
    {
        name:"arjun",
        age:20,
        id:2
    },
    {
        name:"harroon",
        age:24,
        id:3
    },
    {
        name:"abhay",
        age:15,
        id:4
    },
    {
        name:"muhammed",
        age:18,
        id:5
    }
]
let filteredarray = users.filter((i)=>{
    return i.id % 2 == 0
})
console.log(filteredarray)