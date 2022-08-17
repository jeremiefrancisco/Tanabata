
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

//bacgkround related coordinates
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
let opponentHealth = 2;
let mcHealth = 10;
//mc related coordinates
let mcPositionX1 = 320;
let mcPositionY1 = 180;
let mcPositionX2 = mcPositionX1+50;
let mcPositionY2 = mcPositionY1+60;
//object related coordinates
let objPositionX1 = 50;
let objPositionY1 = 50;
let objPositionX2 = objPositionX1+50;
let objPositionY2 = objPositionY1+60;
//background picture
let backgroundPicture = new Image();
backgroundPicture.src = "images/testBackground.png";
backgroundPicture.onload = function drawbackgroundPicture() {
bg.drawImage(backgroundPicture,backgroundX,backgroundY,canvasWidth,canvasHeight);
}
function background() {
  let backgroundPicture = new Image();
  backgroundPicture.src = "images/testBackground.png";
  backgroundPicture.onload = function drawTest() {
  bg.drawImage(backgroundPicture,backgroundX,backgroundY,canvasWidth,canvasHeight);
  }
}
//array that will hold all the items the player picks up
let items = 
//default hitbox design
mc.strokeStyle = 'blue';
mc.strokeRect(mcPositionX1, mcPositionY1, 50, 60);

opp.strokeStyle = 'red';
opp.strokeRect(opponentX1, opponentY1, 50, 60);

obj.strokeStyle = "green";
obj.strokeRect(objPositionX1, objPositionY1, 30, 30);

//hitbox related functions
function objectHitbox() {
  obj.strokeStyle = "green";
  obj.strokeRect(objPositionX1, objPositionY1, 30, 30);
}
function opponentHitbox() {
  opp.strokeStyle = 'red';
  opp.strokeRect(opponentX1, opponentY1, 50, 60);
  if(
    opponentX2>mcPositionX1 &&
    opponentX1<mcPositionX2 &&
    opponentY1<mcPositionY2 &&
    opponentY2>mcPositionY1
  ) {
mcHealth -= 1;
}
}
function mainHitbox() {
  mc.strokeStyle = 'blue';
  mc.strokeRect(mcPositionX1, mcPositionY1, 50, 60);
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
//brings the inventory on screen
function inventoryBox() {
  inv.strokeStyle = 'red';
  inv.strokeRect(50, 30, 600, 400);
}
//movement keys
function left() {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  backgroundX += 10;
  opponentX1 += 10;
  opponentX2 += 10;
  objPositionX1 += 10;
  objPositionX2 += 10;
  mainHitbox();
  mainDesignLeft();
  background();
  opponentHitbox();
  objectHitbox();
}
function right() {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  backgroundX -= 10;
  opponentX1 -= 10;
  opponentX2 -= 10;
  objPositionX1 -= 10;
  objPositionX2 -= 10;
  mainHitbox();
  mainDesignRight();
  background();
  opponentHitbox();
  objectHitbox();
}
function up() {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  backgroundY += 10;
  opponentY1 += 10;
  opponentY2 += 10;
  objPositionY1 += 10;
  objPositionY2 += 10;
  mainHitbox();
  mainDesignUp();
  background();
  opponentHitbox();
  objectHitbox();
}
function down() {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  backgroundY -= 10;
  opponentY1 -= 10;
  opponentY2 -= 10;
  objPositionY1 -= 10;
  objPositionY2 -= 10;
  mainHitbox();
  mainDesignDown();
  background();
  opponentHitbox();
  objectHitbox();
}
let inventoryCount = 0;
//inventory function
function inventoryPopUp() {
  inventoryBox();
  inventoryCount += 1;
  if(inventoryCount%2 == 0) {
  inv.clearRect(0,0,900,450);
}
}
//fight function
function fight() {
  console.log("swish")
  if(
  opponentX1 == mcPositionX2 ||
  opponentX2 == mcPositionX1 ||
  opponentY1 == mcPositionY2 ||
  opponentY2 == mcPositionY1
) {
  opponentHealth -= 1;
  console.log(opponentHealth)
}
}
//function that allows you to pick up items
function pickUp() {

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
            fight();
        case "e":
            pickUp();
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
