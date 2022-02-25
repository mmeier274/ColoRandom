var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var color3 = document.querySelector('#color3');
var color4 = document.querySelector('#color4');
var color5 = document.querySelector('#color5');
var test = document.querySelector('.hex1');
var test2 = document.querySelector('.hex2');
var test3 = document.querySelector('.hex3');
var test4 = document.querySelector('.hex4');
var test5 = document.querySelector('.hex5');
var hello = document.querySelector('#unlock1')
var hik = document.querySelector('#unlock2')
var unlockBtn1 = document.querySelector('.unlock1');
var unlockBtn2 = document.querySelector('.unlock2');
var unlockBtn3 = document.querySelector('.unlock3');
var unlockBtn4 = document.querySelector('.unlock4');
var unlockBtn5 = document.querySelector('.unlock5');
var lockBtn1 = document.querySelector('.lock1');
var lockBtn2 = document.querySelector('.lock2');
var lockBtn3 = document.querySelector('.lock3');
var lockBtn4 = document.querySelector('.lock4');
var lockBtn5 = document.querySelector('.lock5');
var newPaletteBtn = document.querySelector('.new-pal-btn')

window.addEventListener('load',function() {
 testFunction(loadPalette)
 changeHex(loadPalette)
 background(loadPalette)
})

var itemInput = document.querySelector('.color-swatch')

itemInput.addEventListener('click', clickEvent);

emptyArray = []

function clickEvent(event) {
  mouseClick = event.target.className
  console.log(mouseClick)
}

box2Lock = [
  'lock2',
  'hex2',
  'color2'
]



// unlockBtn1.addEventListener('click', function() {
//   lock(lockBtn1, unlockBtn1)
// })
//
// lockBtn1.addEventListener('click', function() {
//   unlock(lockBtn1, unlockBtn1)
// })
//
// unlockBtn2.addEventListener('click', function() {
//   lock(lockBtn2, unlockBtn2)
// })
//
// lockBtn2.addEventListener('click', function() {
//   unlock(lockBtn2, unlockBtn2)
// })
//
// unlockBtn3.addEventListener('click', function() {
//   lock(lockBtn3, unlockBtn3)
// })
//
// lockBtn3.addEventListener('click', function() {
//   unlock(lockBtn3, unlockBtn3)
// })
//
// unlockBtn4.addEventListener('click', function() {
//   lock(lockBtn4, unlockBtn4)
// })
//
// lockBtn4.addEventListener('click', function() {
//   unlock(lockBtn4, unlockBtn4)
// })
//
// unlockBtn5.addEventListener('click', function() {
//   lock(lockBtn5, unlockBtn5)
// })
//
// lockBtn5.addEventListener('click', function() {
//   unlock(lockBtn5, unlockBtn5)
// })

function lock(lockElement, unlockElement) {
  if(lockElement.style.display === 'none'){
    lockElement.style.display = 'block';
    unlockElement.style.display = 'none'
  } else {
    lockElement.style.display = 'none';
  }
}

function unlock(lockElement, unlockElement) {
  if(unlockElement.style.display === 'none'){
    unlockElement.style.display = 'block';
    lockElement.style.display = 'none'
  } else {
    unlockElement.style.display = 'none';
  }
}

  // for (var i=0; i < unlockBtn.length; i++) {
  //   unlockBtn[i].addEventListener('click', function() {
  //     console.log(this.className)
  //     if (this.className[i] === 'unlock') {
  //       this.className[i].add('hidden')
  //     }
  //   })
  // }

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

function getRandomIndex(hexCodeArray) {
  return Math.floor(Math.random() * hexCodeArray.length);
}

function testFunction(element) {
element.accessColor()

}

function changeHex(element) {
  test.innerText = element.color1
  test2.innerText = element.color2
  test3.innerText = element.color3
  test4.innerText = element.color4
  test5.innerText = element.color5
}

function background(element) {
  color1.style.backgroundColor = element.color1
  color2.style.backgroundColor = element.color2
  color3.style.backgroundColor = element.color3
  color4.style.backgroundColor = element.color4
  color5.style.backgroundColor = element.color5
}
