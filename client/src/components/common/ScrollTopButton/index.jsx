import React, { useState } from "react";
import arrowUp from "../../../assets/icons/arrow-up.svg";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleButton = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setShowButton(true);
    } else if (scrolled <= 400) {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleButton);

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
