function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    ampm = (hr < 12) ? '<span>AM</span>' : '<span>PM</span>';
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min)
    sec = checkTime(sec);
    document.getElementById('clock').innerHTML = hr + ':' + min + ':' + sec + ' ' + ampm;

    let month = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = month[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.getElementById("date").innerHTML = date;

    let time = setTimeout(() => { startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
startTime()