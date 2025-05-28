const eventList = document.getElementById('eventList');
const spinner = document.getElementById('spinner');
const MOCK_API = 'https://jsonplaceholder.typicode.com/posts?_limit=5'; // Mock endpoint

// Helper to render events
function renderEvents(events) {
    eventList.innerHTML = '';
    events.forEach(ev => {
        const div = document.createElement('div');
        div.style.border = '1px solid #007BFF';
        div.style.borderRadius = '0.5rem';
        div.style.padding = '1rem';
        div.style.margin = '1rem 0';
        div.innerHTML = `<strong>${ev.title}</strong><br>${ev.body || ''}`;
        eventList.appendChild(div);
    });
}

// 1. Fetch with .then()/.catch()
function fetchEventsWithThen() {
    spinner.style.display = 'block';
    fetch(MOCK_API)
        .then(res => {
            if (!res.ok) throw new Error('Network error');
            return res.json();
        })
        .then(data => {
            renderEvents(data);
            spinner.style.display = 'none';
        })
        .catch(err => {
            eventList.textContent = 'Error: ' + err.message;
            spinner.style.display = 'none';
        });
}

// 2. Fetch with async/await
async function fetchEventsAsync() {
    spinner.style.display = 'block';
    try {
        const res = await fetch(MOCK_API);
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        renderEvents(data);
    } catch (err) {
        eventList.textContent = 'Error: ' + err.message;
    } finally {
        spinner.style.display = 'none';
    }
}

// Demo: call both (comment/uncomment as needed)
// fetchEventsWithThen();
fetchEventsAsync(); 