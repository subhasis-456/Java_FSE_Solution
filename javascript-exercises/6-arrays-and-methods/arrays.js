let events = [
    { name: 'Music Night', type: 'music' },
    { name: 'Art Workshop', type: 'art' },
    { name: 'Cleanup', type: 'community' }
];

events.push({ name: 'Workshop on Baking', type: 'music' });
events.push({ name: 'Book Fair', type: 'community' });

const musicEvents = events.filter(e => e.type === 'music');
const musicNames = musicEvents.map(e => e.name);

const cards = events.map(e => `<div class="card">${e.name} (${e.type})</div>`);

let output = '';
output += `<b>All Events:</b> ${events.length}<br>`;
output += `<b>Music Events:</b> ${musicNames.join(', ')}<br><br>`;
output += `<b>Event Cards:</b><br>${cards.join('')}`;

document.getElementById('arrayResults').innerHTML = output; 