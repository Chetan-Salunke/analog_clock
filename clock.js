setInterval(() => {
    clock = new Date();
    hr = clock.getHours();
    min = clock.getMinutes();
    sec = clock.getSeconds();

    hr_rotation = 30*hr+min/2;
    min_rotation = 6*min;
    sec_rotation = 6*sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    
},1000);