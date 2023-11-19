import React from "react";
import heroBg from "../../../assets/images/hero-bg.jpg";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="relative w-full h-screen bg-cover shadow-lg shadow-black/30 "
      >
        <div className="absolute inset-0 w-full h-screen bg-black/60 md:px-28 md:pt-20">
          <div className="w-full h-full flex flex-col items-center justify-center gap-10">
            <div>
              <h1 className="w-full text-3xl text-white text-center font-bold py-5 md:w-[50rem] md:text-5xl">
                <span>Welcome to</span>
                <br />
                <span className="hero text-[2.75rem] text-center md:text-8xl">
                  Chemys Limited
                </span>
              </h1>
            </div>
            <div className="w-full">
              <div className="w-full flex justify-center ">
                <div className="group">
                  <Link
                    to="/contact"
                    className="flex items-center text-xl text-white bg-primary py-3 px-6 rounded-3xl ease-in-out duration-500 group-hover:bg-tertiary active:bg-secondary"
                  >
                    Enquire Now
                    <span>
                      <img
                        src={arrowRight}
                        alt="arrow"
                        className="w-0 h-5 invert ease-in-out duration-500 group-hover:w-10"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
