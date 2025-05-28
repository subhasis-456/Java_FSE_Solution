const events = [
    { name: 'Music Night', category: 'music', seats: 10 },
    { name: 'Art Workshop', category: 'art', seats: 5 },
    { name: 'Cleanup', category: 'community', seats: 8 }
];

let filteredEvents = [...events];

const container = document.getElementById('eventContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function renderEvents() {
    container.innerHTML = '';
    filteredEvents.forEach((event, idx) => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `<span>${event.name} (${event.category}) - Seats: <span class="seats">${event.seats}</span></span>`;
        const btn = document.createElement('button');
        btn.textContent = 'Register';
        btn.onclick = function() {
            if (event.seats > 0) {
                event.seats--;
                renderEvents();
            } else {
                alert('No seats available!');
            }
        };
        card.appendChild(btn);
        container.appendChild(card);
    });
}

function filterEvents() {
    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    filteredEvents = events.filter(e => {
        const matchesName = e.name.toLowerCase().includes(search);
        const matchesCat = !category || e.category === category;
        return matchesName && matchesCat;
    });
    renderEvents();
}

searchInput.addEventListener('keydown', filterEvents);
categoryFilter.addEventListener('change', filterEvents);

renderEvents(); 