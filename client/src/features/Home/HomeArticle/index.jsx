import React, { useEffect } from "react";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";
import HomeArticleCard from "../../../components/common/HomeArticleCard";
import homeArticles from "../../../data/home/homeArticles";

const HomeArticle = () => {
  return (
    <section>
      <div className="w-full h-full flex flex-col items-center gap-10 p-5 border-black/50 md:h-full md:p-10">
        <div className=" w-full flex flex-col items-center py-5">
          <h1 className="text-4xl text-primary font-semibold">
            Chemys Limited
          </h1>
        </div>
        <div>
          <HomeArticleCard articles={homeArticles} />
        </div>
        <div className="group">
          <Link
            to="/about"
            className="flex items-center bg-primary py-3 px-6 rounded-3xl text-white text-xl ease-in-out duration-500 group-hover:bg-tertiary active:bg-secondary"
          >
            Learn more
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

export default HomeArticle;
