const form = document.getElementById('ajaxForm');
const result = document.getElementById('ajaxResult');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    result.textContent = 'Submitting...';
    const data = {
        name: form.elements.name.value,
        email: form.elements.email.value
    };
    // Simulate delayed response
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) {
                result.textContent = 'Registration successful!';
            } else {
                result.textContent = 'Registration failed.';
            }
        })
        .catch(() => {
            result.textContent = 'Network error.';
        });
    }, 1200);
}); 