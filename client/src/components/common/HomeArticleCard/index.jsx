import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const HomeArticleCard = ({ articles }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full h-full flex flex-col md:py-10 md:gap-36">
      {articles.map((article) => (
        <div
          key={article.id}
          data-aos={article.animate}
          data-aos-once="true"
          className="w-full h-full flex flex-col items-center justify-center bg-transparent px-0 py-5 md:h-[100%] md:flex-row md:odd:flex-row-reverse md:py-0 md:-space-x-48 odd:md:space-x-reverse"
        >
          <div className="w-full h-full rounded-3xl overflow-hidden md:w-[100%] md:h-96 md:-translate-y-5 [box-shadow:1px_0px_15px_8px_rgba(0,0,0,0.21)] md:rounded-[4rem]">
            <img
              src={article.image}
              alt={article.alt}
              className="w-full h-full"
            />
          </div>

          <div className="w-full h-full flex items-center -mt-6 bg-primary text-lg text-justify text-white rounded-3xl [box-shadow:1px_0px_15px_8px_rgba(0,0,0,0.21)] md:translate-y-5 md:w-[100%] md:-mt-0   md:rounded-[4rem]">
            <p className="px-5 py-10 md:px-12">{article.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeArticleCard;
