//define function with parameters
"use strict";  
//=============================== let Scope in JavaScript ===============================
// function sum(x, y) {
//     console.log(x + y);
//     if(true){
//        let c = 10; //block scope variable 
//         console.log(c); //oupt 10
//     }

//     console.log(c);  //reference error due to let is block scope variable

// }

//=============================== var variable scope ===============================

// function sum(x, y) {
//     console.log(x + y);
//     if(true){
//        var c = 10; //function scope variable 
//         console.log(c); //oupt 10
//     }
 
//     console.log(c); //output 10 due to var is function scope variable

// }

//=============================== var variable hoisting ===============================
//memory allocation phase is before execution phase is like function declaration hoisting and then 
// console.log("START")
// function sum(x, y) {
//     console.log(x + y);
//     if(true){
//         console.log("in the block")
//        var c; //function scope variable 
//        console.log("after decalare")
//         console.log(c); //oupt undefined
//     }
 
//     console.log("sum done ... "); //output undefined

// }

//=====================================
// console.log("START")
// function sum(x, y) {
//     console.log(x + y);
//     if(true){
//         console.log("in the block")
//        let c; //function scope variable 
//        console.log("after decalare")
//         console.log(c); //oupt undefined
//     }
 
//     console.log("sum done ... "); //output undefined

// }

//but with let its undefined and reference error outside block scope

//that why not use var, use let and const - inside function when initialize variable var it accessible outside block scope




//decalre variables  let a;
//intialize variables  a = 10;

//invoke function and pass arguments
// sum(10,20)

//===============================================
// console.log(c) //undefine
// var c = 10;
// console.log(c); //10

//=====================================================

// console.log(d) //error  = can't access d before intialization
// let d = 10;


//=======================================================
//with var redeclaration possible
// var c = 1;
// console.log(c);
// var c = 2;
// console.log(c)
// //with let reassignment
// let d=10;
// console.log(10);
// d=20;
// console.log(d)


//============================================================CONST ==================
//==  vs ===
// == loose equality
// let a = 2 //number
// let b = "2" //string
// if(a==b){
//     console.log("yes")
// }else{
//     console.log("NO")
// }
//output
//Yes

//prefer strict equality === (compare with data type)
// if(a===b){
//     console.log("yes") 
// }else{
//     console.log("NO")
// }

//output
//NO

//
// const userInput = "123a"

// const num = Number(userInput);

// if(Number.isNaN()){
//     console.log("invalid")
// }else{
//     console.log("valid")
// }

//=====================================
// if(NaN == NaN){
//     console.log("yes")
// }else{
//     console.log("no")
// }
//=========================================

//NON PRIMITIVE :: OBJECTS
//OBJECT,ARRAY,DATE,MAP,SET

// const obj ={
//     name:"abhishek",
//     org:"krmu",
//     city:"gurgoan",
//     age:20,
// }

// console.log(obj.name);  //abhishek
// console.log(obj["name"]); //abhishek
// // console.log(obj[org]);  //reference error : org is not defined
// console.log(obj["age"]);

// console.log(obj)

// //update
// obj["city"] = "delhi"
// obj["branch"] = "cse"
// console.log(obj)
// delete obj["city"];
// console.log(obj);

//const value not change but its in object we update inside the box
// obj = {
//     name:"abhishek",
// }

// console.log(obj) //type error

//===================================================
// const obj = {
//     "city name" : "delhi",
// }

// const obj2 = {
//     "city name" : "delhi",
// }
// const obj2 = obj; // shallow copy -- mutable
// console.log(obj);
// console.log(obj2);

// if(obj == obj2){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// //obj2["population"] = "2 CR";
// obj2.population = "5 CR"
// console.log(obj);
// console.log(obj2);

//================================================= destructuring ===============

// const student = {
//     name:"rohan",
//     city:"delhi",
//     age:23,
//     marks : {
//         math:20,
//         se:18
//     },
// }

// //destructuring
// //taking out variable 
// const {city,country} = student;  //shallow copy
// console.log(student.country); //undefined
// console.log("city",city);
// console.log("country",country); //undefine
//====================================================
// const student = {
//     name:"rohan",
//     city:"delhi",
//     age:23,
//     marks : {
//         math:20,
//         se:18
//     },
// }

// //destructuring
// //taking out variable 
// console.log(student.marks)
// console.log(student)

// let {city,marks} = student;
// const ram =  student;
// city = "noida";
// console.log(student); //not change city name because we change variable not object
// student.city = "goa"; 
// marks.se = 50;   //chage se value reason in stack marks refer to heap reference
// ram.name = "sohan"  //change ram refer in stack to heap reference
// console.log(student); //change to goa


//=====================================
const student = {
    name:"rohan",
    city:"delhi",
    age:23,
    marks : {
        math:20,
        se:18
    },
}

//spread or rest operator --> ... --> remove the outer most structure from the entity and copy
// console.log(student);  // address c1
// console.log({...student}); //addres a5

const ram = {...student};
//const ram = {...  }
//const ram = {name:"rohan", city:"delhi", age:23} //new object create
ram.name = "abhishek"
console.log(ram);  // only change here b/c now ram is new object not refer to student
console.log(student); //not change
ram.marks.math = 30;
console.log(ram); //change marks b/c marks address is same
console.log(student); //change marks b/c marks address is same



//obj.keys(obj)
//obj.values(obj)
//obj.entries(obj)
//==================================Array
//==============================ARRAY===========
const arr = ["raj","ramesh","rahul","abhishek"];
console.log("arr",arr);
//insertion
//you can potentially create holes is you insert in array via index
// arr[6] = "zz"
arr[4] = "sumit"
//update index 1
arr[1] = "zzzz"
console.log(arr);
console.log(arr.length)

//push 
arr.push("hello");
console.log(arr)
//delete
//shift , pop , slice
//shift - first index
arr.shift();
//pop - last index
arr.pop()
//slice
arr.slice(2,1)
console.log(arr)


























































































































































































