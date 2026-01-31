console.log("start")
const successCB = () =>{
    console.log("done")
}

const errorCB = () =>{
    console.log("error..");
}

const pr = fetch("https://api.github.com/users/abhishek4");
console.log(pr)
console.log("api called")
pr.then(successCB).catch(errorCB); //when complete fetch then give result -- 1.done 2.error (browser se talk)
console.log("end")