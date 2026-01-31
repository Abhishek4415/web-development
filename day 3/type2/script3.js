const handleRoot = (ev) =>{
    console.log("root");
    console.log(ev)
    
}
const handleParent = () =>{
    console.log("parent")

}
const handleChild = () =>{
    console.log("child")

}

const rootElement = document.getElementById("root");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

childElement.addEventListener("click",handleChild);  //write true to capturing
parentElement.addEventListener("click",handleParent);
rootElement.addEventListener("click",handleRoot);

// childElement.addEventListener("click",handleChild,true);  //write true to capturing
// parentElement.addEventListener("click",handleParent,false);
// rootElement.addEventListener("click",handleRoot,true);

// document.getElementById.addEventListener(type,function)