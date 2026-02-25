import { useState } from "react";
import "./Reservations.css";

export default function Reservations() {

  // This state stores all the form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: ""
  });

  // This function runs whenever user types or selects something
  // It updates the specific field in our form state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // This function runs when user clicks "Book Table"
  // It sends the reservation data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // for Preventing page reload

    try {
      const response = await fetch("http://localhost:8888/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      // If backend responds successfully
      if (response.ok) {
        alert("Your reservation has been submitted successfully!");

        // Clear the form after submission
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          guests: "",
          specialRequests: ""
        });

      } else {
        alert(data.error || "Something went wrong.");
      }

    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <section className="reservation-page">

      {/* Page heading section */}
      <div className="reservation-header">
        <h1>Book Your Table</h1>
        <p>
          Reserve your table at Fusion Forkhouse and enjoy an authentic
          Indian dining experience.
        </p>
      </div>

      {/* Main form container */}
      <div className="reservation-container">

        {/* Reservation form */}
        <form className="reservation-form" onSubmit={handleSubmit}>

          {/* First row - basic personal details */}
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Second row - email and date */}
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Third row - time and number of guests */}
          <div className="form-row">
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select Time *</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </select>

            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="">Number of Guests *</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5+ People</option>
            </select>
          </div>

          {/* Optional special requests message */}
          <textarea
            rows="4"
            name="specialRequests"
            placeholder="Special Requests (Optional)"
            value={formData.specialRequests}
            onChange={handleChange}
          ></textarea>

          {/* Submit button */}
          <button type="submit" className="reserve-btn">
            Book Table
          </button>

        </form>
      </div>

    </section>
  );
}