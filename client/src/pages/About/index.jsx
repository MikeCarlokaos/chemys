import React from "react";
import Navbar from "../../features/Navbar";
import Footer from "../../features/Footer";
import AboutHero from "../../features/About/AboutHero";
import AboutArticle from "../../features/About/AboutArticle";
import ChangeTitle from "../../components/hooks/ChangeTitle";

const About = () => {
  ChangeTitle("About | Chemys Limited | United Kingdom");

  return (
    <div className="md:relative">
      <header className="fixed z-30 top-0 left-0 right-0 w-full md:absolute">
        <Navbar />
      </header>
      <main>
        <AboutHero />
        <AboutArticle />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
