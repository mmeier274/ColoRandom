var hexCodeArray = ['A','B','C','D','E','F','0','1',
'2','3','4','5','6','7','8','9']

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
    this.ranHexCode = `#${hexcode.join('')}`
  }
}

function uniqueId() {
  return Math.floor((Math.random() * 1000) + 1)
}
var palleteId;
paletteId = uniqueId()

var newColorArray = new ColorArray

class Palette {
  constructor() {
    this.colorPalette =[]
    this.uniqueId = paletteId
  }
  accessColor() {
  for (var i = 0; i <= 4; i++) {
    var newColorArray = new ColorArray
    newColorArray.randomHex()
    this.colorPalette.push(newColorArray.ranHexCode)
  }
}
}
var loadPalette = new Palette;
