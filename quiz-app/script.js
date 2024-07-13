const questions = [
    {
        question: "Hình dưới đây là xúc xắc bao nhiêu điểm",
        media: {
            type: "image",
            src: "image/Dice-1.png"
        },
        answers: {
            a: "0 điểm",
            b: "2 điểm",
            c: "1 điểm",
            d: "10 điểm"
        },
        correctAnswer: "c"
    },
    {
        question: "Audio dưới đây là bài hát nào",
        media: {
            type: "audio",
            src: "https://example.com/mars.mp3"
        },
        answers: {
            a: "Chạm khẽ tim anh",
            b: "Anh nè",
            c: "Iu em nhìu",
            d: "Hello Bae"
        },
        correctAnswer: "b"
    },
    {
        question: "Trong video dưới đây có bao nhiêu con chim",
        media: {
            type: "video",
            src: "https://example.com/mockingbird.mp4"
        },
        answers: {
            a: "Làm gì có con nào",
            b: "2 con",
            c: "Chắc là khoảng 100 con",
            d: "Tôi không nhìn thấy gì"
        },
        correctAnswer: "a"
    }
];

let score = 0;
let time = 60;
let countdown = null;
let startTime = 0;
let endTime = 0;
let timeTaken = 0;

const timerElement = document.getElementById('timer');
const questionsElement = document.getElementById('questions');
const submitBtn = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

function loadQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;

        if (q.media.type === "image") {
            const img = document.createElement('img');
            img.src = q.media.src;
            img.alt = q.question;
            img.style.maxWidth = "100%";
            questionDiv.appendChild(img);
        } else if (q.media.type === "audio") {
            const audio = document.createElement('audio');
            audio.src = q.media.src;
            audio.controls = true;
            questionDiv.appendChild(audio);
        } else if (q.media.type === "video") {
            const video = document.createElement('video');
            video.src = q.media.src;
            video.controls = true;
            video.style.maxWidth = "100%";
            questionDiv.appendChild(video);
        }

        const answersList = document.createElement('ul');
        answersList.classList.add('answers');
        for (const [key, value] of Object.entries(q.answers)) {
            const li = document.createElement('li');
            li.id = `answer${index}-${key}`;
            li.innerHTML = `<input type="radio" name="question${index}" value="${key}">${value}`;
            answersList.appendChild(li);
        }
        questionDiv.appendChild(answersList);
        questionsElement.appendChild(questionDiv);
    });
}

function startTimer() {
    startTime = Date.now();
    countdown = setInterval(() => {
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        timerElement.textContent = `Time: ${minutes}:${seconds}`;

        if (time <= 0) {
            clearInterval(countdown);
            showScore();
        }
    }, 1000);
}

function showScore() {
    const formData = new FormData(document.getElementById('quiz-form'));
    questions.forEach((q, index) => {
        const selectedAnswer = formData.get(`question${index}`);
        let idAnswer = `answer${index}-${selectedAnswer}`;
        let idCorrectAnswer = `answer${index}-${q.correctAnswer}`;
        document.getElementById(idCorrectAnswer).style.backgroundColor = "hsl(133, 100%, 60%)";
        if(selectedAnswer) {
            if (selectedAnswer === q.correctAnswer) {
                score++;
            } else if(selectedAnswer !== q.correctAnswer){
                document.getElementById(idAnswer).style.backgroundColor = "hsl(355, 100%, 70%)";
            }
        }
        
    });
    resultElement.innerHTML = `<p>You scored ${score} out of ${questions.length}!</p> 
                                <p>Time taken: ${timeTaken}s</p>`;
}

function stopTimer() {
    endTime = Date.now();
    timeTaken = Math.floor((endTime - startTime)/1000);

    clearInterval(countdown);
}

submitBtn.addEventListener('click', () => {
    stopTimer();
    showScore();
});

loadQuestions();
startTimer();