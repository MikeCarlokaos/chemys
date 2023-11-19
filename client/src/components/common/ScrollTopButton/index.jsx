import React, { useState, useEffect } from "react";
import arrowUp from "../../../assets/icons/arrow-up.svg";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setShowButton(scrolled > 400);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton
          ? "fixed bottom-20 right-10 w-10 h-10 bg-black/50 rounded-xl hover:bg-tertiary/80"
          : "hidden"
      }`}
    >
      <img src={arrowUp} alt="arrow up" className="w-full h-full p-2 invert" />
    </button>
  );
};

export default ScrollTopButton;
