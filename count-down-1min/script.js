const startingMinute = 0.5;
let time = 0.5 * 60;

let timer = setInterval(countDown, 1000);

function countDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
    --time;

    if(time < 0) {
        clearInterval(timer);
        console.log(time);
    }
}

