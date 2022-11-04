let click = true;
let color = "black";
function getSquares(size){
  let board = document.querySelector(".board");

  let squares = board.querySelectorAll('div');
  squares.forEach((div) =>div.remove());
  let amount = size *size;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 
  for(i =0; i < amount; i++){
   let square = document.createElement('div');
   square.addEventListener('mouseover',colorSquare )
   square.style.backgroundColor ="white";
    board.appendChild(square);
  }
}

getSquares(16);

function changeSize(input){
  let errorMsg = document.querySelector('.error')
  
  if(input >= 2 && input <= 100){
    getSquares(input);
    errorMsg.style.display ="none";
  }
  else{
    errorMsg.style.display ="flex";
  }
  
  }
;

function colorSquare(){

  if(color === "random"){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  else{
  this.style.backgroundColor = color;}
};

function changeColor(choice){
  color = choice;
}
 
function reset (){
  let board = document.querySelector(".board");

  let squares = board.querySelectorAll('div');
  squares.forEach((div) =>div.style.backgroundColor="white");
  
}

document.querySelector('body').addEventListener('click', () =>{
  click =!click;});