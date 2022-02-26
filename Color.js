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
