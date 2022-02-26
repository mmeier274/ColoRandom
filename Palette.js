class Palette {
  constructor() {
    this.colorPalette =[]
    this.lockCheck = []
    this.uniqueId = Date.now()
  }

  accessColor() {
  for (var i = 0; i <= 4; i++) {
    var testColorArray = new Color
    testColorArray.randomHex()
    this.colorPalette.push(testColorArray)
    console.log(testColorArray)
  }
    console.log(this.colorPalette)
}
}
