
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    let isValid = true;

    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    if (nameValue.trim() === "" || nameValue.startsWith(" ")) {
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('is-invalid');
    }

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(emailValue.trim()) || emailValue.startsWith(" ")) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('is-invalid');
    }

    const messageInput = document.getElementById('message');
    const messageValue = messageInput.value;
    if (messageValue.trim() === "" || messageValue.startsWith(" ")) {
        messageInput.classList.add('is-invalid');
        isValid = false;
    } else {
        messageInput.classList.remove('is-invalid');
    }

    if (isValid) {
        alert("Form submitted successfully!");
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});

