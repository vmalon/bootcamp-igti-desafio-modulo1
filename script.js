//Adicionado no Git
window.addEventListener('load',start);

var rangeRed = document.querySelector('#rangeRed');
var rangeGreen = document.querySelector('#rangeGreen');
var rangeBlue = document.querySelector('#rangeBlue');
var inputRed = document.querySelector('#inputRed');
var inputGreen = document.querySelector('#inputGreen');
var inputBlue = document.querySelector('#inputBlue');

rangeRed.defaultValue = 0;
rangeGreen.defaultValue = 0;
rangeBlue.defaultValue = 0;


function start(){
    rangeRed.addEventListener('mousemove',updateColorRgb);
    rangeGreen.addEventListener('mousemove',updateColorRgb);
    rangeBlue.addEventListener('mousemove',updateColorRgb);
}

function updateColorRgb(){
    var div = document.querySelector('#divRGB');
    div.style.backgroundColor = 'rgb(' + rangeRed.value + ',' +
    + rangeGreen.value + ',' +
    + rangeBlue.value 
    +')';

    inputRed.value = rangeRed.value;
    inputGreen.value = rangeGreen.value;
    inputBlue.value = rangeBlue.value;
    
}