import React from "react";
import Navbar from "../../features/Navbar";
import Footer from "../../features/Footer";
import ContactHero from "../../features/Contact/ContactHero";
import ContactForm from "../../features/Contact/ContactForm";
import ChangeTitle from "../../components/hooks/ChangeTitle";

const Contact = () => {
  ChangeTitle("Contact | Chemys Limited | United Kingdom");
  return (
    <div className="md:relative">
      <header className="fixed z-30 top-0 left-0 right-0 w-full md:absolute">
        <Navbar />
      </header>
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
