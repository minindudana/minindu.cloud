function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === 'admin' && password === 'Minindu@#2005') {

        // Redirect to a new webpage
        window.location.href = "https://minindu.cloud/";

        // Perform additional actions, such as redirecting to a new page
    } else {
        alert('Invalid username or password');
        // Clear the form fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}
