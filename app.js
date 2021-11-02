const wrapper = document.querySelector('.wrapper');

const showTime = () => {
    let date = new Date();
    let hours = date.getHours(); 
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);
    hours = from24to12(hours);

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    wrapper.innerHTML= `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}
// Add AM or PM
const convertFormat = time => {
    let format = 'AM';
    if(time >= 12){
        format = 'PM';
    }
    return format;
}
// Convert from 20hrs to 12hrs clock
const from24to12 = time => {
    if(time > 12){
        time = time - 12;
    }
    if(time === 0){
        time = 12;
    }
    return time;
}
// Add a zero infront of the count less than 10
const addZero = time => {
    if(time < 10){
        time = `0${time}`;
    }
    return time;
}

showTime();
setInterval(showTime,1000);