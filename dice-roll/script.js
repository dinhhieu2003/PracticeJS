const max = 6;
const min = 1;

let numOfDice = 0;

function roll () {
    numOfDice = Number(document.getElementById('numOfDice').value);

    let values = [];
    let images = [];
    for(let i=0; i<numOfDice; i++) {
        let value = Math.floor(Math.random() * (max - min + 1)) + min;
        values.push(value);
        images.push(`<img src="img/Dice-${value}.png" alt="Dice-${value}">`);
    }

    document.getElementById('diceResult').textContent = `Kết quả: ${values.join(', ')}`;
    document.getElementById('diceImages').innerHTML = images;
}

setInterval(roll, 100);