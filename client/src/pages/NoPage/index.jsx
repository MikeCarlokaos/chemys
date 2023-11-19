import React from "react";
import Navbar from "../../features/Navbar";
import Footer from "../../features/Footer";
import ChangeTitle from "../../components/hooks/ChangeTitle";

import { useNavigate } from "react-router-dom";

const NoPage = () => {
  ChangeTitle("PageNotFound | Chemys Limited | United Kingdom");

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
        <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
          <div>
            <h1 className="text-8xl font-black uppercase">page not found</h1>
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

export default NoPage;
