// function palindrome(txt) {
//     console.log("txt:", txt);
//     const splitTxtwholeword = txt.split();
//     console.log(splitTxtwholeword);
//     const splittxtbyspace = txt.split(" ");
//     console.log(splittxtbyspace)
//     const splittxtbychar = txt.split("");
//     console.log(splittxtbychar);
//     //reverse order
//     const reverseArr = splittxtbychar.reverse();
//     console.log(reverseArr);
//     const reverseStr = reverseArr.join();
//     console.log(reverseStr)                                       //d,l,r,o,w, ,o,l,l,e,h
//     const reverseWord = reverseArr.join("");
//     console.log(reverseWord)                     //dlrow olleh
//     //chaining
//     const reverseChain = txt.split("").reverse().join("");
//     console.log(reverseChain);
//     //check
//     if(txt == reverseChain){
//         console.log("yes")
//     }else{
//         console.log("no")
//     }


// }

//synchronous behaviour --execution of tasks in a controlled, sequential manner.

// palindrome("hello world");

//call back basic
// function sum(a,b){
//     ans = a+b
//     return ans
// }

// function printF(a){
//     console.log(a)
// }

// //call
// const res = sum(20,50)
// printF(10)

//============================================pass function
//debugger use here on browser for better understanding -- sources -> script.js 
// function sum(a,b,next){
//     ans = a+b
//     next(ans)       
//     return ans
// }

// function printF(a){ 
//     console.log(a)              //30
// } 

// const x = 10;
// const y = 20;

// //HOF - higher order fuction -- 

// //call
// const res = sum(x,y,printF)

//----------------------1. FUNCTION DECLARATION
// sum(10,45)
// function sum(a,b){
//     ans = a+b
//     console.log(ans);  //55  //its not good
// }

// //-----------------------2.funtion assignment  (name function assignment)
// //add(10,20) //Cannot access 'add' before initialization
// const add = function sum(a,b){
//     const ans = a + b
//     console.log(ans)
// };
// add(10,20)      // 30

//re-declaration  is NOT ALLOWED with const
// const add = "hello"  //Identifier 'add' has already been declared
//re-assignment is NOT ALLOWED  with const
//add = "hello"  //aught TypeError: Assignment to constant variable.

//-=-------------------------------3.function assignment (anonymous function)
// const sum = function (a,b){
//     const ans = a + b
//     console.log(ans)
// };
// sum(458,20)    

// //===========================4.Arrow Function assignment
// const fun = (a,b) => {
//     console.log(a+b)
// }
// fun(10,458)


//====================================5.IIFE
