var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var color3 = document.querySelector('#color3');
var color4 = document.querySelector('#color4');
var color5 = document.querySelector('#color5');
var hex1 = document.querySelector('.hex1');
var hex2 = document.querySelector('.hex2');
var hex3 = document.querySelector('.hex3');
var hex4 = document.querySelector('.hex4');
var hex5 = document.querySelector('.hex5');
var unlockBtn1 = document.querySelector('.unlock1');
var unlockBtn2 = document.querySelector('.unlock2');
var unlockBtn3 = document.querySelector('.unlock3');
var unlockBtn4 = document.querySelector('.unlock4');
var unlockBtn5 = document.querySelector('.unlock5');
var lockBtn1 = document.querySelector('.lock1');
var lockBtn2 = document.querySelector('.lock2');
var lockBtn3 = document.querySelector('.lock3');
var lockBtn4 = document.querySelector('.lock4');
var lockBtn5 = document.querySelector('.lock5');
var newPaletteBtn = document.querySelector('.new-pal-btn')
var itemInput = document.querySelector('.color-swatch')

window.addEventListener('load', displayNewColors)
newPaletteBtn.addEventListener('click', displayNewColors)
itemInput.addEventListener('click', toggleLock);
itemInput.addEventListener('click', toggleLock2);
itemInput.addEventListener('click', toggleLock3);
itemInput.addEventListener('click', toggleLock4);
itemInput.addEventListener('click', toggleLock5);

function displayNewColors() {
  currentPalette.accessColor()
  changeHex(currentPalette)
  background(currentPalette)
  console.log(currentPalette)

  function checkLockPostion() {
    for (var i = 0; i <= 4; i++)
    if (currentPalette.lockCheck[i] === false) {

    }
  }
}

var box2Lock = [
  'lock lock2',
  'unlock unlock2',
  'hex2',
  'color color2'
]

function toggleLock2(event) {
  mouseClick = event.target.className
  for (var i = 0; i < box2Lock.length; i++) {
    if (mouseClick === box2Lock[i]) {
      lockBtn2.classList.remove('hidden')
      unlockBtn2.classList.add('hidden')
    }
  }
}

var box1Lock = [
  'lock lock1',
  'unlock unlock1',
  'hex1',
  'color color1'
]

function toggleLock(event) {
  mouseClick = event.target.className
  for (var i = 0; i < box1Lock.length; i++) {
    if (mouseClick === box1Lock[i]) {
      lockBtn1.classList.remove('hidden')
      unlockBtn1.classList.add('hidden')
    }
  }
}

var box3Lock = [
  'lock lock3',
  'unlock unlock3',
  'hex3',
  'color color3'
]

function toggleLock3(event) {
  mouseClick = event.target.className
  for (var i = 0; i < box3Lock.length; i++) {
    if (mouseClick === box3Lock[i]) {
      lockBtn3.classList.remove('hidden')
      unlockBtn3.classList.add('hidden')
    }
  }
}

var box4Lock = [
  'lock lock4',
  'unlock unlock4',
  'hex4',
  'color color4'
]

function toggleLock4(event) {
  mouseClick = event.target.className
  for (var i = 0; i < box4Lock.length; i++) {
    if (mouseClick === box4Lock[i]) {
      lockBtn4.classList.remove('hidden')
      unlockBtn4.classList.add('hidden')
    }
  }
}

var box5Lock = [
  'lock lock5',
  'unlock unlock5',
  'hex5',
  'color color5'
]

function toggleLock5(event) {
  mouseClick = event.target.className
  for (var i = 0; i < box5Lock.length; i++) {
    if (mouseClick === box5Lock[i]) {
      lockBtn5.classList.remove('hidden')
      unlockBtn5.classList.add('hidden')
    }
  }
}

function hide(element1) {
  element.classList.add('hidden')
}

function show(element1) {
  element.classList.remove('hidden')
}

function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}

function changeHex(currentPalette) {
  hex1.innerText = currentPalette.colorPalette[0].ranHexCode
  hex2.innerText = currentPalette.colorPalette[1].ranHexCode
  hex3.innerText = currentPalette.colorPalette[2].ranHexCode
  hex4.innerText = currentPalette.colorPalette[3].ranHexCode
  hex5.innerText = currentPalette.colorPalette[4].ranHexCode
}

function background(currentPalette) {
  color1.style.backgroundColor = currentPalette.colorPalette[0].ranHexCode
  color2.style.backgroundColor = currentPalette.colorPalette[1].ranHexCode
  color3.style.backgroundColor = currentPalette.colorPalette[2].ranHexCode
  color4.style.backgroundColor = currentPalette.colorPalette[3].ranHexCode
  color5.style.backgroundColor = currentPalette.colorPalette[4].ranHexCode
}
