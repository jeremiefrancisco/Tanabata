
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
//this will tell the program if the character has a weapon
let sword = false;
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
//this will prevent the player from walking through opponents
function stopMovementLeft() {
    backgroundX -= 20;
    opponentX1 -= 20;
    opponentX2 -= 20;
    objPositionX1 -= 20;
    objPositionX2 -= 20;
}
function stopMovementRight() {
  backgroundX += 10;
  opponentX1 += 10;
  opponentX2 += 10;
  objPositionX1 += 10;
  objPositionX2 += 10;
}
function stopMovementUp() {
  backgroundY -= 10;
  opponentY1 -= 10;
  opponentY2 -= 10;
  objPositionY1 -= 10;
  objPositionY2 -= 10;
}
function stopMovementDown() {
  backgroundY += 10;
  opponentY1 += 10;
  opponentY2 += 10;
  objPositionY1 += 10;
  objPositionY2 += 10;
}
//functions that lets the player walk
function movementLeft() {
  backgroundX += 10;
  opponentX1 += 10;
  opponentX2 += 10;
  objPositionX1 += 10;
  objPositionX2 += 10;
}
function movementRight() {
  backgroundX -= 10;
  opponentX1 -= 10;
  opponentX2 -= 10;
  objPositionX1 -= 10;
  objPositionX2 -= 10;
}
function movementUp() {
  backgroundY += 10;
  opponentY1 += 10;
  opponentY2 += 10;
  objPositionY1 += 10;
  objPositionY2 += 10;
}
function movementDown() {
  backgroundY -= 10;
  opponentY1 -= 10;
  opponentY2 -= 10;
  objPositionY1 -= 10;
  objPositionY2 -= 10;
}
//this will call all the functions that create the hitboxes
function callAllHitboxLeft() {
  mainHitbox();
  mainDesignLeft();
  background();
  opponentHitbox();
  objectHitbox();
}
function callAllHitboxRight() {
  mainHitbox();
  mainDesignRight();
  background();
  opponentHitbox();
  objectHitbox();
}
function callAllHitboxUp() {
  mainHitbox();
  mainDesignUp();
  background();
  opponentHitbox();
  objectHitbox();
}
function callAllHitboxDown() {
  mainHitbox();
  mainDesignDown();
  background();
  opponentHitbox();
  objectHitbox();
}
//array that will hold all the items the player picks up
const userItems = [1,2,3,4,5,6];
let inventoryLength = userItems.length;
let inventoryPlace = 0;
//movement keys
function left() {
  if(inventoryUp == false) {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  if(opponentX2 > mcPositionX1 &&
    opponentX1 < mcPositionX2 &&
    opponentY2 > mcPositionY1 &&
    opponentY1 < mcPositionY2) {
  stopMovementLeft();
} else {
  movementLeft();
}
  callAllHitboxLeft();
} else {
  console.log(inventoryPlace)
  if(inventoryPlace<=0) {
    inventoryPlace = inventoryLength;
  } else {
    inventoryPlace--;
  }
  }
}
function right() {
  if(inventoryUp == false) {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  if(opponentX1 < mcPositionX2 &&
    opponentX2 > mcPositionX1 &&
    opponentY1 < mcPositionY2 &&
    opponentY2 > mcPositionY1) {
      stopMovementRight();
    } else {
      movementRight();
    }
    callAllHitboxRight();
} else {

}
}
function up() {
  if(inventoryUp == false) {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  if(opponentY2 > mcPositionY1 &&
    opponentX1 < mcPositionX2 &&
    opponentX2 > mcPositionX1 &&
    opponentY1 < mcPositionY2) {
      stopMovementUp();
    } else {
      movementUp();
    }
    callAllHitboxUp();
} else {

}
}
function down() {
  if(inventoryUp == false) {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  if(opponentY1 < mcPositionY2 &&
    opponentY2 > mcPositionY1 &&
    opponentX1 < mcPositionX2 &&
    opponentX2 > mcPositionX1
  ) {
    stopMovementDown();
  } else {
    movementDown();
  }
  callAllHitboxDown();
} else {

}
}

//brings the inventory on screen
function inventoryBox() {
  inv.strokeStyle = 'red';
  inv.strokeRect(50, 30, 600, 400);
  let i = 0;
  let changingX = 80;
  let multiplicationValue = 1;
  while(i<7) {
  i++
  inv.strokeStyle = "purple";
  inv.strokeRect(changingX*multiplicationValue, 40, 50, 60);
  multiplicationValue++;
}
}
let inventoryCount = 0;
//this will help the program know how much items are in the players possesion
function inventoryHighlight() {
  inv.lineWidth = 5;
  inv.strokeStyle = "yellow";
  inv.strokeRect(80,40,50,60);
}
function inventoryItems() {
  inventoryHighlight();
}
let inventoryUp = false;
//inventory function
function inventoryPopUp() {
  inventoryUp = true;
  inventoryBox();
  inventoryItems();
  inventoryCount += 1;
  if(inventoryCount%2 == 0) {
  inv.clearRect(0,0,900,450);
  inventoryUp = false;
}

}
//function that allows you to pick up items
function pickUp() {
  if(objPositionX1 == mcPositionX2) {
  sword = true;
  userItems.push(sword);
  console.log(sword)
} else if(objPositionX2 == mcPositionX1) {
  sword = true;
  userItems.push("sword");
  console.log(sword)
  console.log(userItems[0]);
} else if(objPositionY1 == mcPositionY2) {
  sword = true;
  userItems.push(sword);
  console.log(sword)
} else if(objPositionY2 == mcPositionY1) {
  sword = true;
  userItems.push(sword);
  console.log(sword)
}
}

//fight function
function lightAttack() {
  console.log("swish")
  if(
  opponentX1 == mcPositionX2 ||
  opponentX2 == mcPositionX1 ||
  opponentY1 == mcPositionY2 ||
  opponentY2 == mcPositionY1
) {
  if(sword == false) {
  opponentHealth -= 1;
  if(opponentHealth<0) {
    console.log("dead")
  }
} else if(sword == true) {
  opponentHealth -= 2;
  if(opponentHealth<0) {
    console.log("dead")
  }
}
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
        case "e":
            pickUp();
        case "f":
            lightAttack();
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
