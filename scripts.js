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
var unlockBtn = document.querySelector('.unlock')
var lockBtn = document.querySelector('.lock')

function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}

window.addEventListener('load',function() {
 testFunction(loadPalette)
 changeHex(loadPalette)
 background(loadPalette)
})

function testFunction(element) {
element.accessColor()
element.addHastag()
}

function changeHex(element) {
  test.innerText = element.color1
  test2.innerText = element.color2
  test3.innerText = element.color3
  test4.innerText = element.color4
  test5.innerText = element.color5
}

function background(element) {
  color1.style.backgroundColor = element.color1
  color2.style.backgroundColor = element.color2
  color3.style.backgroundColor = element.color3
  color4.style.backgroundColor = element.color4
  color5.style.backgroundColor = element.color5
}
