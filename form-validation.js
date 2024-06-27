document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
        alert("Invalid name format. Only letters and spaces are allowed.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    alert("Form submitted successfully");
});


