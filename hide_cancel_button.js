// Function to hide the "Request Cancellation" button
function hideCancelButton() {
    let cancelButton = document.querySelector('[data-testid="CancelReservation-button-delete"]');
    if (cancelButton) {
        cancelButton.style.display = "none"; // Hide the button
        console.log("Request Cancellation button hidden.");
    }
}

// Run once when the page loads
document.addEventListener("DOMContentLoaded", hideCancelButton);

// Keep checking every 500ms in case the button reappears
let interval = setInterval(() => {
    let button = document.querySelector('[data-testid="CancelReservation-button-delete"]');
    if (button) {
        button.style.display = "none"; // Hide it
        console.log("Request Cancellation button hidden.");
    }
}, 500);
