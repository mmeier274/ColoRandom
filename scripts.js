var hexCodeArray = ['A','B','C','D','E','F','0','1',
'2','3','4','5','6','7','8','9']

var newCodeArray = []

function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}

function pushCode() {
  for (var i = 0; i <= 6; i++) {
    newCodeArray.push(getRandomIndex)
  }
}
