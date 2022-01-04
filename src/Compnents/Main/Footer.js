import React from "react";
import "./Main.css";

const Footer = () => {
  return (
    <div className="wave">
      {/* <div className="text_div"><span className="Developed_text">Developed by Nozim</span> </div> */}
      {/* <div className="wave_vektor"> */}
      {/* <!--Waves Container--> */}
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering={"auto"}
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              className="use"
              xlinkHref="#gentle-wave"
              x="100"
              y="0"
              fill="rgba(96, 138, 245,0.7"
            />
            <use
              className="use"
              xlinkHref="#gentle-wave"
              x="100"
              y="3"
              fill="rgba(96, 138, 245,0.5)"
            />
            <use
              className="use"
              xlinkHref="#gentle-wave"
              x="100"
              y="5"
              fill="rgba(96, 138, 245,0.3)"
            />
            <use
              className="use"
              xlinkHref="#gentle-wave"
              x="100"
              y="7"
              fill="rgba(96, 138, 245, 1)"
            />
          </g>
        </svg>
      {/* <!--Waves end--> */}

      <svg
        className="wvees"
        width="428"
        height="205"
        // viewBox="0 0 428 205"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-96 205L-66.3667 179.375C-36.7333 153.75 22.5333 102.5 81.8 102.5C141.067 102.5 200.333 153.75 259.6 153.75C318.867 153.75 378.133 102.5 437.4 94.0117C496.667 84.8828 555.933 120.117 615.2 110.988C674.467 102.5 733.733 51.25 763.367 25.625L793 0V205H763.367C733.733 205 674.467 205 615.2 205C555.933 205 496.667 205 437.4 205C378.133 205 318.867 205 259.6 205C200.333 205 141.067 205 81.8 205C22.5333 205 -36.7333 205 -66.3667 205H-96Z"
          fill="#4581F6"
        />
      </svg>

      {/* </div> */}
    </div>
  );
};

export default Footer;
