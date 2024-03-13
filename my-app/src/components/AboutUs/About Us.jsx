import { Link } from "react-router-dom";
import "../AboutUs/_about_us.scss";
import AboutSection from "./AboutSection";

function AboutUs() {
  return (
    <div>
      <AboutSection activeLink="About Us" />
      <section className="about-container">
        <div className="content">
          <h3>about our journey</h3>
            <p>Welcome to our journey! We embarked on this adventure with a vision to redefine the way people experience cinema and entertainment.</p>
            <p> Our journey began with a simple idea: to create a platform where movie enthusiasts could come together to explore, discuss, and celebrate the magic of film.</p>
            <p>As we traversed through the realms of cinema, our passion for storytelling and cinematic artistry only grew stronger. We curated a diverse collection of movies and TV shows, handpicked to cater to every taste and preference.</p>
            <p>From timeless classics to the latest blockbusters, our journey has been an exploration of cinematic excellence in all its forms.</p>
            <p>But our journey doesn't end here. With each passing day, we strive to enhance your movie-watching experience, offering innovative features and exciting content to keep you captivated. Join us as we continue this exhilarating journey, celebrating the wonder and joy of cinema every step of the way.</p>
            <p>Come, be a part of our journey, and let's embark on an unforgettable cinematic adventure together!</p>
        </div>
      </section>
      <section className="Features">
        <div className="container">
          <div className="heading">
            <h2>Filmoja Features</h2>
          </div>
          <div className="features_box_list">
          <div className="box">
            <h3>Ultra HD Video</h3>
              <div className="info">
                <p>Experience cinema like never before with our Ultra HD Video collection. Immerse yourself in stunning visuals and crystal-clear sound as every frame comes to life with incredible detail and realism. Elevate your movie-watching experience to new heights with unparalleled quality.</p>
              </div>
          </div>
          <div className="box">
            <h3>Language Subtitles:</h3>
            <div className="info">
              <p>Explore our extensive collection of language subtitles, enhancing your viewing experience and making films accessible to a global audience. Whether you prefer English, Spanish, French, or any other language, our subtitles ensure that every dialogue and caption is accurately represented, allowing you to enjoy your favorite movies with ease, regardless of linguistic barriers.</p>
            </div>
          </div>
          <div className="box">
            <h3>Awards winning</h3>
              <div className="info">
                <p>Awards Winning: Discover our collection of acclaimed films and TV shows that have garnered recognition and accolades from prestigious award ceremonies worldwide. Explore the best of the best in cinematic excellence and celebrate the remarkable achievements of these distinguished productions.</p>
              </div>
          </div>
        </div>
      </div>
    </section>
    <Link to="/">Go to Home</Link>
  </div>
  );
}
export default AboutUs;
