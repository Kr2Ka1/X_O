let step = '';
let winner = '';

let counter = 0;

const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cell = document.querySelectorAll('.cell');
const whoGo = document.querySelector('#whoGo');
const whoWin = document.querySelector('#whoWin');
const board = document.getElementById('board');
const newGameBtn = document.querySelector('#newGame');
const info = document.querySelector('#info');
const win = document.querySelector('.win');



const who = () => {
    if (step == 'cross') {
        step = 'circle';
        whoGo.innerText = 'Nuliukai';
    } else {
        step = 'cross';
        whoGo.innerText = 'Kryžiukai';
    }
    counter++;
}
who();

cell.forEach((item) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('circle') && !item.classList.contains('cross')) {
            item.classList.add(step);

            if (step == 'cross') {
                item.innerText = 'x';
            } else if (step == 'circle') {
                item.innerText = 'o';
            }

            who();
            crossWin();
            circlesWin();
            noWhin();
        }
    })
});


const crossWin = () => {
    for (let i = 0; i < winComb.length; i++) {
        if (
            cell[winComb[i][0]].classList.contains('cross') &&
            cell[winComb[i][1]].classList.contains('cross') &&
            cell[winComb[i][2]].classList.contains('cross')
        ) {
            cell[winComb[i][0]].classList.add('winColor');
            cell[winComb[i][1]].classList.add('winColor');
            cell[winComb[i][2]].classList.add('winColor');

            winner = 'Kryžiukai';
            endGame(winner);
            return true;
        }
    }
    return false;
};


const circlesWin = () => {
    for (let i = 0; i < winComb.length; i++) {
        if (
            cell[winComb[i][0]].classList.contains('circle') &&
            cell[winComb[i][1]].classList.contains('circle') &&
            cell[winComb[i][2]].classList.contains('circle')
        ) {
            cell[winComb[i][0]].classList.add('winColor');
            cell[winComb[i][1]].classList.add('winColor');
            cell[winComb[i][2]].classList.add('winColor');

            winner = 'Nuliukai';
            endGame(winner);

            return true;
        }
    }
    return false;
};

const noWhin = () => {
    if (!crossWin() && !circlesWin() && counter > 9) {
        winner = 'Lygiosios';
        endGame(winner);
    }
}

const endGame = (winner) => {
    board.style.pointerEvents = 'none';
    info.style.display = 'none';
    win.style.display = 'block';
    whoWin.innerText = winner;

};

newGameBtn.addEventListener('click', () => {
    document.location.reload();
})