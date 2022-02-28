var allColor = document.querySelectorAll('.color')
var allHex = document.querySelectorAll('.hex')
var lockBtnAll = document.querySelectorAll('.lock')
var unlockBtnAll = document.querySelectorAll('.unlock')
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
var itemInput = document.querySelector('.color-swatch')
var savedPaletteImgs = document.querySelector('.color-array')
var newPaletteBtn = document.querySelector('.new-pal-btn')
var savePaletteBtn = document.querySelector('.save-pal-btn')
var savedPaletteArray = []

function addHtml() {
  savedPaletteImgs.innerHTML += `
  <section class='mini-palette'>
    <div class='mini-color' style='background-color: ${savedPaletteArray[0].colorPalette[0].ranHexCode}'></div>
    <div class='mini-color' style='background-color: ${savedPaletteArray[0].colorPalette[1].ranHexCode}'></div>
    <div class='mini-color' style='background-color: ${savedPaletteArray[0].colorPalette[2].ranHexCode}'></div>
    <div class='mini-color' style='background-color: ${savedPaletteArray[0].colorPalette[3].ranHexCode}'></div>
    <div class='mini-color' style='background-color: ${savedPaletteArray[0].colorPalette[4].ranHexCode}'></div>
    <img class='trash' id='${savedPaletteArray[0].uniqueId}' src="./assets/trash.png"
  </section>
`
}

savedPaletteImgs.addEventListener('click', deletePalette)

function deletePalette() {
  var itemToDelete = parseInt(event.target.id)
  for (var i=0; i<savedPaletteArray.length; i++) {
    if (itemToDelete === savedPaletteArray[i].uniqueId) {
      savedPaletteArray.splice(i,1)
    }
  }
}

savePaletteBtn.addEventListener('click', function() {
  pushColorArray()
  addHtml()
  brandNewPalette()
  displayNewColors()
})

window.addEventListener('load', displayNewColors)

newPaletteBtn.addEventListener('click', function() {
  displayNewColors()
})

itemInput.addEventListener('click', toggleLock);
itemInput.addEventListener('click', toggleLock2);
itemInput.addEventListener('click', toggleLock3);
itemInput.addEventListener('click', toggleLock4);
itemInput.addEventListener('click', toggleLock5);

function brandNewPalette() {
  currentPalette = new Palette
  for (var i = 0; i <= 4; i++) {
    hide(lockBtnAll[i])
    show(unlockBtnAll[i])
  }
}

function pushColorArray() {
  savedPaletteArray.unshift(currentPalette)
}

function displayNewColors() {
  currentPalette.accessColor()
  changeHex(currentPalette)
  background(currentPalette)
}

function toggle(element) {
  element.classList.toggle('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

function toggleLock(event) {
  mouseClick = event.target.className
  if (mouseClick === 'color color1') {
    toggle(lockBtn1)
    toggle(unlockBtn1)
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
  for (var i=0; i<=4; i++) {
    allHex[i].innerText = currentPalette.colorPalette[i].ranHexCode
  }
}

function background(currentPalette) {
  for (var i=0; i<=4; i++) {
    allColor[i].style.backgroundColor = currentPalette.colorPalette[i].ranHexCode
  }
}
