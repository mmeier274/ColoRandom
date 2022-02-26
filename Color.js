class Color {
  constructor() {
    this.ranHexCode = this.randomHex();
    this.locked = false;
  }
  randomHex(close) {
    var array = []
    var hexCodeArray = ['A','B','C','D','E','F','0','1',
    '2','3','4','5','6','7','8','9']
    var hexcode = []
    for (var i = 0; i < 6; i++) {
      array = hexCodeArray[getRandomIndex(hexCodeArray)]
      hexcode.push(array)
    }
    var test = `#${hexcode.join('')}`
    return test
  }
}
