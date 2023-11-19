import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutArticleCard = ({ articles }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:gap-36">
      {articles.map((article) => (
        <div
          key={article.id}
          data-aos={article.animate}
          data-aos-once="true"
          className="w-full h-full flex flex-col items-center justify-center bg-transparent px-5 py-5 md:h-60 md:px-10 md:flex-row md:odd:flex-row-reverse md:px-10 md:py-0 md:odd:bg-[linear-gradient(90deg,_rgba(46,48,148,1)_40%,_rgba(248,250,252,1)_100%)] md:even:bg-[linear-gradient(270deg,_rgba(46,48,148,1)_40%,_rgba(248,250,252,1)_100%)]"
        >
          <div className="static w-full h-full md:relative">
            <div className="static w-full md:absolute md:-top-10">
              <img
                src={article.image}
                alt={article.alt}
                className="w-full md:h-80 rounded-3xl [box-shadow:1px_0px_15px_8px_rgba(0,0,0,0.21)]"
              />
            </div>
          </div>
          <div className="w-full h-full flex items-center p-5 -mt-10 bg-white text-lg text-justify text-black  rounded-3xl [box-shadow:1px_0px_15px_8px_rgba(0,0,0,0.21)] md:mt-0 md:p-10 md:bg-transparent md:text-white md:rounded-none md:shadow-none">
            <p>{article.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutArticleCard;
