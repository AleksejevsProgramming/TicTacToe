var ceil = document.getElementsByClassName('game-item'),
    reset =  document.getElementById('reset-game'),
    msg = document.getElementById('message'),
    player = 'X',
    stepCount = 0,
    winComb = [
      [1,2,3],
      [1,4,7],
      [1,5,9],
      [2,5,8],
      [3,6,9],
      [3,5,7],
      [4,5,6],
      [7,8,9]
    ],
    dataX = [],
    dataO = [];

for (var i = 0; i < ceil.length; i++) {
  ceil[i].addEventListener('click',currentStep);
}

function currentStep() {
  var num = +this.getAttribute('data-ceil');
  if (!this.textContent) {
    this.innerText = player;
        if (player === 'X') {
          dataX.push(num);
        } else {
          dataO.push(num);
        }
        if ((dataX.length > 2 || dataO.length > 2) && (checkWin(dataO, num) || checkWin(dataX, num))) {
          for (var i = 0; i < ceil.length; i++) {
            ceil[i].removeEventListener('click',currentStep);
          }
          return (msg.innerText = 'Player ' + player + ' win!');
        }
    changePlayer();
    stepCount++;
    if (stepCount === 9) {
      msg.innerText = 'DRAW';
    } else {
      msg.innerText = 'Turn to gamer ' + ' ' + player;
    }
  }
}

function changePlayer() {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
}

function resetGame() {
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].innerText = '';
  }
  dataX = [];
  dataO = [];
  player = 'X';
  stepCount = 0;
  msg.innerText = 'Turn to gamer ' + ' ' + player;
  for (var j = 0; j < ceil.length; j++) {
    ceil[j].addEventListener('click',currentStep);
  }
}

function checkWin(arr, number) {
  for (var i = 0; i < winComb.length; i++) {
    var someWinArr = winComb[i];
    var count = 0;
    if (someWinArr.indexOf(number) !== -1) {
      for (var j = 0; j < winComb.length; j++) {
        if (arr.indexOf(someWinArr[j]) !== -1) {
          count++;
          if (count === 3) {
            return true;
          }
        }
      }
      count = 0;
    }
  }


}
