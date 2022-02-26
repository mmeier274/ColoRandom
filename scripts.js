var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var color3 = document.querySelector('#color3');
var color4 = document.querySelector('#color4');
var color5 = document.querySelector('#color5');
var test = document.querySelector('.hex1');
var test2 = document.querySelector('.hex2');
var test3 = document.querySelector('.hex3');
var test4 = document.querySelector('.hex4');
var test5 = document.querySelector('.hex5');
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
var fiveHexCodes = [];

window.addEventListener('load',function() {
 testFunction(loadPalette)
 changeHex(loadPalette)
 background(loadPalette)
})

newPaletteBtn.addEventListener('click', function() {
  testFunction(loadPalette)
  changeHex(loadPalette)
  background(loadPalette)
})

var itemInput = document.querySelector('.color-swatch')

itemInput.addEventListener('click', clickEvent1);
itemInput.addEventListener('click', clickEvent2);
itemInput.addEventListener('click', clickEvent3);
itemInput.addEventListener('click', clickEvent4);
itemInput.addEventListener('click', clickEvent5);

var box2Lock = [
  'lock lock2',
  'unlock unlock2',
  'hex2',
  'color color2'
]

function clickEvent2(event) {
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

function clickEvent1(event) {
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

function clickEvent3(event) {
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

function clickEvent4(event) {
  mouseClick = event.target.className
  for (var i = 0; i < box4Lock.length; i++) {
  if (mouseClick === box4Lock[i]) {
    lockBtn4.classList.remove('hidden')
    unlockBtn4.classList.add('hidden')
  }
}
}
//
var box5Lock = [
  'lock lock5',
  'unlock unlock5',
  'hex5',
  'color color5'
]

 function clickEvent5(event) {
  mouseClick = event.target.className
  for (var i = 0; i < box5Lock.length; i++) {
  if (mouseClick === box5Lock[i]) {
    lockBtn5.classList.remove('hidden')
    unlockBtn5.classList.add('hidden')
  }
}
}

fiveHexCodes.push(newColorArray)

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}

function testFunction(element) {
element.accessColor()

}

function changeHex(element) {
  test.innerText = element.colorPalette[0]
  test2.innerText = element.colorPalette[1]
  test3.innerText = element.colorPalette[2]
  test4.innerText = element.colorPalette[3]
  test5.innerText = element.colorPalette[4]
}

function background(element) {
  color1.style.backgroundColor = element.colorPalette[0]
  color2.style.backgroundColor = element.colorPalette[1]
  color3.style.backgroundColor = element.colorPalette[2]
  color4.style.backgroundColor = element.colorPalette[3]
  color5.style.backgroundColor = element.colorPalette[4]
}
