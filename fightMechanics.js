//fight function
function lightAttack() {
  console.log("swish")
  if(
  opponentX1 == mcPositionX2 ||
  opponentX2 == mcPositionX1 ||
  opponentY1 == mcPositionY2 ||
  opponentY2 == mcPositionY1
) {
  if(sword01 == false) {
  opponentHealth -= 1;
  if(opponentHealth<0) {
    console.log("dead")
  }
} else if(sword01 == true) {
  opponentHealth -= 2;
  if(opponentHealth<0) {
    console.log("dead")
  }
}
}
}
