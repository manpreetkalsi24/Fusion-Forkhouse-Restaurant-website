// We are importing React hooks to manage state and side effects
import { useEffect, useState } from "react";

// Importing the CSS file for styling the slider
import "./HeroSlider.css";

// This array contains all the slides for the hero section
// Each slide has an image, a title, and a short description
const slides = [
  {
    image: "/images/indian1.jpg",
    title: "Authentic Indian Flavors",
    text: "Experience the rich taste of traditional Indian cuisine."
  },
  {
    image: "/images/indian2.jpg",
    title: "Spices That Tell a Story",
    text: "Crafted with handpicked spices from India."
  },
  {
    image: "/images/indian3.jpg",
    title: "A Royal Dining Experience",
    text: "Where heritage meets modern culinary art."
  }
];

// This is the main HeroSlider component
export default function HeroSlider() {

  // We use useState to keep track of which slide is currently visible
  const [current, setCurrent] = useState(0);

  // useEffect runs after the component loads
  // Here we are creating an automatic slide change every 4 seconds
  useEffect(() => {

    // setInterval changes the slide index every 4 seconds
    const interval = setInterval(() => {

      // Move to the next slide
      // If it reaches the last slide, go back to the first one
      setCurrent((prev) => (prev + 1) % slides.length);

    }, 4000);

    // Cleanup function to stop interval when component unmounts
    return () => clearInterval(interval);

  }, []);

  return (
    <div className="hero-slider">

      {/* Looping through each slide */}
      {slides.map((slide, index) => (

        <div
          key={index}

          // If the index matches the current slide, add "active" class to show it
          className={index === current ? "slide active" : "slide"}

          // Setting background image dynamically
          style={{ backgroundImage: `url(${slide.image})` }}
        >

          {/* Overlay text content */}
          <div className="overlay">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>

            {/* Reservation button */}
            <button className="slider-btn">
              Reserve Your Table
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}