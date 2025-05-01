class HotelVisualizer {
    constructor(hotelModel) {
        this.hotel = hotelModel;
        this.container = document.getElementById('hotelVisualization');
    }

    render(justBookedRooms = []) {
        this.container.innerHTML = '';
        for (let floor = 10; floor >= 1; floor--) {
            const floorDiv = document.createElement('div');
            floorDiv.className = 'floor';
            const floorLabel = document.createElement('div');
            floorLabel.className = 'floor-label';
            floorLabel.textContent = `Floor ${floor}`;
            const roomsContainer = document.createElement('div');
            roomsContainer.style.display = 'flex';
            const rooms = this.getFloorRooms(floor);
            rooms.forEach(room => {
                const roomElement = document.createElement('div');
                roomElement.className = `room ${this.hotel.rooms[room]}`;
                roomElement.textContent = room;
                if (justBookedRooms.includes(room)) {
                    roomElement.classList.add('just-booked');
                }
                roomsContainer.appendChild(roomElement);
            });
            floorDiv.appendChild(floorLabel);
            floorDiv.appendChild(roomsContainer);
            this.container.appendChild(floorDiv);
        }
    }


    getFloorRooms(floor) {
        const prefix = floor === 10 ? '100' : `${floor}0`;
        return Object.keys(this.hotel.rooms)
            .filter(room => room.startsWith(prefix))
            .sort();
    }
}
