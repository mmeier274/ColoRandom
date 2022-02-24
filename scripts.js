var hexCodeArray = ['A','B','C','D','E','F','0','1',
'2','3','4','5','6','7','8','9']

var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var color3 = document.querySelector('#color3');
var color4 = document.querySelector('#color4');
var color5 = document.querySelector('#color5');

class ColorArray {
  constructor() {
    this.ranHexCode = [];
    this.counter = 0;
    this.locked = false;
  }
  randomHex() {
    var array = []
    var hexcode = []
    for (var i = 0; hexcode.length < 6; i++) {
      this.counter ++
      array = hexCodeArray[getRandomIndex(hexCodeArray)]
      hexcode.push(array)
    }
    this.ranHexCode = hexcode.join('')
  }
}

var newColorArray = new ColorArray
var newColorArray2 = new ColorArray
var newColorArray3 = new ColorArray
var newColorArray4 = new ColorArray
var newColorArray5 = new ColorArray

var test = document.querySelector('.hex1')
var test2 = document.querySelector('.hex2')
var test3 = document.querySelector('.hex3')
var test4 = document.querySelector('.hex4')
var test5 = document.querySelector('.hex5')

function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}

window.addEventListener('load',function() {
 testFunction()
})

function testFunction() {
var loadPalette = new Palette;
loadPalette.accessColor()
loadPalette.addHastag()
color1.style.backgroundColor = loadPalette.color1
color2.style.backgroundColor = loadPalette.color2
color3.style.backgroundColor = loadPalette.color3
color4.style.backgroundColor = loadPalette.color4
color5.style.backgroundColor = loadPalette.color5
test.innerText = loadPalette.color1
test2.innerText = loadPalette.color2
test3.innerText = loadPalette.color3
test4.innerText = loadPalette.color4
test5.innerText = loadPalette.color5
}

function randomizeHex() {
  one = newColorArray.ranHexCode
  two = newColorArray2.ranHexCode
  three = newColorArray3.ranHexCode
  four = newColorArray4.ranHexCode
  five = newColorArray5.ranHexCode
}

function changeHex() {
  test.innerText = `#${one}`
  test2.innerText = `#${two}`
  test3.innerText = `#${three}`
  test4.innerText = `#${four}`
  test5.innerText = `#${five}`
}

function insertColor() {
  color1.style.backgroundColor = test.innerText;
  color2.style.backgroundColor = test2.innerText;
  color3.style.backgroundColor = test3.innerText;
  color4.style.backgroundColor = test4.innerText;
  color5.style.backgroundColor = test5.innerText
}

function uniqueId() {
  return Math.floor((Math.random() * 1000) + 1)
}
var palleteId;
paletteId = uniqueId()
class Palette {
  constructor() {
    this.color1 = color1
    this.color2 = color2
    this.color3 = color3
    this.color4 = color4
    this.color5 = color5
    this.colorPalette =[]
    this.uniqueId = paletteId
  }
  accessColor() {
    var newColorArray = new ColorArray
    var newColorArray2 = new ColorArray
    var newColorArray3 = new ColorArray
    var newColorArray4 = new ColorArray
    var newColorArray5 = new ColorArray

    newColorArray.randomHex()
    this.color1 = newColorArray.ranHexCode

    newColorArray2.randomHex()
    this.color2 = newColorArray2.ranHexCode

    newColorArray3.randomHex()
    this.color3 = newColorArray3.ranHexCode

    newColorArray4.randomHex()
    this.color4 = newColorArray4.ranHexCode

    newColorArray5.randomHex()
    this.color5 = newColorArray5.ranHexCode
  }
  addHastag() {
    this.color1 = `#${this.color1}`
    this.color2 = `#${this.color2}`
    this.color3 = `#${this.color3}`
    this.color4 = `#${this.color4}`
    this.color5 = `#${this.color5}`
  }
}
