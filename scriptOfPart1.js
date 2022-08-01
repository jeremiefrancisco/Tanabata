let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let canvas1 = document.getElementById('myCanvas1');
let ctx1 = canvas1.getContext('2d');

let midXCanvas = 350;
let midYCanvas = 225;

ctx.strokeStyle = 'blue';
ctx.strokeRect(midXCanvas-25, midYCanvas-40, 50, 60);

let mainCharacter = new Image();
mainCharacter.src = "images/sprites/characterMovementSprites.png";
mainCharacter.onload = function drawBase() {
ctx.drawImage(mainCharacter,0,0,20,30,midXCanvas-30,midYCanvas-40,60,60);
}

import characterDesign from 'scriptOfCustomization.js';
console.log(characterDesign)
//main characters design
function mainDesignDown() {
  let mainCharacter = new Image();
  mainCharacter.src = "images/sprites/characterMovementSprites.png";
  mainCharacter.onload = function drawBase() {
  ctx.drawImage(mainCharacter,0,0,20,30,midXCanvas-30,midYCanvas-40,60,60);
  }
}
function mainDesignUp() {
  let mainCharacter = new Image();
  mainCharacter.src = "images/sprites/characterMovementSprites.png";
  mainCharacter.onload = function drawBase() {
  ctx.drawImage(mainCharacter,0,37,20,30,midXCanvas-30,midYCanvas-40,60,60);
  }
}
function mainDesignRight() {
  let mainCharacter = new Image();
  mainCharacter.src = "images/sprites/characterMovementSprites.png";
  mainCharacter.onload = function drawBase() {
  ctx.drawImage(mainCharacter,0,72,20,30,midXCanvas-27,midYCanvas-40,60,60);
  }
}
function mainDesignLeft() {
  let mainCharacter = new Image();
  mainCharacter.src = "images/sprites/characterMovementSprites.png";
  mainCharacter.onload = function drawBase() {
  ctx.drawImage(mainCharacter,212,72,20,30,midXCanvas-27,midYCanvas-40,60,60);
  }
}
//main characters hitbox
function main() {
  ctx.strokeStyle = 'blue';
  ctx.strokeRect(midXCanvas-25, midYCanvas-40, 50, 60);
}
//brings the inventory on screen
function inventoryBox() {
  ctx1.strokeStyle = 'red';
  ctx1.strokeRect(midXCanvas-300, midYCanvas-200, 600, 400);
}
//movement keys
function left() {
  ctx.clearRect(0,0,900,450);
  midXCanvas -= 10;
  main();
  mainDesignLeft()
}
function right() {
  rightIndicator = true;
  ctx.clearRect(0,0,900,450);
  midXCanvas += 10;
  main();
  mainDesignRight();
}
function up() {
  ctx.clearRect(0,0,900,450);
  midYCanvas -= 10;
  main();
  mainDesignUp()
}
function down() {
  ctx.clearRect(0,0,900,450);
  midYCanvas += 10;
  main();
  mainDesignDown()
}
let inventoryCount = 0;
//inventory function
function inventory() {
  inventoryBox();
  inventoryCount += 1;
  if(inventoryCount%2 == 0) {
  ctx1.clearRect(0,0,900,450);
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
            inventory();
            break;
    }
});
