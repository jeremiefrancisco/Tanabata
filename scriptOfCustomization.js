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
//this will save which character desing the user chose
let characterLevel = 0;
let characterDesign = "";
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
//the array that holds the hairstyles for maleBase
let hairstyleMB = ['sprites/customizationSprites/male/maleOption.png', 'sprites/customizationSprites/male/hairstyle/maleBaseRedHair.png',
                'sprites/customizationSprites/male/hairstyle/maleBaseMohawk.png'];
let hairMBNum = 0;
//the array that holds the hairstyles for male SC1
let hairstyleMB1 = ['sprites/customizationSprites/male/maleOptionSC1.png', 'sprites/customizationSprites/male/hairstyle/SC1/maleSC1Mohawk.png',
                'sprites/customizationSprites/male/hairstyle/SC1/maleSC1RedHair.png'];
let hairMBNum1 = 0;
//the array that holds the hairstyles for male SC2
let hairstyleMB2 = ['sprites/customizationSprites/male/maleOptionSC2.png', 'sprites/customizationSprites/male/hairstyle/SC2/maleSC2Mohawk.png',
                'sprites/customizationSprites/male/hairstyle/SC2/maleSC2RedHair.png'];
let hairMBNum2 = 0;
//the array that holds the hairstyles for male SC3
let hairstyleMB3 = ['sprites/customizationSprites/male/maleOptionSC3.png', 'sprites/customizationSprites/male/hairstyle/SC3/maleSC3Mohawk.png',
                'sprites/customizationSprites/male/hairstyle/SC3/maleSC3RedHair.png'];
let hairMBNum3 = 0;
//the array that holds the hairstyles for male SC4
let hairstyleMB4 = ['sprites/customizationSprites/male/maleOptionSC4.png', 'sprites/customizationSprites/male/hairstyle/SC4/maleSC4Mohawk.png',
                'sprites/customizationSprites/male/hairstyle/SC4/maleSC4RedHair.png'];
let hairMBNum4 = 0;
//the array that holds the hairstyles for femaleBase
let hairstyleFMB = ['sprites/customizationSprites/female/femaleOption.png', 'sprites/customizationSprites/female/hairstyle/femaleBasePonytail.png',
                'sprites/customizationSprites/female/hairstyle/femaleBaseDoublePonytail.png'];
let hairFMBNum = 0;
//the array that holds the hairstyles for female SC1
let hairstyleFMB1 = ['sprites/customizationSprites/female/femaleOptionSC1.png', 'sprites/customizationSprites/female/hairstyle/SC1/femaleSC1Ponytail.png',
                'sprites/customizationSprites/female/hairstyle/SC1/femaleSC1DoublePonytail.png'];
let hairFMBNum1 = 0;
//the array that holds the hairstyles for female SC2
let hairstyleFMB2 = ['sprites/customizationSprites/female/femaleOptionSC2.png', 'sprites/customizationSprites/female/hairstyle/SC2/femaleSC2Ponytail.png',
                'sprites/customizationSprites/female/hairstyle/SC2/femaleSC2DoublePonytail.png'];
let hairFMBNum2 = 0;
//the array that holds the hairstyles for female SC3
let hairstyleFMB3 = ['sprites/customizationSprites/female/femaleOptionSC3.png', 'sprites/customizationSprites/female/hairstyle/SC3/femaleSC3Ponytail.png',
                'sprites/customizationSprites/female/hairstyle/SC3/femaleSC3DoublePonytail.png'];
let hairFMBNum3 = 0;
//the array that holds the hairstyles for female SC4
let hairstyleFMB4 = ['sprites/customizationSprites/female/femaleOptionSC4.png', 'sprites/customizationSprites/female/hairstyle/SC4/femaleSC4Ponytail.png',
              'sprites/customizationSprites/female/hairstyle/SC4/femaleSC4DoublePonytail.png'];
