import img1 from "../../assets/images/home-article-img-1.jpg";
import img2 from "../../assets/images/home-article-img-2.jpg";
import img3 from "../../assets/images/home-article-img-3.jpg";

const homeArticles = [
  {
    id: 1,
    image: `${img1}`,
    alt: "pharmacy staff helping customer",
    text: "We take pride in meeting the pharmaceutical needs of a patients in the U.K who cannot take the mainstream readily available medicines either because they do not suit them or because what they require is not available. This necessitates either special compounding or importation from another country where an appropriate medicine may be available.",
    animate: "zoom-in-right",
  },
  {
    id: 2,
    image: `${img2}`,
    alt: "hospital staff shaking hands with patient",
    text: "We have a strong network of global suppliers and excellent working relationships with several UK specials laboratories from whom we can service the needs of our customers. Our customers include all major UK wholesalers, hospitals and community pharmacies.",
    animate: "zoom-in-left",
  },
  {
    id: 3,
    image: `${img3}`,
    alt: "warehouse staff",
    text: " We consider ourselves dynamic and agile and can respond to our customer's needs immediately.",
    animate: "zoom-in-right",
  },
];

export default homeArticles;
