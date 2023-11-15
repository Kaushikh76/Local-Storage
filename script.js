function saveData() {
    // Get form data
    const name = document.getElementById('name').value;

    // Create an object with user data
    const userData = {
        name: name,
        // Add other fields as needed
    };

    // Convert the object to a JSON string
    const jsonData = JSON.stringify(userData);

    // Save data to local storage
    localStorage.setItem('userData', jsonData);

    alert('Data saved to local storage!');
}
