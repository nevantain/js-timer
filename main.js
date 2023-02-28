const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.milliseconds');

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lapBtn');
const btns = document.querySelectorAll('.manage_btn');
const closeBtn = document.querySelector('.close__msg');

const lapsElement = document.querySelector('.laps');
const msgElement = document.querySelector('.messages');
const titleMsgElement = document.querySelector('.title__msg');
const textMsgElement = document.querySelector('.text__msg');
const lapTitleElement = document.querySelector('.laps__tilte');



let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    i = 0,
    interval;

function startTimer() {
    pauseBtn.classList.add('active');
    lapBtn.classList.add('active');
    resetBtn.classList.remove('active');

    milliseconds++;
    milliseconds < 10 ? millisecondsElement.textContent = '0' + milliseconds : millisecondsElement.textContent = milliseconds;
    if (milliseconds > 98) {
        seconds++;
        seconds < 10 ? secondsElement.textContent = '0' + seconds : secondsElement.textContent = seconds;
        milliseconds = 0;
    }

    if (seconds > 59) {
        minutes++;
        minutes < 10 ? minutesElement.textContent = '0' + minutes : minutesElement.textContent = minutes;
        seconds = 0;
    }

    if (minutes > 59) {
        hours++;
        hours < 10 ? hoursElement.textContent = '0' + hours : hoursElement.textContent = hours;
        minutes = 0;
    }

    if (hours > 23) {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(interval);
    lapBtn.classList.remove('active');
    resetBtn.classList.add('active');
    startBtn.classList.add('active');
    pauseBtn.classList.remove('active');
}

function resetTimer() {
    pauseBtn.classList.remove('active');
    lapBtn.classList.remove('active');
    resetBtn.classList.remove('active');
    startBtn.classList.add('active');

    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    i = 0;

    msgElement.style.display = 'none';

    millisecondsElement.textContent = '00';
    secondsElement.textContent = '00';
    minutesElement.textContent = '00';
    hoursElement.textContent = '00';
    lapsElement.innerHTML = '<div class="laps__tilte">Results</div>';
}

function lapTimer() {
    i++
    if (i > 10) {
        titleMsgElement.textContent = 'Достигнуто максимальное количество кругов!';
        textMsgElement.textContent = 'Достигнуто максимальное количество кругов!';
        msgElement.style.display = 'block';
    } else {
        let lapTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`;
        let lap = document.createElement('div');
        let lapTextTime = document.createElement('span');
        let lapId = document.createElement('span');

        lapId.textContent = i < 10 ? '0' + i : i;
        lapTextTime.textContent = lapTime;

        lapTitleElement.style.marginBottom = '10px';

        lapsElement.append(lap);
        lap.classList.add('lap');
        lapTextTime.classList.add('f30');
        lapId.classList.add('f30');
        
        lap.append(lapId);
        lap.append(lapTextTime);
    }
}

startBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});
pauseBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
closeBtn.addEventListener('click', () => { msgElement.style.display = 'none'; })