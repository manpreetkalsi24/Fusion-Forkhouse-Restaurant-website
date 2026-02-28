import { useState } from "react";
import "./Contact.css";

// Importing icons from react-icons library
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";

export default function Contact() {

  // State to store form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  // State to show success or error message
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // for Preventing page refresh

    try {
      // const response = await fetch("http://localhost:8888/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(formData)
      // });

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {

        // Show success message
        setIsSuccess(true);
        setResponseMessage("Thank you for contacting us! We will get back to you shortly.");

        // Clear form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });

        // Auto hide message after 5 seconds
        setTimeout(() => {
          setResponseMessage("");
        }, 5000);

      } else {
        setIsSuccess(false);
        setResponseMessage(data.error || "Something went wrong. Please try again.");
      }

    } catch (error) {
      // console.error("Contact form error:", error);
      setIsSuccess(false);
      setResponseMessage("Server error. Please try again later.");
    }
  };

  return (
    <section className="contact-section">

      <div className="contact-container">

        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-content">

          {/* Left Side - Contact Information */}
          <div className="contact-left">

            <div className="info-item">
              <div className="icon"><FaEnvelope /></div>
              <div>
                <h4>Email us</h4>
                <p>info@fusionforkhouse.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon"><FaPhoneAlt /></div>
              <div>
                <h4>Phone us</h4>
                <p>212 555-1212</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Find us</h4>
                <p>58 Upper Humber Dr, Etobicoke</p>
                <p>M9W7B6</p>
              </div>
            </div>

            <div className="social-icons">
              <FaInstagram />
              <FaFacebookF />
              <FaYoutube />
            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-right">

            {/* Success or Error Message */}
            {responseMessage && (
              <div className={isSuccess ? "success-message" : "error-message"}>
                {responseMessage}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>

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
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="contact-btn">
                Submit
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}