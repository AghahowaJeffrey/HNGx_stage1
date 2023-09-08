 // Function to set the current day
 function setCurrentDay() {
    let currentDayElement = document.getElementById('current_day');
    let currentDate = new Date();
    let currentDayOfWeek = currentDate.getDay();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = daysOfWeek[currentDayOfWeek];
    currentDayElement.textContent = `Day of the week: ${day}`;
}

function setUtcTime() {
    let utcTime = document.getElementById('utc_time');
    var currentUTCTimeISOString = new Date().toISOString();
    utcTime.textContent = `UTC Time: ${currentUTCTimeISOString}`;
}

// Call the function when the document is ready
document.addEventListener("DOMContentLoaded", setCurrentDay);
document.addEventListener("DOMContentLoaded", setUtcTime);