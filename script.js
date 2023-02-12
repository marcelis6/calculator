let dis = document.getElementById("dis1");
let dis1 = document.getElementById("dis2");
let equalButton = document.querySelector("#answer");
let addButton = document.querySelector("#operator1");
let minusButton = document.querySelector("#operator2");
let timesButton = document.querySelector("#operator3");
let divideButton = document.querySelector("#operator4");
let clear = document.querySelector("#clear");
/*
let btn1 = document.getElementById("operand1");
let btn2 = document.getElementById("operand2");
let btn3 = document.getElementById("operand3");
let btn4 = document.getElementById("operand4");
let btn5 = document.getElementById("operand5");
let btn6 = document.getElementById("operand6");
let btn7 = document.getElementById("operand7");
let btn8 = document.getElementById("operand8");
let btn9 = document.getElementById("operand9");
let btn0 = document.getElementById("operand0"); */
let operator;
let x;
let y;
let z;

function display (val) { 
   dis.innerHTML += val;
    return val;
}

addButton.addEventListener("click", (e) =>{
    x = parseInt(dis.innerHTML);
    operator = 1;

    dis1.innerHTML = dis.innerHTML;
    dis.innerHTML = "";
})

minusButton.addEventListener("click", (e) => {
    x = parseInt(dis.innerHTML);
    operator = 2;

    dis1.innerHTML = dis.innerHTML;
    dis.innerHTML = "";   
})

timesButton.addEventListener("click", (e) => {
    x = parseInt(dis.innerHTML);
    operator = 3;

    dis1.innerHTML = dis.innerHTML;
    dis.innerHTML = "";
})

divideButton.addEventListener("click", (e) => {
    x = parseInt(dis.innerHTML);
    operator = 4;

    dis1.innerHTML = dis.innerHTML;
    dis.innerHTML = "";
})

clear.addEventListener("click", (e) => {
    dis.innerHTML = " ";
})

equalButton.addEventListener("click", (e) => {
    y = parseInt(dis.innerHTML);
    switch (operator) {
        case 1: z = x + y; break;
        case 2 : z = x - y; 
        break;
        case 3: z = x * y;
        break;
        case 4: z = x / y;
    }
    let d = parseInt(z);
    dis.innerHTML = d;
})

