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
    this.ranHexCode = hexcode.join('')
  }
}

var newColorArray = new ColorArray
var newColorArray2 = new ColorArray
var newColorArray3 = new ColorArray
var newColorArray4 = new ColorArray
var newColorArray5 = new ColorArray

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

var loadPalette = new Palette;
