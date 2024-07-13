let number1, number2;

document.getElementById('submit').onclick = function () {
    number1 = parseInt(document.getElementById('number1').value);
    number2 = parseInt(document.getElementById('number2').value);
    let sum = number1 + number2;
    document.getElementById('result').textContent = sum;
}