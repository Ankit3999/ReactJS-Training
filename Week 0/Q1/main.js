function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    let greeting = "";
    if (hours >= 5 && hours < 12) {
        greeting = "Good Morning!";
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById('greeting').textContent = greeting;

    requestAnimationFrame(updateClock);
}

updateClock();
