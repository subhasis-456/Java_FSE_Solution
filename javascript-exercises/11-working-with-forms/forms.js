const form = document.getElementById('regForm');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const eventError = document.getElementById('eventError');
const formResult = document.getElementById('formResult');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Clear errors
    nameError.textContent = '';
    emailError.textContent = '';
    eventError.textContent = '';
    formResult.textContent = '';

    const { name, email, event: eventSel } = form.elements;
    let valid = true;

    if (!name.value.trim()) {
        nameError.textContent = 'Name is required.';
        valid = false;
    }
    if (!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        emailError.textContent = 'Valid email is required.';
        valid = false;
    }
    if (!eventSel.value) {
        eventError.textContent = 'Please select an event.';
        valid = false;
    }

    if (valid) {
        formResult.textContent = `Registered: ${name.value} (${email.value}) for ${eventSel.options[eventSel.selectedIndex].text}`;
        form.reset();
    }
}); 