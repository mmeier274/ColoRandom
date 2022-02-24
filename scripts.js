var hexCodeArray = ['A','B','C','D','E','F','0','1',
'2','3','4','5','6','7','8','9']

class ColorArray {
  constructor(array) {
    this.ranHexCode = []
    this.counter = 0
  }
  randomHex() {
    for (var i = 0; this.counter < 6; i++) {
      this.counter ++
      var array = []
      var newHexCode = hexCodeArray[getRandomIndex(hexCodeArray)]
      array.push(newHexCode)
      var realArray = array.join('')
      this.ranHexCode.push(realArray[5])
      console.log(newHexCode)
    }
    return randomHex()
  }
}
//
var newColorArray = new ColorArray
newColorArray.randomHex()
console.log(newColorArray)


// }
var hexCode = []

var array = []
var counter = 0
function randomHex() {
  for (var i = 0; counter < 6; i++) {
    counter ++
    var random = hexCodeArray[getRandomIndex(hexCodeArray)]
    array.push(random)
    var realArray = array.join('')
    hexCode.push(realArray)
    console.log(hexCode[5])
  }
}


function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}


//randomize index
