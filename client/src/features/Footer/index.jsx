import React from "react";
import logo from "../../assets/images/chemys-logo.png";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <section className="bg-primary text-white flex flex-col items-center bg-gradient-to-tl from-primary-600 via-primary/80 to-white md:bg-gradient-to-l">
      {/* links */}
      <div className="w-full h-full flex flex-col justify-around py-5 px-5 gap-10 md:flex-row md:px-16">
        {/* 1st half */}
        <div className="w-full flex gap-10">
          {/* logo */}
          <div className="w-1/2 flex items-center justify-center">
            <img src={logo} alt="logo" className="w-40 h-28" />
          </div>
          {/* company */}
          <div className="w-1/2 flex flex-col pt-5 gap-5">
            <div className="border-b-2">
              <h3 className="text-center text-lg font-semibold capitalize">
                company
              </h3>
            </div>
            <ul className="text-center capitalize">
              <li>
                <Link to="/" className="hover:text-tertiary">
                  home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-tertiary">
                  about
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-tertiary">
                  service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-tertiary">
                  contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-tertiary">
                  privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* second half */}
        <div className="w-full flex gap-10">
          {/* address */}
          <div className="w-1/2 flex flex-col pt-5 gap-5">
            <div className="border-b-2">
              <h3 className="text-center text-lg font-semibold capitalize">
                address
              </h3>
            </div>
            <div className="text-center">
              <p>
                <strong>Chemys Limited</strong>
                <br />
                Unit 8 The Acorn Centre
                <br /> Hainault Business Park
                <br /> Roebuck Road
                <br /> Ilford IG6 3TU
              </p>
            </div>
          </div>
          {/* contact */}
          <div className="w-1/2 flex flex-col pt-5 gap-5">
            <div className="border-b-2">
              <h3 className="text-center text-lg font-semibold capitalize">
                contact
              </h3>
            </div>
            <div className="flex flex-col items-start px-2 gap-5 md:px-10">
              <div className="flex  gap-2">
                <img src={phoneIcon} alt="phone" className="w-5 h-5 invert" />
                <a href="tel:+0208 500 8497" className="hover:text-tertiary">
                  0208 500 8497
                </a>
              </div>

              <div className="flex items-center gap-2">
                <img src={emailIcon} alt="email" className="w-5 h-5 invert" />
                <a
                  href="mailto:info@chemys.co.uk"
                  className="hover:text-tertiary"
                >
                  info@chemys.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copywrite */}
      <div className="py-2 capitalize">
        <p>© {year} chemys ltd. all rights reserved </p>
      </div>
    </section>
  );
};

export default Footer;
