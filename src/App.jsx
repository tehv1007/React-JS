import React from "react";
import AboutUs from "./components/AboutUs";
import Announcement from "./components/Announcement";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div>
      <Announcement />
      <Hero />
      <Collection />
      <Reviews />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
