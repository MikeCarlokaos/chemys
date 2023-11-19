import React from "react";
import Navbar from "../../features/Navbar";
import HomeHero from "../../features/Home/HomeHero";
import HomeArticle from "../../features/Home/HomeArticle";
import Footer from "../../features/Footer";

const Home = () => {
  return (
    <div className="md:relative">
      <header className="fixed z-30 top-0 left-0 right-0 w-full md:absolute">
        <Navbar />
      </header>
      <main>
        <HomeHero />
        <HomeArticle />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
