import React from "react";
import locationIcon from "../../../assets/icons/location.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import emailIcon from "../../../assets/icons/email.svg";
import warehouse from "../../../assets/images/warehouse-2.jpg";
import Form from "../../../components/common/Form";

const ContactForm = () => {
  return (
    <section>
      <div className="w-full h-full">
        {/* info */}
        <div className=" w-full h-full flex pt-10 px-10 md:h-96 md:px-20">
          <div className=" w-full h-full [box-shadow:1px_0px_15px_8px_rgba(0,0,0,0.21)] rounded-3xl md:relative">
            {/* image */}
            <div className="w-full h-full">
              <img
                src={warehouse}
                alt="warehouse"
                className="w-full h-full rounded-t-3xl md:rounded-3xl "
              />
            </div>
            {/* contact info */}
            <div className="w-full h-full flex items-center justify-center py-10 bg-gradient-to-t from-slate-400 via-slate-300 to-slate-300/70 rounded-b-3xl md:absolute md:top-0 md:w-1/2 md:py-0 md:[box-shadow:16px_0px_10px_8px_rgba(203,213,225,0.7)] md:bg-gradient-to-r md:rounded-s-3xl">
              <ul className="flex flex-col gap-10 text-lg font-semibold">
                <li className="flex items-center gap-5">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="w-10 h-10 "
                  />
                  <p>
                    <span className="text-xl">Chemys Limited</span>
                    <br />
                    Unit 8 The Acorn Centre
                    <br /> Hainault Business Park
                    <br /> Roebuck Road
                    <br /> Ilford IG6 3TU
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <img src={phoneIcon} alt="phone" className="w-10 h-10 " />
                  <a href="tel:+0208 500 8497" className="hover:text-tertiary">
                    0208 500 8497
                  </a>
                </li>
                <li className="flex items-center gap-5">
                  <img src={emailIcon} alt="email" className="w-10 h-10 " />
                  <a
                    href="mailto:info@chemys.co.uk"
                    className="hover:text-tertiary"
                  >
                    info@chemys.co.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {/* form */}
          <div className="w-full pt-10 text-center text-4xl font-bold md:pt-20">
            <h2>Get in Touch</h2>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
