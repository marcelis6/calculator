const dis = document.getElementById("dis1");
const dis1 = document.getElementById("dis2");
const equalButton = document.querySelector("#answer");
const addButton = document.querySelector("#operator1");
const minusButton = document.querySelector("#operator2");
const timesButton = document.querySelector("#operator3");
const divideButton = document.querySelector("#operator4");
const clear = document.querySelector("#clear");
const input =  document.querySelectorAll(".but");   
const fikusnik = document.querySelector("#fikusnik");
let operator;
let x;
let y;
let z;
let clean = 0;

input.forEach( number => {
number.addEventListener("click", (e)=> {
    dis.innerHTML += e.target.value;
})}
)

clear.addEventListener("click", clearing);
addButton.addEventListener("click", add);
minusButton.addEventListener("click", minus);
timesButton.addEventListener("click", times);
divideButton.addEventListener("click", divide);
equalButton.addEventListener("click", equal);

function add(){
    x = parseInt(dis.innerHTML);
    operator = 1;

    dis1.innerHTML = dis.innerHTML;
    dis.innerHTML = "";
}

function minus(){ 
    x = parseInt(dis.innerHTML);
    operator = 2;

    dis1.innerHTML = dis.innerHTML;
    dis.innerHTML = "";   
}

function times(){
    x = parseInt(dis.innerHTML);
    operator = 3;

    dis1.innerHTML = dis.innerHTML;
    dis.innerHTML = "";
}

function divide(){ 
    x = parseInt(dis.innerHTML);
    operator = 4;

    dis1.innerHTML = dis.innerHTML;
    dis.innerHTML = "";
}

function equal(){
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
}

function clearing(){ 
    if(clean == 0){ 
        clean++;
        dis.innerHTML = " ";
        clear.innerHTML = "CE";
    } else {
        clean--;
        dis.innerHTML = " ";
        dis1.innerHTML = " ";
        clear.innerHTML = "C";
    }
}
