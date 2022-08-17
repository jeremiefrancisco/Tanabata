let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let canvas1 = document.getElementById('myCanvas1');
let ctx1 = canvas1.getContext('2d');
let canvas2 = document.getElementById('myCanvas2');
let ctx2 = canvas2.getContext('2d');

//background
let background = new Image();
background.src = "images/backgrounds/customizationBackground.png";
background.onload = function drawBackground() {
ctx.drawImage(background,0,0,700,450);
}
//shows the main character the player is customizing
let mainCharacter = new Image();
mainCharacter.src = "images/sprites/customizationSprites/male/maleOption.png";
mainCharacter.onload = function drawBase() {
ctx2.drawImage(mainCharacter,45,15,600,350);
}
//the two buttons
let rightButton = new Image();
rightButton.src = "images/sprites/customizationSprites/buttons/right.png";
rightButton.onload = function drawRB() {
ctx1.drawImage(rightButton,400,100,300,200);
}
function rightB() {
let rightButton = new Image();
rightButton.src = "images/sprites/customizationSprites/buttons/right.png";
rightButton.onload = function drawRB() {
ctx1.drawImage(rightButton,400,100,300,200);
}
}
let leftButton = new Image();
leftButton.src = "images/sprites/customizationSprites/buttons/left.png";
leftButton.onload = function drawLB() {
ctx1.drawImage(leftButton,0,100,300,200);
}
function leftB() {
let leftButton = new Image();
leftButton.src = "images/sprites/customizationSprites/buttons/left.png";
leftButton.onload = function drawLB() {
ctx1.drawImage(leftButton,0,100,300,200);
}
}
//the array that holds the 2 genders
let base = ['sprites/customizationSprites/male/maleOption.png','sprites/customizationSprites/female/femaleOption.png'];
let bNum = 0;
//the array that holds the different female skin tones
let skinToneFemale = ['sprites/customizationSprites/female/femaleOption.png','sprites/customizationSprites/female/femaleOptionSC1.png',
                'sprites/customizationSprites/female/femaleOptionSC2.png','sprites/customizationSprites/female/femaleOptionSC3.png',
                'sprites/customizationSprites/female/femaleOptionSC4.png'];
let sFNum = 0;
//the array that holds the different male skin tones
let skinToneMale = ['sprites/customizationSprites/male/maleOption.png','sprites/customizationSprites/male/maleOptionSC1.png',
                'sprites/customizationSprites/male/maleOptionSC2.png','sprites/customizationSprites/male/maleOptionSC3.png',
                'sprites/customizationSprites/male/maleOptionSC4.png'];
let sMNum = 0;

//functions that controls which base style is shown
function next() {
  if(userEnterInput == false) {
//level to change the gender
  if(customizationLevel == 0) {
  ctx2.clearRect(0,0,700,450);
  if ( bNum >= base.length-1)  bNum = -1;
  bNum++;
  changeBase();
  leftB();
  rightB();
//level to change skin tones
} else if(customizationLevel == 1) {
//female skin tone
  if(bNum == 1) {
  ctx2.clearRect(0,0,700,450);
  if ( sFNum >= skinToneFemale.length-1)  sFNum = -1;
  sFNum++;
  changeSkinToneFemale();
  leftB();
  rightB();
}
//male skin tones
  else {
  ctx2.clearRect(0,0,700,450);
  if ( sMNum >= skinToneMale.length-1)  sMNum = -1;
  sMNum++;
  changeSkinToneMale();
  leftB();
  rightB();
}
}
}
}
function previous(){
  if(userEnterInput == false) {
//level to change the gender
  if(customizationLevel == 0) {
  ctx2.clearRect(0,0,700,450);
  if (bNum <= 0) bNum = base.length;
  bNum--;
  changeBase();
  rightB();
  leftB();
//level to change the skin tones
} else if(customizationLevel == 1) {
//female skin tones
  if(bNum == 1) {
  ctx2.clearRect(0,0,700,450);
  if (sFNum <= 0) sFNum = skinToneFemale.length;
  sFNum--;
  changeSkinToneFemale();
  rightB();
  leftB();
  console.log(characterDesign)
}
//male skin tones
else {
  ctx2.clearRect(0,0,700,450);
  if (sMNum <= 0) sMNum = skinToneMale.length;
  sMNum--;
  changeSkinToneMale();
  rightB();
  leftB();
}
}
}
}
//changes between male and female
function changeBase() {
  return mainCharacter.setAttribute('src','images/'+base[bNum]);
}
//changes between female skintones
function changeSkinToneFemale() {
  return mainCharacter.setAttribute('src','images/'+skinToneFemale[sFNum]);
}
//changes between male skintones
function changeSkinToneMale() {
  return mainCharacter.setAttribute('src','images/'+skinToneMale[sMNum]);
}
//variable will let the program know which level of the customization stage it is at
let customizationLevel = 0;
//variable will let the program know which gender
let chosenGender = 0;
//variable will let the program know which skin tone
let chosenSkin = 0;
//this makes the program stop when you press enter on a character design
let userEnterInput = false;
//this will save which character design the user chose
let characterDesign = "";
//function that will confirm or deny selections
function confirm() {
  if(userEnterInput == true) {
  customizationLevel++;
  userEnterInput = false;
}
  if(customizationLevel == 2) {
    location.replace("indexOfPart1.html");
    if(chosenGender == 1) {
      if(sFNum == 0) {
        characterDesign = "sprites/customizationSprites/female/femaleOption.png";
      } else if(sFNum == 1) {
        characterDesign = "sprites/customizationSprites/female/femaleOptionSC1.png";
      } else if(sFNum == 2) {
        characterDesign = "sprites/customizationSprites/female/femaleOptionSC2.png";
      } else if(sFNum == 3) {
        characterDesign = "sprites/customizationSprites/female/femaleOptionSC3.png";
      } else if(sFNum == 4) {
        characterDesign = "sprites/customizationSprites/female/femaleOptionSC4.png";
      }
    }
  }
}
function decline() {
  if(customizationLevel < 0) {
    customizationLevel--;
}
  userEnterInput = false;
}
//function that moves to the different customization levels
function changeLevel() {
  userEnterInput = true;
  if(customizationLevel == 0) {
  chosenGender = bNum;
  if(chosenGender == 1) {
    console.log("Are you sure you want to choose female? Press Y/N")
  } else if(chosenGender == 0) {
    console.log("Are you sure you want to choose male? Press Y/N")
  }
  } else if(customizationLevel == 1) {
    console.log("Are you happy with this character? Press Y/N")
  }
}
//switch case for function keys
window.addEventListener("keypress", (event) => {
    switch (event.key) {
        case "a":
            previous();
            break;
        case "d":
            next();
            break;
        case "Enter":
            changeLevel();
            break;
        case "y":
            confirm();
            break;
        case "n":
            decline();
    }
});
