import React from "react";
import ServiceArticleCard from "../../../components/common/ServiceArticleCard";
import services from "../../../data/services/services";
import arrowRight from "../../../assets/icons/arrow-right.svg";

import { Link } from "react-router-dom";

const ServiceArticle = () => {
  return (
    <section>
      <div className="w-full h-full pt-36 bg-primary-400">
        <h1 className="py-10 text-center text-white text-4xl font-semibold capitalize">
          services
        </h1>
        <ServiceArticleCard services={services} />
      </div>
      <div className="relative w-full h-full flex flex-col items-center jusrify-center gap-10 py-20 px-5 text-lg md:px-0">
        <p className="text-center">
          We offer a 3pm cut off for next day deliveries across the UK available
          from Monday to Friday.
          <br />
          There is free delivery for orders above £100.
        </p>
        <p className="text-center">
          For inquires please contact us on <br />
          <a
            href="tel:+0208 500 8497"
            className="text-primary-400 font-semibold underline hover:text-tertiary"
          >
            0208 500 8497
          </a>{" "}
          or{" "}
          <a
            href="mailto:info@chemys.co.uk"
            className="text-primary-400 font-semibold underline hover:text-tertiary"
          >
            info@chemys.co.uk
          </a>
        </p>
        <div className="group">
          <Link
            to="/contact"
            className="flex items-center bg-primary py-3 px-6 rounded-3xl text-white ease-in-out duration-500 group-hover:bg-tertiary active:bg-secondary"
          >
            Enquire
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
    </section>
  );
};

export default ServiceArticle;
