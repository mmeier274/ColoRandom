class Palette {
  constructor() {
    this.colorPalette =[]
    this.uniqueId = Date.now()
  }
  accessColor() {
    var testColorArray = new Color
    this.colorPalette = []
  for (var i = 0; i <= 4; i++) {
    testColorArray.randomHex()
    this.colorPalette.push(testColorArray.ranHexCode)
  }
}
}
