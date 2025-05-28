// Event array
const events = [
    { name: 'Music Night', category: 'music', seats: 10 },
    { name: 'Art Workshop', category: 'art', seats: 5 },
    { name: 'Cleanup', category: 'community', seats: 8 }
];

function addEvent(name, category, seats) {
    events.push({ name, category, seats });
}

function registerUser(eventName) {
    const event = events.find(e => e.name === eventName);
    if (event && event.seats > 0) {
        event.seats--;
        return `Registered for ${eventName}`;
    } else {
        return `Registration failed for ${eventName}`;
    }
}

function filterEventsByCategory(category, callback) {
    return events.filter(e => e.category === category).map(callback);
}

// Closure to track total registrations for a category
function createCategoryCounter(category) {
    let count = 0;
    return function() {
        count++;
        return `Total registrations for ${category}: ${count}`;
    };
}

// Usage
addEvent('Book Fair', 'community', 12);
const regMusic = createCategoryCounter('music');
const regArt = createCategoryCounter('art');

let output = '';
output += registerUser('Music Night') + '<br>';
output += regMusic() + '<br>';
output += registerUser('Art Workshop') + '<br>';
output += regArt() + '<br>';

const musicCards = filterEventsByCategory('music', e => `${e.name} (${e.seats} seats)`);
output += '<br>Music Events: ' + musicCards.join(', ');

document.getElementById('eventOps').innerHTML = output; 