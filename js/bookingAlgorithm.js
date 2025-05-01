class BookingAlgorithm {
    constructor(hotelModel) {
        this.hotel = hotelModel;
    }

    calculateTravelTime(room1, room2) {
        const floor1 = room1.startsWith('10') ? 10 : parseInt(room1[0]);
        const floor2 = room2.startsWith('10') ? 10 : parseInt(room2[0]);

        const verticalTime = Math.abs(floor1 - floor2) * 2;
        const horizontalTime = Math.abs(
            this.getRoomPosition(room1) - this.getRoomPosition(room2)
        );

        return verticalTime + horizontalTime;
    }

    getRoomPosition(roomNumber) {
        if (roomNumber.startsWith('10')) {
            return parseInt(roomNumber.slice(3));
        }
        return parseInt(roomNumber.slice(2));
    }

    findOptimalRooms(numRooms) {
        // First try to find on same floor
        for (let floor = 1; floor <= 10; floor++) {
            const floorRooms = this.getAvailableFloorRooms(floor);
            if (floorRooms.length >= numRooms) {
                return this.selectConsecutiveRooms(floorRooms, numRooms);
            }
        }

        // If no floor has enough rooms, find best combination
        return this.findBestCombination(numRooms);
    }

    getAvailableFloorRooms(floor) {
        const prefix = floor === 10 ? '100' : `${floor}0`;
        return Object.keys(this.hotel.rooms)
            .filter(room => room.startsWith(prefix) && this.hotel.rooms[room] === 'available')
            .sort();
    }

    selectConsecutiveRooms(rooms, count) {
        // Find the first consecutive sequence
        for (let i = 0; i <= rooms.length - count; i++) {
            const sequence = rooms.slice(i, i + count);
            if (this.isConsecutive(sequence)) {
                return sequence;
            }
        }
        return rooms.slice(0, count);
    }

    isConsecutive(rooms) {
        const positions = rooms.map(room => this.getRoomPosition(room));
        for (let i = 1; i < positions.length; i++) {
            if (positions[i] - positions[i - 1] !== 1) return false;
        }
        return true;
    }

    findBestCombination(numRooms) {
        // Simplified version for demo - picks first available rooms
        return this.hotel.getAvailableRooms().slice(0, numRooms);
    }
}
