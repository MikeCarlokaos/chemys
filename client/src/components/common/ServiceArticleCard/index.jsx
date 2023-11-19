import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const ServiceArticleCard = ({ services }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full h-full px-5 md:px-12">
      {services.map((service) => (
        <div
          key={service.id}
          className="w-full h-full py-10 flex flex-col md:flex-row md:even:flex-row-reverse md:items-center md:-space-x-20 even:space-x-reverse"
        >
          <div
            data-aos={service.animateImg}
            data-aos-once="true"
            className="w-full h-60 rounded-3xl overflow-hidden [box-shadow:1px_0px_15px_8px_rgba(0,0,0,0.21)]  md:w-[40rem] md:h-96  md:rounded-br-[5rem] md:rounded-tl-[5rem]"
          >
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-full"
            />
          </div>
          <div
            data-aos={service.animateText}
            data-aos-once="true"
            className="w-full h-full z-20 -mt-10 flex flex-col gap-5 justify-center p-5 text-justify text-lg bg-slate-200 text-black rounded-3xl [box-shadow:1px_0px_15px_8px_rgba(0,0,0,0.21)]  md:w-[40rem] md:h-[100%] md:p-10 md:rounded-br-[5rem] md:rounded-tl-[5rem] md:mt-0"
          >
            <h2 className="text-center text-3xl font-semibold underline">
              {service.heading}
            </h2>
            <p>{service.text1}</p>
            <p>{service.text2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceArticleCard;
