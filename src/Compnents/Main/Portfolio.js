import React from "react";
import "./Main.css";
import png1 from "./Png/Logo.svg";
import png1_1 from "./Png/portfolio3.svg";
import png2 from "./Png/my3.png";
import png3 from "./Png/1img.png";
import { ImagerDisplay, ImagerImg } from "./imager/index.js"; //imagerShow

const Portfolio = () => {
  const imgs = [png1_1, png2, png3];
  return (
    <div className="Portfolio_page">
      <div id="portfolio_tag"></div>
      <ImagerDisplay z-index="2000" />
      <div className="my_portfolio_page_title">
        My <span className="passions_word">Portfolio</span>
      </div>
      <div className="portfolio_1">
        <div className="logo_portfolio">
          <img src={png1} alt="" />
        </div>
        <div className="port_img">
          {/* <img className="port_svg" src={png1_1} alt="" /> */}
          <ImagerImg
            className="port_svg"
            src={png1_1}
            alt="ahah"
            images={imgs}
          />
        </div>
        <div className="elipse_1"></div>
      </div>
      <div className="portfolio_2">
        <a  href="https://nozim-developer.github.io/travel-portal/" className="logo_portfolio">
          {/* <div className="text_logo">E-Commerce</div> */}
          <div className="text_logo">Travel-Portal</div>
          <div className="page_of_logo">Website</div>
        </a>
        <div className="port_img">
          <ImagerImg
            className="port_svg"
            src={png2}
            alt="ahah"
            images={imgs[png2]}
          />
        </div>
        <div className="elipse_1 cl"></div>

        {/* 
        <div className="logo_portfolio">
          <div className="text_logo">E-Commerce</div>
          <div className="page_of_logo">Website</div>
        </div>
        <div className="port_img">
          <ImagerImg className="port_svg" src={png2} alt="ahah" images={imgs} />
        </div>
        <div className="elipse_1 cl"></div> */}
      </div>

      <div className="portfolio_3">
        {/* <div className="logo_of_page_sendpay">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8_13)">
              <path
                d="M0.477844 38.8077L15.22 23.428L3.90441 7.0921C3.34659 7.80929 2.94816 8.76554 2.86847 9.88116L-0.000280764 35.939C-0.0799683 37.0546 0.0794067 38.0109 0.477844 38.8077Z"
                fill="#6C63FF"
              />
              <path
                d="M49.9636 4.38281L28.6074 24.225L45.4215 46.9359C46.3777 46.1391 47.0152 44.9437 47.1746 43.5094L50.9996 7.96875C51.159 6.53437 50.6808 5.17969 49.9636 4.38281Z"
                fill="#6C63FF"
              />
              <path
                d="M20.4794 31.3968L15.22 23.428L0.477844 38.8077C0.796594 39.5249 1.35441 40.003 1.99191 40.1624L42.4732 47.8124C43.5888 48.0515 44.6247 47.653 45.4216 46.9359L28.6075 24.2249L20.4794 31.3968Z"
                fill="#6C63FF"
              />
              <path
                d="M47.255 3.18758L5.65809 5.97664C5.02059 6.05633 4.38309 6.45477 3.90497 7.09227L15.3003 23.4282L20.5597 31.397L28.6878 24.2251L49.9643 4.38289C49.2472 3.58602 48.2909 3.10789 47.255 3.18758Z"
                fill="#6C63FF"
              />
              <path
                d="M28.0503 18.8062L28.5284 14.7421L14.5831 14.6624L12.2722 33.7077L25.819 36.8952L26.3768 32.8312L16.1768 30.839L16.7347 26.4562L26.9347 27.8905L27.4128 23.8265L17.1331 22.7905L17.6909 18.328L28.0503 18.8062Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_13">
                <rect width="51" height="51" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div> */}
        <div className="logo_portfolio">
          <a
            href="https://nozim-developer.github.io/Ai-Images-App/"
            className="text_logo22"
          >
            Image App
          </a>
        </div>
        <div className="port_img">
          <ImagerImg
            className="port_svg aiimage"
            src={png3}
            alt="ahah"
            images={imgs}
          />

          {/* <img className="port_svg" src={png3} alt="" /> */}
        </div>
        <div className="elipse_1 cs"></div>
      </div>
    </div>
  );
};

export default Portfolio;
