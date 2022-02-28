var allColor = document.querySelectorAll('.color')
var allHex = document.querySelectorAll('.hex')
var lockBtnAll = document.querySelectorAll('.lock')
var unlockBtnAll = document.querySelectorAll('.unlock')
var lockBox = document.querySelector('.color-swatch')
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

window.addEventListener('load', displayNewColors)

savedPaletteImgs.addEventListener('click', deletePalette)

newPaletteBtn.addEventListener('click', displayNewColors)

lockBox.addEventListener('click', toggleLock);

savePaletteBtn.addEventListener('click', function() {
  pushColorArray()
  addHtml()
  brandNewPalette()
  displayNewColors()
})

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

function deletePalette() {
  var itemToDelete = parseInt(event.target.id)
  for (var i = 0; i < savedPaletteArray.length; i++) {
    if (itemToDelete === savedPaletteArray[i].uniqueId) {
      savedPaletteArray.splice(i, 1)
      event.target.parentElement.remove()
      console.log(event.target.parentElement)
    }
  }
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
  console.log(event.target.className)
  for (var i = 0; i <= 4; i++) {
    if (allColor[i].className === event.target.className) {
      console.log(allColor[i])
      toggle(lockBtnAll[i])
      toggle(unlockBtnAll[i])
      currentPalette.colorPalette[i].locked = !currentPalette.colorPalette[i].locked
    }
  }
}

function changeHex(currentPalette) {
  for (var i = 0; i <= 4; i++) {
    allHex[i].innerText = currentPalette.colorPalette[i].ranHexCode
  }
}

function background(currentPalette) {
  for (var i = 0; i <= 4; i++) {
    allColor[i].style.backgroundColor = currentPalette.colorPalette[i].ranHexCode
  }
}

function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}
