import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import "./Home.css";

const heroFoods = [
  {
    name: "Doro Wot",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpOpSNi-3pUsSfhqiodRRZCB6nTkOYvpvMs-GKXjA8g&s=10",
  },
  {
    name: "Tibs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gJgvfWMGIYqog4FIqWtx3FiBNeCD8-BIU_IOTOtTaQ&s=10",
  },
  {
    name: "Shiro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTll9Ej0bwoJQ4M-mrQ7PtrIbwstMgd-IMlMh7PyVtTnw&s=10",
  },
  {
    name: "Kitfo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOxveKmREQgpLYWwpShMACJD7xwqeQqN6fBAVxUBPVQ&s=10",
  },
];

function Home() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [currentImage, setCurrentImage] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % heroFoods.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home-page">
      {/* DARK MODE BUTTON */}
      <div className="home-theme-control">
        <button className="theme-button" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* HERO */}
      <section
        className="restaurant-hero"
        style={{
          backgroundImage: `url(${heroFoods[currentImage].image})`,
        }}
      >
        {/* DARK OVERLAY */}
        <div className="hero-overlay"></div>

        {/* HERO CONTENT */}
        <div className="restaurant-hero-content">
          {/* SMALL GOLD LABEL */}
          <div className="hero-badge">✦ PREMIUM ETHIOPIAN DINING ✦</div>

          {/* MAIN TITLE */}
          <h1>
            From Addis Kitchens to
            <span>Your Table</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="restaurant-description">
            Traditional Ethiopian flavors, prepared with passion and served with
            modern elegance.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <Link to="/menu" className="hero-button gold-button">
              🍽️ Explore Menu
            </Link>

            <Link to="/menu" className="hero-button green-button">
              🛒 Order Now
            </Link>
          </div>

          {/* IMAGE INDICATORS */}
          <div className="hero-indicators">
            {heroFoods.map((food, index) => (
              <button
                key={food.name}
                className={
                  index === currentImage ? "indicator active" : "indicator"
                }
                onClick={() => setCurrentImage(index)}
                aria-label={`Show ${food.name}`}
              ></button>
            ))}
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="hero-features">
          <div className="hero-feature">
            <span>✦</span>
            <p>100% Pure Ingredients</p>
          </div>

          <div className="hero-feature">
            <span>♨</span>
            <p>Traditional Ethiopian Flavors</p>
          </div>

          <div className="hero-feature">
            <span>☕</span>
            <p>Authentic Coffee & Culture</p>
          </div>
        </div>
      </section>

      {/* BELOW HERO */}
      <section className="home-intro">
        <p className="gold-label">DISCOVER ADDIS EATS</p>

        <h2>A Taste of Ethiopia</h2>

        <p>
          From traditional Doro Wot and Tibs to delicious Shiro and Kitfo,
          discover some of Ethiopia's most loved dishes.
        </p>

        <Link to="/menu" className="intro-button">
          View Our Menu →
        </Link>
      </section>
    </main>
  );
}

export default Home;
