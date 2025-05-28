const eventName = 'Music Night';
const eventDate = '2024-06-15';
let availableSeats = 50;

// Simulate registration
availableSeats--;

const details = `Event: ${eventName}<br>Date: ${eventDate}<br>Available Seats: ${availableSeats}`;
document.getElementById('eventDetails').innerHTML = details; 