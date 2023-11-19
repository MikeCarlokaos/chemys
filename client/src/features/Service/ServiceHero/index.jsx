import React, { useEffect } from "react";
import heroBg from "../../../assets/images/service-bg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const ServiceHero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="">
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className="relative w-full h-screen bg-cover bg-right shadow-lg shadow-black/30 md:bg-top"
      >
        <div className="absolute inset-0 w-full h-screen bg-black/30">
          <div className="w-full flex flex-col items-start justify-center mt-56 p-5 bg-[linear-gradient(90deg,_rgba(46,48,148,1)_40%,_rgba(255,255,255,0)_100%)] md:p-10">
            <div data-aos="fade-right" className="py-10 md:px-16 ">
              <div className=" flex justify-start">
                <h1 className="text-5xl text-white font-bold py-5 px-3 underline">
                  Services
                </h1>
              </div>
              <div className=" flex justify-start">
                <h3 className="text-2xl text-white font-bold py-5 px-3 ">
                  Our core business revolves around supplying Specials.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
