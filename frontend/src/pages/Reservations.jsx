// Importing CSS file
import "./Reservations.css";

export default function Reservations() {
  return (
    <section className="reservation-page">

      {/* Page Heading Section */}
      <div className="reservation-header">
        <h1>Book Your Table</h1>
        <p>
          Reserve your table at Fusion Forkhouse and enjoy an authentic
          Indian dining experience.
        </p>
      </div>

      {/* Reservation Form Container */}
      <div className="reservation-container">

        <form className="reservation-form">

          {/* Row 1 */}
          <div className="form-row">
            <input type="text" placeholder="Full Name *" required />
            <input type="tel" placeholder="Phone Number *" required />
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <input type="email" placeholder="Email Address *" required />
            <input type="date" required />
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <select required>
              <option value="">Select Time *</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
            </select>

            <select required>
              <option value="">Number of Guests *</option>
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5+ People</option>
            </select>
          </div>

          {/* Message Field */}
          <textarea
            rows="4"
            placeholder="Special Requests (Optional)"
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="reserve-btn">
            Book Table
          </button>

        </form>
      </div>

    </section>
  );
}