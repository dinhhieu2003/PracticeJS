// Math.random() will random in range [0,1) and it less than 1

// random in range(1, 6) with integer number 
// let random = Math.floor(Math.random() * 6) + 1 

// random in range(min, max)
// [0,1) * (max-min) = [0, max-min) ; [0, max-min) + min = [min, max); if u want number can equal max;
// u need to *(max-min+1)

// const min = 1;
// const max = 6;
// let random = Math.floor(Math.random() * (max-min+1)) + min;

// console.log(random);


Math.randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('roll').onclick = function () {
    let random1 = Math.randomInt(1, 6);
    let random2 = Math.randomInt(1, 6);
    let random3 = Math.randomInt(1, 6);

    document.getElementById('label1').textContent = random1;
    document.getElementById('label2').textContent = random2;
    document.getElementById('label3').textContent = random3;
}