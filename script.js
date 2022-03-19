let body = document.body;
let colorText = document.querySelector('.colour-change');
let button= document.querySelector('button');

/*let colour = ["blue","#766fec","#96aa20"];
function changeColor(){
  let i = getRandomColor();
  console.log(i);
  body.style.backgroundColor = colour[i];
  colorText.textContent = colour[i];
//  i = (i+1) % colour.length;
}
function getRandomColor(){
  return Math.floor(Math.random() * colour.length);
}*/
/*
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function changeColor(){
  let hexColor = "#";
  for (let i=0; i< 6; i++){
    hexColor += hex[getRandomColor()];
  }
  body.style.backgroundColor = hexColor;
  colorText.textContent = hexColor;
}
function getRandomColor(){
  return Math.floor(Math.random() * hex.length);
}*/
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
