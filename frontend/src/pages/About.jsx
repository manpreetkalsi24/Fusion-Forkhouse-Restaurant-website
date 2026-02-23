// Importing CSS file
import "./About.css";

export default function About() {
  return (
    <section className="about-page">

      {/* Hero Banner Section*/}
      <div className="about-hero">
        <div className="overlay">
          <h1>About</h1>
          <h2>Our Restaurant</h2>
        </div>
      </div>


      {/* Story Section*/}
      <div className="about-content">

        
        <div className="about-text">
          <p className="small-title">OUR STORY</p>

          <h2>
            Experience luxury dining <br />
            like never before.
          </h2>

          <p className="description">
            Discover a world where every dish is a masterpiece, meticulously 
            crafted with the finest ingredients. Our commitment to excellence 
            extends beyond the kitchen, creating an atmosphere that always 
            resonates with sophistication as a celebration of good cooking ability.
          </p>

          <p className="description">
            Established 20 years ago, Fusion Forkhouse has redefined the art of 
            fine dining, offering an unparalleled blend of exquisite flavors, 
            elegant ambiance, and exceptional service.
          </p>
        </div>


        
        <div className="about-image">
          <img src="/images/aboutus.png" alt="Signature Dish" />
        </div>

      </div>

    </section>
  );
}