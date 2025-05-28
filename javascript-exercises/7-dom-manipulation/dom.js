// Sample event data
const events = [
    { id: 1, name: 'Music Night', registered: false },
    { id: 2, name: 'Art Workshop', registered: false },
    { id: 3, name: 'Community Cleanup', registered: false }
];

const eventContainer = document.querySelector('#eventContainer');

function renderEvents() {
    eventContainer.innerHTML = '';
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';

        const title = document.createElement('span');
        title.textContent = event.name;

        const btn = document.createElement('button');
        btn.textContent = event.registered ? 'Cancel' : 'Register';
        btn.onclick = () => {
            event.registered = !event.registered;
            renderEvents();
        };

        card.appendChild(title);
        card.appendChild(btn);
        eventContainer.appendChild(card);
    });
}

// Initial render
renderEvents(); 