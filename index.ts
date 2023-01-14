const minus:any = document.querySelector('.minus');
const plus:any = document.querySelector('.plus');
const display:any  = document.querySelector('.display') ;

console.log(display);

let substract:Function;
let Addition:Function;
let value:number = 0

Addition = () => {
   display.innerHTML = value++
  
}

substract = () => {
    display.innerHTML = value--
    value < 0? display.style.color = 'red' : display.style.color = 'black'
 }

 minus.addEventListener('click', substract);
 plus.addEventListener('click', Addition)

