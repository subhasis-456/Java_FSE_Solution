$(document).ready(function() {
    $('#registerBtn').click(function() {
        alert('Registered for Music Night!');
    });
    $('.fadeBtn').click(function() {
        $(this).closest('.event-card').fadeOut();
    });
    // .fadeIn() example: show card1 if hidden
    // $('#card1').fadeIn();
    // Frameworks like React/Vue: Enable reusable, stateful UI components.
}); 