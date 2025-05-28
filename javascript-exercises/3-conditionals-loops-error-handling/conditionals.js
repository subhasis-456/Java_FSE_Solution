const events = [
    { name: 'Music Night', date: '2024-06-15', seats: 10 },
    { name: 'Art Workshop', date: '2024-05-01', seats: 0 },
    { name: 'Community Cleanup', date: '2024-07-01', seats: 5 },
    { name: 'Book Fair', date: '2024-04-10', seats: 3 }
];

const today = new Date('2024-06-01'); // Simulate current date
const eventList = document.getElementById('eventList');
const errorMsg = document.getElementById('errorMsg');

try {
    events.forEach(event => {
        const eventDate = new Date(event.date);
        if (event.seats > 0 && eventDate > today) {
            const li = document.createElement('li');
            li.textContent = `${event.name} (${event.date}) - Seats: ${event.seats}`;
            eventList.appendChild(li);
        }
    });
    if (!eventList.hasChildNodes()) {
        throw new Error('No upcoming events with available seats.');
    }
} catch (err) {
    errorMsg.textContent = err.message;
} 