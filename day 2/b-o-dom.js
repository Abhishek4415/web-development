// console.log("DOM")
// window.console.log("window")  //actually call as like as
// console.log(window)
// console.dir(window.document.children);
// //===========================================DOM===========================

// const h1 = document.getElementsByTagName("h1");
// console.log(h1)
// h1[0].style.color = "red"


//EVENTS
let flag = true;
// const h1Element = document.querySelectorAll("h1");
// console.log(h1Element)
const handleButton = () => {
    const h1Element = document.querySelectorAll("h1");
    console.log(h1Element)
    if(flag){
        h1Element[0].style.backgroundColor = "green";
    }else{
        
        h1Element[0].style.backgroundColor = "red";   
    }

    flag = !flag
}


