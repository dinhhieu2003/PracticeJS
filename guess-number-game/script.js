const minNum = 50;
const maxNum = 100;

const goalNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(goalNum);

document.getElementById('range').textContent = `A goal number is in range ${minNum} - ${maxNum}`;
let result = document.getElementById('result');

document.getElementById('submit').onclick = function () {
    let clientNum = Number(document.getElementById('number').value);
    if(clientNum == goalNum) {
        result.textContent = 'Correct';
    }
    if(clientNum < goalNum) {
        result.textContent = 'Goal number is greater than you guess';
    }
    if(clientNum > goalNum) {
        result.textContent = 'Goal number less than you guess';
    }
}