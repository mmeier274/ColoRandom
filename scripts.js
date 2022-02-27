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
var savePaletteBtn = document.querySelector('.save-pal-btn')
var savedPaletteImgs = document.querySelector('.saved-paletes')

var testArray = []

savePaletteBtn.addEventListener('click', function() {
testArray.push(currentPalette)
})

window.addEventListener('load', displayNewColors)
newPaletteBtn.addEventListener('click', function() {
  displayNewColors()
  currentPalette = new Palette
  console.log(currentPalette)
})
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

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

function toggleLock(event) {
  mouseClick = event.target.className
    if (mouseClick === 'unlock unlock1') {
      show(lockBtn1)
      hide(unlockBtn1)
      currentPalette.colorPalette[0].locked = true
    }
    else if (mouseClick === 'lock lock1') {
      show(unlockBtn1)
      hide(lockBtn1)
      currentPalette.colorPalette[0].locked = false
    }
}

function toggleLock2(event) {
  mouseClick = event.target.className
    if (mouseClick === 'unlock unlock2') {
      show(lockBtn2)
      hide(unlockBtn2)
      currentPalette.colorPalette[1].locked = true
    }
    else if (mouseClick === 'lock lock2') {
      show(unlockBtn2)
      hide(lockBtn2)
      currentPalette.colorPalette[1].locked = false
    }
}

function toggleLock3(event) {
  mouseClick = event.target.className
    if (mouseClick === 'unlock unlock3') {
      show(lockBtn3)
      hide(unlockBtn3)
      currentPalette.colorPalette[2].locked = true
    }
    else if (mouseClick === 'lock lock3') {
      show(unlockBtn3)
      hide(lockBtn3)
      currentPalette.colorPalette[2].locked = false
    }
}

function toggleLock4(event) {
  mouseClick = event.target.className
    if (mouseClick === 'unlock unlock4') {
      show(lockBtn4)
      hide(unlockBtn4)
      currentPalette.colorPalette[3].locked = true
    }
    else if (mouseClick === 'lock lock4') {
      show(unlockBtn4)
      hide(lockBtn4)
      currentPalette.colorPalette[3].locked = false
    }
}

function toggleLock5(event) {
  mouseClick = event.target.className
    if (mouseClick === 'unlock unlock5') {
      show(lockBtn5)
      hide(unlockBtn5)
      currentPalette.colorPalette[4].locked = true
    }
    else if (mouseClick === 'lock lock5') {
      show(unlockBtn5)
      hide(lockBtn5)
      currentPalette.colorPalette[4].locked = false
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
