document.addEventListener('DOMContentLoaded', function() {
    // Get the current time when the page is loaded
    let startTime = new Date();

    // Update the time spent every second
    setInterval(function() {
        let currentTime = new Date();
        let timeDifference = currentTime - startTime;
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        document.getElementById('time-spent').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
});
