var minus = document.querySelector('.minus');
var plus = document.querySelector('.plus');
var display = document.querySelector('.display');
console.log(display);
var substract;
var Addition;
var value = 0;
Addition = function () {
    display.innerHTML = value++;
};
substract = function () {
    display.innerHTML = value--;
    value < 0 ? display.style.color = 'red' : display.style.color = 'black';
};
minus.addEventListener('click', substract);
plus.addEventListener('click', Addition);

