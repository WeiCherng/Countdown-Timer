const days = document.getElementById('day')
const hours = document.getElementById('hour')
const mins = document.getElementById('min')
const secs = document.getElementById('sec')

const newYear = '1 Jan 2024';

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const timeLeft = (newYearDate - currentDate) /1000; 
    const day = Math.floor( timeLeft / 3600 / 24);
    const hour = Math.floor( timeLeft / 3600 ) % 24;
    const min = Math.floor( timeLeft / 60 ) % 60;
    const sec = Math.floor( timeLeft ) % 60;
    // console.log(day , hour , min , sec)

    days.innerHTML = day;
    hours.innerHTML = checkValue(hour)
    mins.innerHTML = checkValue(min)
    secs.innerHTML = checkValue(sec)
}

function checkValue(num){
    if(num < 10){
        return `0${num}`
    }
    return num
}
countDown();


setInterval(countDown, 1000)
