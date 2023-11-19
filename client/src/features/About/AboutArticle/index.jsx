import React from "react";
import AboutArticleCard from "../../../components/common/AboutArticleCard";
import aboutArticles from "../../../data/about/aboutArticles";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const AboutArticle = () => {
  return (
    <section className="bg-slate-50 ">
      <div className="py-10 md:bg-none md:py-48">
        <AboutArticleCard articles={aboutArticles} />
      </div>
      <div className="w-full flex flex-col items-center gap-5 py-10 md:py-16">
        <div>
          <p className="text-center text-lg px-5 md:px-20">
            Regardless of the your medical needs, we're confident that our
            specialized team can assist you in finding what you're looking for.
            Feel free to reach out to us.
          </p>
        </div>
        <div className="group">
          <Link
            to="/contact"
            className="flex items-center text-xl text-white bg-primary py-3 px-6 rounded-3xl ease-in-out duration-500 group-hover:bg-tertiary active:bg-secondary"
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

export default AboutArticle;
