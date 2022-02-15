// 1.
function colorChange(elementId) {
    const sectionTitle = document.getElementById(elementId + '-section-title');
    sectionTitle.style.color = 'rgba(245, 40, 145, 0.8)';
}
colorChange('players');
colorChange('blogs');
// 2.
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(184, 132, 159, 0.8)';
}
// 3.
document.getElementById('add-player').addEventListener('click', function () {
    const listItem = document.createElement('li');
    listItem.innerText = 'Player';
    const playersList = document.getElementById('players-list');
    playersList.appendChild(listItem);
})
// 4 & 5
document.getElementById('increas-btn').addEventListener('click', function () {
    const inputNum = document.getElementById('input-num');
    const inputValue = inputNum.value;
    const num = parseInt(inputValue) + 1;
    inputNum.value = num;
    if (num == 5) {
        document.getElementById('increas-btn').setAttribute('disabled', true);
    }
})