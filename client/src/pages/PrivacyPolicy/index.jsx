import React from "react";
import Navbar from "../../features/Navbar";
import Policy from "../../features/Policy";
import Footer from "../../features/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="md:relative">
      <header className="fixed z-30 top-0 left-0 right-0 w-full md:absolute">
        <Navbar />
      </header>
      <main>
        <Policy />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
