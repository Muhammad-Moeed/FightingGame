const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');

let player1Position = 0;
let player2Position = 720;

const maxPositionPlayer1 = window.innerWidth - player1.offsetWidth;
const maxPositionPlayer2 = window.innerWidth - player2.offsetWidth;

// ******************Buttton Instruction Alerts ***************

player1Btn.addEventListener('click', function () {
    Swal.fire({
        title: 'Player 1 Controls',
        text: 'Left Arrow: Move left\nRight Arrow: Move right\nUp/Down Arrow: Fight',
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#3085d6',
        background: '#fff',
        allowOutsideClick: false,
        allowEscapeKey: false
    });
});

player2Btn.addEventListener('click', function () {
    Swal.fire({
        title: 'Player 2 Controls',
        text: "'A': Move left\n'D': Move right\n'W'/'S': Fight",
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#3085d6',
        background: '#fff',
        allowOutsideClick: false,
        allowEscapeKey: false
    });
});

// *****************Player2****************

document.addEventListener('keydown', function (event) {
    const key = event.keyCode;

    if (key === 37) {
        player1.src = './assets/player1/start.gif';
        player1.alt = 'Player 1 moving left, animated GIF';

        player1Position -= 10;
        if (player1Position < 0) player1Position = 0;
        player1.style.left = player1Position + 'px';

        player1.style.height = '300px';
        player1.style.width = 'auto';
    } else if (key === 39) {
        player1.src = './assets/player1/walk.gif';
        player1.alt = 'Player 1 moving right, animated GIF';

        player1Position += 10;
        if (player1Position > maxPositionPlayer1) player1Position = maxPositionPlayer1;
        player1.style.left = player1Position + 'px';

        player1.style.height = '300px';
        player1.style.width = 'auto';
    } else if (key === 38 || key === 40) {
        player1.src = './assets/player1/fight.gif';
        player1.alt = 'Player 1 fighting, animated GIF';

        player1.style.height = '600px';
        player1.style.width = 'auto';
    }

    //   ****************Player 2 ********************

    if (key === 65) {
        player2.src = './assets/player2/walk.gif';
        player2.alt = 'Player 2 moving left, animated GIF';

        player2Position -= 10;
        if (player2Position < 0) player2Position = 0;
        player2.style.left = player2Position + 'px';

        player2.style.height = '300px';
        player2.style.width = 'auto';
    } else if (key === 68) {
        player2.src = './assets/player2/walk.gif';
        player2.alt = 'Player 2 moving right, animated GIF';

        player2Position += 10;
        if (player2Position > maxPositionPlayer2) player2Position = maxPositionPlayer2;
        player2.style.left = player2Position + 'px';

        player2.style.height = '300px';
        player2.style.width = 'auto';
    } else if (key === 87 || key === 83) {
        player2.src = './assets/player2/fight.gif';
        player2.alt = 'Player 2 fighting, animated GIF';

        player2.style.height = '300px';
        player2.style.width = 'auto';
    }
});

// **************Start Button Home ****************

document.getElementById('startBtn').addEventListener('click', function () {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'flex';
    document.body.style.backgroundImage = 'url(./assets/bg.gif)';
});
