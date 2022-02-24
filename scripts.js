var hexCodeArray = ['A','B','C','D','E','F','0','1',
'2','3','4','5','6','7','8','9']

var color1 = document.querySelector('#color1');

class ColorArray {
  constructor(array) {
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
    console.log(this.ranHexCode)
  }
}
//
var newColorArray = new ColorArray
var newColorArray2 = new ColorArray
var newColorArray3 = new ColorArray
var newColorArray4 = new ColorArray
var newColorArray5 = new ColorArray

newColorArray.randomHex()
newColorArray2.randomHex()
newColorArray3.randomHex()
newColorArray4.randomHex()
newColorArray5.randomHex()

var test = document.querySelector('.hex1')
var test2 = document.querySelector('.hex2')
var test3 = document.querySelector('.hex3')
var test4 = document.querySelector('.hex4')
var test5 = document.querySelector('.hex5')

function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}

window.addEventListener('load', function() {
  randomizeHex();
  changeHex();
  insertColor();
})

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
  color2.style.backgroundColor = test2.innerText
  color3.style.backgroundColor = test3.innerText
  color4.style.backgroundColor = test4.innerText
  color5.style.backgroundColor = test5.innerText
}
// var color1 = document.querySelector('#color1');
// color1.style.backgroundColor = test.innerText
