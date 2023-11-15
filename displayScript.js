// Retrieve data from local storage
const storedData = localStorage.getItem('userData');

// Check if data exists
if (storedData) {
    // Parse JSON string to object
    const userData = JSON.parse(storedData);

    // Display data on the page
    const userDataDisplay = document.getElementById('userDataDisplay');
    userDataDisplay.innerHTML = `<p>Name: ${userData.name}</p>`;
    // Add other fields as needed
} else {
    alert('No data found in local storage.');
}
