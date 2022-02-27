class Palette {
  constructor() {
    this.colorPalette =[]
    this.uniqueId = Date.now()
  }

  accessColor() {
    if (!this.colorPalette[0]) {
      for (var i = 0; i <= 4; i++) {
        this.colorPalette.push(new Color)
      }
    }
      for (var i = 0; i <= 4; i++) {
        if (this.colorPalette[i].locked === false) {
        this.colorPalette.splice(i,1,new Color)
      }
    }
  }
}
