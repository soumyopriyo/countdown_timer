const monthsEl=document.getElementById('months');
const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');

newYears="1 Jan 2023";

function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate = new Date(); 

    const totalseconds = (newYearsDate - currentDate)/1000;

    const months = Math.floor((totalseconds/3600/24)/30);
    const days = Math.floor(totalseconds/ 3600/24);
    const hours = Math.floor(totalseconds/ 3600)% 24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds= Math.floor(totalseconds) % 60;

    console.log(months,days,hours,minutes,seconds);

    monthsEl.innerHTML= formatTime(months);
    daysEl.innerHTML= formatTime(days);
    hoursEl.innerHTML= formatTime(hours);
    minutesEl.innerHTML= formatTime(minutes);
    secondsEl.innerHTML= formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown,1000);