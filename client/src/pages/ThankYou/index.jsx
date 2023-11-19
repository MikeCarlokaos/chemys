import React from "react";
import Navbar from "../../features/Navbar";
import Footer from "../../features/Footer";
import ChangeTitle from "../../components/hooks/ChangeTitle";
import bg from "../../assets/images/thank-you-bg.jpg";

import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  ChangeTitle("Message Sent | Chemys Limited | United Kingdom");

  const navigate = useNavigate();

  const toggleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="md:relative">
      <header className="fixed z-30 top-0 left-0 right-0 w-full md:absolute">
        <Navbar />
      </header>
      <main>
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="w-full h-screen flex flex-col gap-10 items-center justify-center bg-center"
        >
          <div className="text-center space-y-10 px-5 mt-36">
            <h1 className="text-5xl font-black uppercase">
              message sent successfully
            </h1>
            <p className="text-lg font-bold">
              We appreciate that you've taken the time to write us. We'll get
              back to you very soon. Please come back and see us often.
            </p>
          </div>
          <button
            onClick={toggleBack}
            className="flex items-center text-xl text-white bg-primary py-2 px-6 rounded-3xl capitalize ease-in-out duration-500 hover:bg-tertiary active:bg-secondary"
          >
            go back
          </button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ThankYou;
