document.addEventListener('DOMContentLoaded', () => {
    const hotel = new HotelModel();
    const visualizer = new HotelVisualizer(hotel);
    const bookingSystem = new BookingAlgorithm(hotel);

    // Initial render
    visualizer.render();

    // Event handlers
    document.getElementById('bookBtn').addEventListener('click', () => {
        const numRooms = parseInt(document.getElementById('numRooms').value);
        const roomsToBook = bookingSystem.findOptimalRooms(numRooms);
        if (roomsToBook.length === numRooms) {
            hotel.bookRooms(roomsToBook);
            visualizer.render(roomsToBook); // Pass booked rooms for highlight
            showTravelTime(roomsToBook);
            showUserMessage(`Successfully booked rooms: ${roomsToBook.join(', ')}`, 'success');
        } else {
            showUserMessage(`Only ${roomsToBook.length} rooms available!`, 'error');
        }
    });


    document.getElementById('randomBtn').addEventListener('click', () => {
        hotel.generateRandomOccupancy();
        visualizer.render();
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        hotel.resetAll();
        visualizer.render();
    });

    function showTravelTime(rooms) {
        if (rooms.length < 2) return;

        let totalTime = 0;
        for (let i = 1; i < rooms.length; i++) {
            totalTime += bookingSystem.calculateTravelTime(rooms[i - 1], rooms[i]);
        }

        document.getElementById('travelTime').textContent =
            `Total travel time between first and last room: ${totalTime} minutes`;
    }
});
function showUserMessage(msg, type = 'success') {
    const el = document.getElementById('userMessage');
    el.textContent = msg;
    el.style.color = (type === 'success') ? 'green' : 'red';
    setTimeout(() => { el.textContent = ''; }, 3000);
}
