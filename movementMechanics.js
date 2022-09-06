//this will prevent the player from walking through opponents
function stopMovementLeft() {
    backgroundX -= 10;
    opponentX1 -= 10;
    opponentX2 -= 10;
    objPositionX1 -= 10;
    objPositionX2 -= 10;
    mapBorder0x -= 10;
    mapBorder1x -= 10;
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
  mapBorder0y -= 10;
  mapBorder1y -= 10;
}
function stopMovementDown() {
  backgroundY += 10;
  opponentY1 += 10;
  opponentY2 += 10;
  objPositionY1 += 10;
  objPositionY2 += 10;
  mapBorder0y += 10;
  mapBorder1y += 10;
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
  mapBorder();
  mainHitbox();
  mainDesignLeft();
  background();
  opponentHitbox();
  objectHitbox();
}
function callAllHitboxRight() {
  mapBorder();
  mainHitbox();
  mainDesignRight();
  background();
  opponentHitbox();
  objectHitbox();
}
function callAllHitboxUp() {
  mapBorder();
  mainHitbox();
  mainDesignUp();
  background();
  opponentHitbox();
  objectHitbox();
}
function callAllHitboxDown() {
  mapBorder();
  mainHitbox();
  mainDesignDown();
  background();
  opponentHitbox();
  objectHitbox();
}
//movement keys
let leftKey = false;
function left() {
  leftKey = true;
  if(inventoryUp == false) {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  if(opponentX2 > mcPositionX1) {
  stopMovementLeft();
} else {
  movementLeft();
}
  callAllHitboxLeft();
} else {
  if(inventoryPlace<=1) {
      inventoryPlace = 7;
  } else {
      inventoryPlace--;
  }
      inventoryHighlight();
  }
  if(mcPositionX1 == mapBorder0x) {
    stopMovementLeft();
  }
  leftKey = false;
}

let rightKey = false;
function right() {
  rightKey = true;
  if(inventoryUp == false) {
  bg.clearRect(0,0,900,450);
  mc.clearRect(0,0,900,450);
  opp.clearRect(0,0,900,450);
  obj.clearRect(0,0,900,450);
  if(opponentX1 == mcPositionX2) {
      stopMovementRight();
    } else {
      movementRight();
    }
    callAllHitboxRight();
} else {
      if (inventoryPlace == 7) {
          inventoryPlace = 1;
          inventoryHighlight();

      } else {
          inventoryPlace++;
          inventoryHighlight();
      }
}
rightKey = false;
}

let upKey = false;
function up() {
  console.log(mcPositionY1)
  console.log(mapBorder0y)
  upKey = true;
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

} if(mcPositionY1 == mapBorder0y) {
  /*
  stopMovementUp();
  */
}
upKey = false;
}

let downKey = false;
function down() {
  console.log(mcPositionY2)
  console.log(mapBorder1y)

  downKey = true;
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

} if(mcPositionY2 == mapBorder1y) {
  /*
  stopMovementDown();
  */
}
downKey = false;
}
