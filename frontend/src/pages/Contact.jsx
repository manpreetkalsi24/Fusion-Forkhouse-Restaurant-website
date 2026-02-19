// Importing CSS file for styling
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">

      {/* Main Container */}
      <div className="contact-container">

        {/* Section Title */}
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-content">

          {/* LEFT SIDE - Contact Information */}
          <div className="contact-left">

            <div className="info-item">
              <div className="icon">✉</div>
              <div>
                <h4>Email us</h4>
                <p>info@fusionforkhouse.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📞</div>
              <div>
                <h4>Phone us</h4>
                <p>212 555-1212</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <h4>Find us</h4>
                <p>58 Upper Humber Dr, Etobicoke</p>
                <p>M9W7B6</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="social-icons">
              <span>📷</span>
              <span>📘</span>
              <span>📌</span>
              <span>▶</span>
              <span>✖</span>
            </div>

          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="contact-right">

            <form className="contact-form">

              <input type="text" placeholder="First Name *" required />
              <input type="text" placeholder="Last Name *" required />
              <input type="email" placeholder="Email *" required />

              <textarea
                rows="4"
                placeholder="Message"
              ></textarea>

              <button type="submit" className="contact-btn">
                Book Table
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}