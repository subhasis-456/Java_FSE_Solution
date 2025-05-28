// Event constructor
function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}

Event.prototype.checkAvailability = function() {
    return this.seats > 0 ? 'Available' : 'Full';
};

const event1 = new Event('Music Night', '2024-06-15', 10);
const event2 = new Event('Art Workshop', '2024-06-20', 0);

let output = '';
output += `<b>${event1.name}</b> (${event1.date}) - ${event1.checkAvailability()}<br>`;
output += `<b>${event2.name}</b> (${event2.date}) - ${event2.checkAvailability()}<br><br>`;

output += '<u>Event 1 Properties:</u><br>';
Object.entries(event1).forEach(([key, value]) => {
    output += `${key}: ${value}<br>`;
});

document.getElementById('objectDetails').innerHTML = output; 