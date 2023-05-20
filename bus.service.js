// Initialize the bus with 24 slots and 15 bus stops
const bus = new Array(24).fill(new Array(15).fill(false));

// Function to book a seat
function bookSeat(slot, stop) {
  if (bus[slot][stop]) {
    console.log("This seat is already booked. Please choose another one.");
  } else {
    bus[slot][stop] = true;
    console.log(`Seat booked successfully at Slot ${slot} and Stop ${stop}.`);
  }
}

// Example usage
bookSeat(0, 5); // Book seat at Slot 0 and Stop 5
bookSeat(0, 5); // This seat is already booked. Please choose another one.
bookSeat(1, 10); // Book seat at Slot 1 and Stop 10

//function to display the bus

function displayBus() {
    console.log(bus);
}

//function to check the availability of a seat

function checkAvailability(slot, stop) {
    if (bus[slot][stop]) {
        console.log("This seat is already booked. Please choose another one.");
    } else {
        console.log("This seat is available.");
    }
}

