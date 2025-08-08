let timerInterval;
let seconds = 0;
function startGame() {
    clearInterval(timerInterval);
    seconds = 0;
    document.getElementById('timer').textContent = '00:00';
    timerInterval = setInterval(updateTimer, 1000);
    generateBoard();
}
function updateTimer() {
    seconds++;
    const m = String(Math.floor(seconds / 60)).padStart(2,'0');
    const s = String(seconds % 60).padStart(2,'0');
    document.getElementById('timer').textContent = m + ':' + s;
}
function generateBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 0; i < 81; i++) {
        const input = document.createElement('input');
        input.className = 'cell';
        input.maxLength = 1;
        board.appendChild(input);
    }
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js');
    });
}
