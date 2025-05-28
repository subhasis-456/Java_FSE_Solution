const events = [
    { name: 'Music Night', category: 'music', seats: 10 },
    { name: 'Art Workshop', category: 'art', seats: 5 },
    { name: 'Cleanup', category: 'community', seats: 8 }
];

// Default parameters and destructuring
function eventSummary({ name, category, seats }, prefix = 'Event:') {
    return `${prefix} ${name} (${category}) - Seats: ${seats}`;
}

// Spread operator to clone event list
const clonedEvents = [...events];

let output = '';
output += '<b>Event Summaries:</b><br>';
clonedEvents.forEach(e => {
    output += eventSummary(e) + '<br>';
});

output += '<br><b>Destructured Example:</b><br>';
const [firstEvent] = events;
const { name, category, seats } = firstEvent;
output += `Name: ${name}, Category: ${category}, Seats: ${seats}`;

document.getElementById('modernResults').innerHTML = output; 