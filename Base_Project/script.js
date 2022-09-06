const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYear = '1 jan 2023';
function countDown() {
    const newYearDate = new Date(newYear);
    const curentDate = new Date();
    const totalSecond = (newYearDate-curentDate)/1000;
    const days = Math.floor(totalSecond/3600)/24;
    const hours = Math.floor(totalSecond/3600)%24;
    const mins = Math.floor(totalSecond/60)%60;
    const seconds = Math.floor(totalSecond)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
    document.getElementById("demo").innerHTML = "My First JavaScript";
}
//initial call
countDown();

setInterval(countDown,1000);

