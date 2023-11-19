import React, { useEffect } from "react";
import heroBg from "../../../assets/images/about-bg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="relative w-full h-screen bg-cover shadow-lg shadow-black/30"
      >
        <div className="absolute inset-0 w-full h-screen bg-black/30">
          <div className="w-full h-full flex flex-col items-start justify-center p-5 mt-12 md:px-10 md:pt-28 md:mt-0">
            <div
              data-aos="fade-right"
              className="py-10 bg-primary/90 rounded-3xl md:px-16"
            >
              <div className=" flex justify-start">
                <h1 className="text-4xl text-white font-bold py-5 px-3 md:text-5xl">
                  About Us
                </h1>
              </div>

              <div className="flex justify-start">
                <h3 className="text-lg text-justify text-white py-5 px-3 md:text-lg">
                  Chemys was established in 2017 and is one of the UK's leading
                  pharmaceutical suppliers of imported unlicensed medicines.
                  With our vast network of approved manufacturers and suppliers
                  across the world, we can assist with the import of unlicensed
                  medicines and handle the regulatory requirements for a
                  seamless service.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
