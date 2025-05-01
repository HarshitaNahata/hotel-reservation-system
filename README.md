# 🏨 Hotel Room Reservation System

A dynamic hotel room reservation system built as part of the SDE-3 assessment. The system simulates a 10-floor hotel with intelligent booking logic that minimizes guest travel time and visually displays room occupancy and bookings.

## 🚀 Live Demo
🔗 [hotel-reservation-system-pied.vercel.app](https://hotel-reservation-system-pied.vercel.app)

## 📂 Repository
🔗 [GitHub Repository](https://github.com/your-username/your-repo) *(replace with your actual repo link)*

---

## 🏗️ Project Structure

- **Floors 1–9**: 10 rooms each (e.g., 101–110, 201–210, ...).
- **Floor 10**: 7 rooms (1001–1007).
- **Rooms are arranged left to right, closest to stairs/lift on the left.**

## 🎯 Features

- ✅ Enter number of rooms to book (up to 5).
- ✅ Rooms are auto-assigned based on:
  - Preference for rooms on the same floor.
  - Minimum total **travel time** between rooms (horizontally and vertically).
- ✅ Random room occupancy generator.
- ✅ Reset button to clear all bookings.
- ✅ Visual room layout with booked/available status.

## 🔧 Technologies Used

- HTML, CSS, JavaScript
- Deployed via [Vercel](https://vercel.com)

## 🧠 Booking Logic

1. Prioritize rooms on the same floor.
2. If not enough rooms available, book across floors minimizing total **travel time**:
   - Horizontal move = 1 min per adjacent room
   - Vertical move = 2 min per floor

## 📸 Screenshot

![image](https://github.com/user-attachments/assets/19e538cf-2a6c-4f57-a706-cbd6eda83884)


## 📜 License

This project is for assessment/demo purposes.

---

