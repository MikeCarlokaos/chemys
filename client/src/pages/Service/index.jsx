import React from "react";
import Navbar from "../../features/Navbar";
import Footer from "../../features/Footer";
// import HeroService from "../../features/Service/HeroService";
import ServiceArticle from "../../features/Service/ServiceArticle";
import ChangeTitle from "../../components/hooks/ChangeTitle";

const Service = () => {
  ChangeTitle("Services | Chemys Limited | United Kingdom");
  return (
    <div className="md:relative">
      <header className="fixed z-30 top-0 left-0 right-0 w-full md:absolute">
        <Navbar />
      </header>
      <main>
        {/* <HeroService /> */}
        <ServiceArticle />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Service;
