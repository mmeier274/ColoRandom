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
}

function toggle(element) {
  element.classList.toggle('hidden')
}

function toggleLock(event) {
  mouseClick = event.target.className
  if (mouseClick === 'color color1') {
    toggle(lockBtn1)
    toggle(unlockBtn1);
    currentPalette.colorPalette[0].locked = !currentPalette.colorPalette[0].locked
  }
}

function toggleLock2(event) {
  mouseClick = event.target.className
  if (mouseClick === 'color color2') {
    toggle(lockBtn2)
    toggle(unlockBtn2)
    currentPalette.colorPalette[1].locked = !currentPalette.colorPalette[1].locked
}
}

function toggleLock3(event) {
  mouseClick = event.target.className
  if (mouseClick === 'color color3') {
    toggle(lockBtn3)
    toggle(unlockBtn3)
    currentPalette.colorPalette[2].locked = !currentPalette.colorPalette[2].locked
  }
  }

function toggleLock4(event) {
  mouseClick = event.target.className
  if (mouseClick === 'color color4') {
    toggle(lockBtn4)
    toggle(unlockBtn4)
    currentPalette.colorPalette[3].locked = !currentPalette.colorPalette[3].locked
  }
}

function toggleLock5(event) {
  mouseClick = event.target.className
  if (mouseClick === 'color color5') {
    toggle(lockBtn5)
    toggle(unlockBtn5)
    currentPalette.colorPalette[4].locked = !currentPalette.colorPalette[4].locked
  }
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
