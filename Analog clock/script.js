let hr = document.getElementById('hour');
let min = document.getElementById('min');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let Hrotation = 30*hh + mm/2;
    let Mrotation =6*mm;
    let Srotation = 6*ss;

    hr.style.transform = `rotate(${Hrotation}deg)`;
    min.style.transform = `rotate(${Mrotation}deg)`;
    sec.style.transform = `rotate(${Srotation}deg)`;
}

setInterval(displayTime, 1000);