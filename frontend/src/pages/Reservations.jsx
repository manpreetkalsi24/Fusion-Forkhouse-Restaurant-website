import { useState } from "react";
import "./Reservations.css";

export default function Reservations() {

  // This state stores all form field values
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

  // This state controls the success or error message display
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Updates form values when user types/selects something
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("http://localhost:8888/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {

        // Show proper confirmation message
        setIsSuccess(true);
        setMessage(
          "Thank you for booking a table! A confirmation email will be sent to you shortly."
        );

        // Clear form after successful submission
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

        // Auto hide message after 5 seconds
        setTimeout(() => {
          setMessage("");
        }, 5000);

      } else {
        setIsSuccess(false);
        setMessage(data.error || "Something went wrong. Please try again.");
      }

    } catch (error) {
      console.error("Error submitting reservation:", error);
      setIsSuccess(false);
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <section className="reservation-page">

      <div className="reservation-header">
        <h1>Book Your Table</h1>
        <p>
          Reserve your table at Fusion Forkhouse and enjoy an authentic
          Indian dining experience.
        </p>
      </div>

      <div className="reservation-container">

        {/* Display success or error message */}
        {message && (
          <div className={isSuccess ? "success-message" : "error-message"}>
            {message}
          </div>
        )}

        <form className="reservation-form" onSubmit={handleSubmit}>

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

          <div className="form-row">
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select Time *</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="1:30 PM">1:30 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="2:30 PM">2:30 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="3:30 PM">3:30 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="4:30 PM">4:30 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="8:30 PM">8:30 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="9:30 PM">9:30 PM</option>
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

          <textarea
            rows="4"
            name="specialRequests"
            placeholder="Special Requests (Optional)"
            value={formData.specialRequests}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="reserve-btn">
            Book Table
          </button>

        </form>
      </div>

    </section>
  );
}