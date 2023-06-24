const hours   =   document.getElementById ('hours');
const minutes =   document.getElementById ('minutes');
const seconds =   document.getElementById ('seconds');

const clock = setInterval(function time (){
    let dataToday = new Date();
    let hr = dataToday.getHours();
    let min = dataToday.getMinutes();
    let sec = dataToday.getSeconds();

    if (hr <= 9) hr = '0' + hr;
    if (min <= 9) min = '0' + min;
    if (sec <= 9) sec = '0' + sec;

    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

})