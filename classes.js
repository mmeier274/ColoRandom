var hexCodeArray = ['A','B','C','D','E','F','0','1',
'2','3','4','5','6','7','8','9']

class Color {
  constructor() {
    this.ranHexCode = [];
    this.counter = 0;
    this.locked = false;
  }
  randomHex(close) {
    var array = []
    var hexcode = []
    for (var i = 0; hexcode.length < 6; i++) {
      this.counter ++
      array = hexCodeArray[getRandomIndex(hexCodeArray)]
      hexcode.push(array)
    }
    this.ranHexCode = `#${hexcode.join('')}`
  }
}

function uniqueId() {
  return Math.floor((Math.random() * 1000) + 1)
}
var palleteId;
paletteId = uniqueId()

var newColorArray = new Color

class Palette {
  constructor() {
    this.colorPalette =[]
    this.uniqueId = paletteId
  }
  accessColor(argu) {
    var testColorArray = new Color
    this.colorPalette = []
  for (var i = 0; i <= 4; i++) {
    testColorArray.randomHex(argu)
    this.colorPalette.push(testColorArray.ranHexCode)
  }
}
}
var loadPalette = new Palette;
var newPalette = new Palette
