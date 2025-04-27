// Function to update Date and Time every second
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Example format: 27/04/2025, 10:32:55 AM
    document.getElementById('datetime').innerHTML = dateTimeString;
}

// Call it immediately when page loads
updateDateTime();

// Then keep updating every second
setInterval(updateDateTime, 1000);

// Function to toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    var button = document.getElementById('darkModeButton');
    
    if (document.body.classList.contains('dark-mode')) {
        button.innerHTML = "☀️ Light Mode"; // Show Light mode option
    } else {
        button.innerHTML = "🌙 Dark Mode"; // Show Dark mode option
    }
}