let hairFMBNum4 = 0;
//functions that controls the which base style is shown
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
//female skin tone 0
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
//level to change hairstyle
} else if(customizationLevel == 2) {
//female 0 hairstyle
  if(bNum == 1 && sFNum == 0) {
  ctx2.clearRect(0,0,700,450);
  if ( hairFMBNum >= hairstyleFMB.length-1)  hairFMBNum = -1;
  hairFMBNum++;
  changeBaseFemaleHair();
  leftB();
  rightB();
  characterLevel = 1;
//female 1 hairstyle
} else if(bNum == 1 && sFNum == 1) {
  ctx2.clearRect(0,0,700,450);
  if ( hairFMBNum1 >= hairstyleFMB1.length-1)  hairFMBNum1 = -1;
  hairFMBNum1++;
  changeFemale1Hair();
  leftB();
  rightB();
  characterLevel = 2;
//female 2 hairstyle
} else if(bNum == 1 && sFNum == 2) {
  ctx2.clearRect(0,0,700,450);
  if ( hairFMBNum2 >= hairstyleFMB2.length-1)  hairFMBNum2 = -1;
  hairFMBNum2++;
  changeFemale2Hair();
  leftB();
  rightB();
  characterLevel = 3;
//female 3 hairstyle
} else if(bNum == 1 && sFNum == 3) {
  ctx2.clearRect(0,0,700,450);
  if ( hairFMBNum3 >= hairstyleFMB3.length-1)  hairFMBNum3 = -1;
  hairFMBNum3++;
  changeFemale3Hair();
  leftB();
  rightB();
  characterLevel = 4;
//female 4 hairstyle
} else if(bNum == 1 && sFNum == 4) {
  ctx2.clearRect(0,0,700,450);
  if ( hairFMBNum4 >= hairstyleFMB4.length-1)  hairFMBNum4 = -1;
  hairFMBNum4++;
  changeFemale4Hair();
  leftB();
  rightB();
  characterLevel = 5;
}
//male 0 hairstyle
  else if(bNum == 0 && sMNum == 0) {
  ctx2.clearRect(0,0,700,450);
  if ( hairMBNum >= hairstyleMB.length-1)  hairMBNum = -1; {
  hairMBNum++;
  changeBaseMaleHair();
  leftB();
  rightB();
}
}
//male 1 hairstyle
else if(bNum == 0 && sMNum == 1) {
ctx2.clearRect(0,0,700,450);
if ( hairMBNum1 >= hairstyleMB1.length-1)  hairMBNum1 = -1; {
hairMBNum1++;
changeMale1Hair();
leftB();
rightB();
}
}
//male 2 hairstyle
else if(bNum == 0 && sMNum == 2) {
ctx2.clearRect(0,0,700,450);
if ( hairMBNum2 >= hairstyleMB2.length-1)  hairMBNum2 = -1; {
hairMBNum2++;
changeMale2Hair();
leftB();
rightB();
}
}
//male 3 hairstyle
else if(bNum == 0 && sMNum == 3) {
ctx2.clearRect(0,0,700,450);
if ( hairMBNum3 >= hairstyleMB3.length-1)  hairMBNum3 = -1; {
hairMBNum3++;
changeMale3Hair();
leftB();
rightB();
}
}
//male 3 hairstyle
else if(bNum == 0 && sMNum == 4) {
ctx2.clearRect(0,0,700,450);
if ( hairMBNum4 >= hairstyleMB4.length-1)  hairMBNum4 = -1; {
hairMBNum4++;
changeMale4Hair();
leftB();
rightB();
}
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
//level to change the hairstyle
} else if(customizationLevel == 2) {
//female 0 hairstyles
  if(bNum == 1 && sFNum == 0) {
  ctx2.clearRect(0,0,700,450);
  if (hairFMBNum <= 0) hairFMBNum = hairstyleFMB.length;
  hairFMBNum--;
  changeBaseFemaleHair();
  rightB();
  leftB();
//female 1 hairstyle
} else if(bNum == 1 && sFNum == 1) {
  ctx2.clearRect(0,0,700,450);
  if (hairFMBNum1 <= 0) hairFMBNum1 = hairstyleFMB1.length;
  hairFMBNum1--;
  changeFemale1Hair();
  rightB();
  leftB();
//female 2 hairstyle
} else if(bNum == 1 && sFNum == 2) {
  ctx2.clearRect(0,0,700,450);
  if (hairFMBNum2 <= 0) hairFMBNum2 = hairstyleFMB2.length;
  hairFMBNum2--;
  changeFemale2Hair();
  rightB();
  leftB();
//female 3 hairstyle
} else if(bNum == 1 && sFNum == 3) {
  ctx2.clearRect(0,0,700,450);
  if (hairFMBNum3 <= 0) hairFMBNum3 = hairstyleFMB3.length;
  hairFMBNum3--;
  changeFemale3Hair();
  rightB();
  leftB();
//female 4 hairstyle
} else if(bNum == 1 && sFNum == 4) {
  ctx2.clearRect(0,0,700,450);
  if (hairFMBNum4 <= 0) hairFMBNum4 = hairstyleFMB4.length;
  hairFMBNum4--;
  changeFemale4Hair();
  rightB();
  leftB();
}
//male 0 hairstyles
else if(bNum == 0 && sMNum == 0) {
  ctx2.clearRect(0,0,700,450);
  if (hairMBNum <= 0) hairMBNum = hairstyleMB.length;
  hairMBNum--;
  changeBaseMaleHair();
  rightB();
  leftB();
}
//male 1 hairstyles
else if(bNum == 0 && sMNum == 1) {
  ctx2.clearRect(0,0,700,450);
  if (hairMBNum1 <= 0) hairMBNum1 = hairstyleMB1.length;
  hairMBNum1--;
  changeMale1Hair();
  rightB();
  leftB();
}
//male 2 hairstyles
else if(bNum == 0 && sMNum == 2) {
  ctx2.clearRect(0,0,700,450);
  if (hairMBNum2 <= 0) hairMBNum2 = hairstyleMB2.length;
  hairMBNum2--;
  changeMale2Hair();
  rightB();
  leftB();
}
//male 3 hairstyles
else if(bNum == 0 && sMNum == 3) {
  ctx2.clearRect(0,0,700,450);
  if (hairMBNum3 <= 0) hairMBNum3 = hairstyleMB3.length;
  hairMBNum3--;
  changeMale3Hair();
  rightB();
  leftB();
}
//male 4 hairstyles
else if(bNum == 0 && sMNum == 4) {
  ctx2.clearRect(0,0,700,450);
  if (hairMBNum4 <= 0) hairMBNum4 = hairstyleMB4.length;
  hairMBNum4--;
  changeMale4Hair();
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
//changes between female 0 hairstyles
function changeBaseFemaleHair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleFMB[hairFMBNum]);
}
//changes between female 1 hairstyles
function changeFemale1Hair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleFMB1[hairFMBNum1]);
}
//changes between female 2 hairstyles
function changeFemale2Hair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleFMB2[hairFMBNum2]);
}
//changes between female 3 hairstyles
function changeFemale3Hair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleFMB3[hairFMBNum3]);
}
//changes between female 4 hairstyles
function changeFemale4Hair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleFMB4[hairFMBNum4]);
}
//changes between male 0 skintones
function changeBaseMaleHair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleMB[hairMBNum]);
}
//changes between male 1 skintones
function changeMale1Hair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleMB1[hairMBNum1]);
}
//changes between male 2 skintones
function changeMale2Hair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleMB2[hairMBNum2]);
}
//changes between male 3 skintones
function changeMale3Hair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleMB3[hairMBNum3]);
}
//changes between male 4 skintones
function changeMale4Hair() {
  return mainCharacter.setAttribute('src','images/'+hairstyleMB4[hairMBNum4]);
}
//variable will let the program know which level of the customization stage it is at
let customizationLevel = 0;
//variable will let the program know which gender
let chosenGender = 0;
//variable will let the program know which skin tone
let chosenSkin = 0;
//this makes the program stop when you press enter on a character design
let userEnterInput = false;
//function that will confirm or deny selections
function confirm() {
  if(userEnterInput == true) {
  customizationLevel++;
  userEnterInput = false;
}
  if(customizationLevel == 2) {

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
    console.log("Are you sure you want to choose this skin color? Press Y/N")
  } else if(customizationLevel == 2) {
    console.log("Are you sure you want to choose this hairstyle? Press Y/N")
  } else if(customizationLevel == 3) {
    console.log("Are you happy with your character?")
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
