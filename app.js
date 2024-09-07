function clock(){
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let periods = document.getElementById("periods");

    // these are inbult functions of js for time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";

    if( h > 12){
        h = h - 12; //mean if h = 13 then 13-12 = 1 
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    periods.innerHTML = ampm;

};
setInterval(clock,1000); //1000 = 1s (refresh in per 1 second)
clock();