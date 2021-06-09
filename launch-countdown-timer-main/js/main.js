let countdown;
let timeValues = document.querySelectorAll('.countdown .time-card .time');

function countdownTimer() {
    clearInterval(countdown);
    const now = Date.now();
    const kyuDayInMs = now + (777600 * 1000);

    // let withNow = kyuDayInMs - now;
    // let withoutNow = kyuDayInMs - Date.now();
    // countdown = setInterval(() => {
    //     const timeLeft = Math.round(withNow / 1000)
    //     console.log('1: ', timeLeft)
    // }, 1000) 
    // countdown = setInterval(() => {
    //     const timeLeft2 = Math.round(withoutNow / 1000)
    //     console.log('2: ', timeLeft2)
    // }, 1000)
    countdown = setInterval(() => {
        const timeLeft3 = Math.round((kyuDayInMs - Date.now()) / 1000);
        displayTimeLeft(timeLeft3)
    }, 1000)
}


function displayTimeLeft(launchingTime) {
    let days = Math.floor(launchingTime / 86400);
    let hours = Math.floor((launchingTime % 86400) / 3600);
    let minutes = Math.floor((launchingTime % 3600) / 60);
    let seconds = Math.floor((launchingTime % 60));

    const getTime = [days, hours, minutes, seconds];

    for (let i = 0; i < getTime.length; i++) {
        timeValues[i].textContent = getTime[i] < 10 ? '0' + getTime[i] : getTime[i];
    }
}

countdownTimer()