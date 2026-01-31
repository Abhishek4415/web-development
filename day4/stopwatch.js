//select
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
let count = 0
let min = 0;
let hr = 0;
const handleHour = () =>{
    hr += 1;
    if(hr === 60){
        hr = 0;
        handleHour();
    }
    hour.innerText = hr;

}
const handleMinute = () =>{
    min += 1;
    if(min === 60){
        min = 0;
        handleHour();
    }
    minute.innerText = min;
}
const handleSecond = () =>{

    count += 1;
    if(count === 60){
        count = 0;
        handleMinute();
    }
    //change inner text
    second.innerText = count;

}

//event
let intervalId = null;
const handleStart = () =>{
    clearInterval(intervalId);

    intervalId = setInterval(handleSecond,1000);

}

const handleStop = () =>{
    clearInterval(intervalId);
}
// second.addEventListener("",handleSecond);
const handleResume = () =>{
    handleStart();

}

const handleReset = () =>{
    second.innerText = 0;
    hour.innerText = 0;
    minute.innerText = 0;
    count = 0;
    min = 0;
    hr = 0;
    clearInterval(intervalId);
}
