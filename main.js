const start = document.querySelector('.main');
const reset = document.querySelector('.reset');
const div = document.querySelector(".time div ");

let number = 0;
let active = false;
let Idi;

const counting = () => {
    if(!active){
    active = !active;
    start.textContent = "Pauza";
    Idi = setInterval(timer, 10)
    }
    else if(active){
    active = !active;
    start.textContent = "Start";
    clearInterval(Idi);
    }}
const timer = ()=>{
    number++;
    div.textContent = (number/100).toFixed(2);
}
const resetFunc = () => {
    number = 0;
    div.textContent= "---";
    start.textContent = "Start";
    active = false;
    clearInterval(Idi);
}
start.addEventListener('click', counting)
reset.addEventListener('click', resetFunc) 
