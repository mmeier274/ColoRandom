class Color {
  constructor() {
    this.ranHexCode = [];
    this.locked = false;
  }
  randomHex(close) {
    var array = []
    var hexcode = []
    for (var i = 0; i < 6; i++) {
      array = hexCodeArray[getRandomIndex(hexCodeArray)]
      hexcode.push(array)
    }
    this.ranHexCode = `#${hexcode.join('')}`
  }
}
