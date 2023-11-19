import serviceImg from "../../assets/images/service-article-img.jpg";
import serviceImg2 from "../../assets/images/service-article-img-2.jpg";

const services = [
  {
    id: 1,
    image: `${serviceImg}`,
    alt: "pharmacy staff organizing medicine",
    heading: "Imported Products",
    text1:
      "Medicine shortages and reduced availability of medicines are increasingly causing a delay of critical treatments for patients. Chemys will work to mitigate the impact of these medicine shortages.",
    text2:
      "Offering imported products into the UK that are unavailable or unlicensed for patients that have an unmet medical need. Chemys has a vast network of global wholesalers and local territory knowledge, ensuring a reliable product delivery service. When importing products from overseas, we take full responsibility for gaining authorisation through permission requests and sourcing all technical information required.",
    animateImg: "zoom-in-right",
    animateText: "zoom-in-left",
  },
  {
    id: 2,
    image: `${serviceImg2}`,
    alt: "laboratory staff examining sample",
    heading: "UK Manufactured Specials",
    text1:
      "Chemys has a strong working relationship with several UK specials laboratories who can manufacture specials to ensure we can meet all the varying patient needs.",
    text2: " ",
    animateImg: "zoom-in-left",
    animateText: "zoom-in-right",
  },
];
export default services;
