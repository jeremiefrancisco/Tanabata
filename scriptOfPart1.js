let backgroundImage = document.getElementById('myCanvas');
let bg = backgroundImage.getContext('2d');

let main = document.getElementById('myCanvas1');
let mc = main.getContext('2d');

let opponent = document.getElementById('myCanvas2');
let opp = opponent.getContext('2d');

let inventory = document.getElementById('myCanvas3');
let inv = inventory.getContext('2d');

let object = document.getElementById('myCanvas4');
let obj = object.getContext('2d');

let inventoryStuff = document.getElementById('myCanvas5');
let invS = inventoryStuff.getContext('2d');

//background related coordinates
let backgroundX = 0;
let backgroundY = 0;
let midXCanvas = 320;
let midYCanvas = 180;
let canvasWidth = 700;
let canvasHeight = 450;
//opponent related coordinates
let opponentX1 = /*Math.floor(Math.random()*11)*200;*/0;
let opponentY1 = 0;
let opponentX2 = opponentX1+50;
let opponentY2 = 60;
//healthbars
let opponentHealth = 4;
let mcHealth = 10;
//mc related coordinates
let mcPositionX1 = 320;
let mcPositionY1 = 180;
let mcPositionX2 = mcPositionX1+50;
let mcPositionY2 = mcPositionY1+60;
//object related coordinates
let objPositionX1 = 100;
let objPositionY1 = 100;
let objPositionX2 = objPositionX1+30;
let objPositionY2 = objPositionY1+30;
//background picture
let backgroundPicture = new Image();
backgroundPicture.src = "";
backgroundPicture.onload = function drawbackgroundPicture() {
bg.drawImage(backgroundPicture,backgroundX,backgroundY,canvasWidth,canvasHeight);
}
function background() {
  let backgroundPicture = new Image();
  backgroundPicture.src = "";
  backgroundPicture.onload = function drawTest() {
  bg.drawImage(backgroundPicture,backgroundX,backgroundY,canvasWidth,canvasHeight);
  }
}
let mainCharacter = new Image();
mainCharacter.src = "images/sprites/characterMovementSprites.png";
mainCharacter.onload = function drawBase() {
mc.drawImage(mainCharacter,0,0,20,30,mcPositionX1,mcPositionY1,50,60);
}
//main characters design
function mainDesignDown() {
  let mainCharacter = new Image();
  mainCharacter.src = "images/sprites/characterMovementSprites.png";
  mainCharacter.onload = function drawBase() {
  mc.drawImage(mainCharacter,0,0,20,30,mcPositionX1,mcPositionY1,50,60);
  }
}
function mainDesignUp() {
  let mainCharacter = new Image();
  mainCharacter.src = "images/sprites/characterMovementSprites.png";
  mainCharacter.onload = function drawBase() {
  mc.drawImage(mainCharacter,0,37,20,30,mcPositionX1,mcPositionY1,50,60);
  }
}
function mainDesignRight() {
  let mainCharacter = new Image();
  mainCharacter.src = "images/sprites/characterMovementSprites.png";
  mainCharacter.onload = function drawBase() {
  mc.drawImage(mainCharacter,0,72,20,30,mcPositionX1,mcPositionY1,50,60);
  }
}
function mainDesignLeft() {
  let mainCharacter = new Image();
  mainCharacter.src = "images/sprites/characterMovementSprites.png";
  mainCharacter.onload = function drawBase() {
  mc.drawImage(mainCharacter,212,72,20,30,mcPositionX1,mcPositionY1,50,60);
  }
}
//switch case for function keys
window.addEventListener("keypress", (event) => {
    switch (event.key) {
        case "a":
            left();
            break;
        case "d":
            right();
            break;
        case "w":
            up();
            break;
        case "s":
            down();
            break;
        case "i":
            inventoryPopUp();
            break;
        case "f":
            lightAttack();
            break;
        case "q":
            dropInventoryItem();
            break;
        case "e":
            pickUp();
            break;
    }
});


/*
//this timer will give the opponent a certain amount of time before it attacks back
  let oppAttackCountDown = setInterval(oppAttackTime, 1000);
  function oppAttackTime() {
    oppAttackTimeAmount -= 1;
    mcHealth -= 1;
    console.log(mcHealth)
    if(oppAttackTimeAmount == 0) {
      clearInterval(oppAttackCountDown);
    }
*/
