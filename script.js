let body = document.body;
let colorText = document.querySelector('.colour-change');
let button= document.querySelector('button');
button.addEventListener('click', changeColor);


function changeColor(){
  let r = getRandomColor();
  let g = getRandomColor();
  let b = getRandomColor();
  let a = getRandomOpacity();
  let colorValue = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = colorValue;
  colorText.textContent = colorValue;
}

function getRandomColor(){
  return Math.floor(Math.random() * 256);
}

function getRandomOpacity(){
  return (Math.random().toFixed(1));
}

window.addEventListener("DOMContentLoaded",changeColor)