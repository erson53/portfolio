import React from "react";
import "../assets/css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  AOS.init();
  return (
    <div id="home">
      <div className="home-container">
        <div className="home-title-positioning">
          <div className="home-title-background">
            <h1 data-aos="fade-up">Herzlich willkommen auf meiner Website!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
