class HotelModel {
    constructor() {
        this.floors = 10;
        this.rooms = {};
        this.initialize();
    }

    initialize() {
        // Create rooms for floors 1-9
        for (let floor = 1; floor <= 9; floor++) {
            for (let room = 1; room <= 10; room++) {
                const roomNumber = `${floor}0${room}`;
                this.rooms[roomNumber] = 'available';
            }
        }

        // Create rooms for floor 10
        for (let room = 1; room <= 7; room++) {
            const roomNumber = `100${room}`;
            this.rooms[roomNumber] = 'available';
        }
    }

    getAvailableRooms() {
        return Object.keys(this.rooms).filter(room => this.rooms[room] === 'available');
    }

    bookRooms(roomNumbers) {
        roomNumbers.forEach(room => {
            if (this.rooms[room] === 'available') {
                this.rooms[room] = 'booked';
            }
        });
    }

    generateRandomOccupancy() {
        const allRooms = Object.keys(this.rooms);
        const occupiedCount = Math.floor(allRooms.length * 0.3); // 30% occupancy

        // Reset all rooms first
        this.initialize();

        // Randomly occupy rooms
        for (let i = 0; i < occupiedCount; i++) {
            const randomIndex = Math.floor(Math.random() * allRooms.length);
            this.rooms[allRooms[randomIndex]] = 'booked';
        }
    }

    resetAll() {
        this.initialize();
    }
}
