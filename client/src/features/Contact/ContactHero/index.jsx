import React, { useEffect } from "react";
import heroBg from "../../../assets/images/contact-bg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const ContactHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="relative w-full h-screen bg-cover bg-top shadow-lg shadow-black/30"
      >
        <div className="absolute inset-0 w-full h-screen bg-black/30">
          <div className="w-full h-full flex flex-col items-start justify-center p-5 bg-[linear-gradient(90deg,_rgba(46,48,148,1)_40%,_rgba(255,255,255,0)_100%)] md:px-10 md:pt-28">
            <div data-aos="fade-right" className="py-10 md:px-16 ">
              <div className=" flex justify-start">
                <h1 className="text-4xl text-white font-bold py-5 px-3 md:text-5xl">
                  Contact us
                </h1>
              </div>
              <div className=" flex justify-start">
                <h3 className="text-xl text-white font-bold py-5 px-3 md:text-2xl">
                  Please contact us today to see how we can help your patients
                  with their medical needs.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
