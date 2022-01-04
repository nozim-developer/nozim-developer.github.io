import React, { useState } from "react";
// import { Link, Router } from "react-router-dom";
// import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import Background from "./Compnents/Background/Background";
import Contact from "./Compnents/Main/Contact";
import Footer from "./Compnents/Main/Footer";
import Hero from "./Compnents/Main/Hero";
import Passions from "./Compnents/Main/Passions";
import Portfolio from "./Compnents/Main/Portfolio";
import Navbar from "./Compnents/Navbar/Navbar";

// let root = (document.querySelector(":root").style.background = "white");
// Create a function for getting a variable value
// function myFunction_get() {
//   // Get the styles (properties and values) for the root
//   var rs = getComputedStyle(document.querySelector(":root"));
//   // Alert the value of the --blue variable
//   alert(
//     "The value of --blue is: " + rs.getPropertyValue("--color_of_hover_text")
//   );
// }
function btns_bluelight() {
  // document.querySelector(".header").style.background =
  //   "linear-gradient(10deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%)";
  document.querySelector("body").style.background =
    "linear-gradient(10deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%)";
  document.querySelector(":root").style.setProperty("--color_of_text", "#fff");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_text", "#002265");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave1", "rgba(0, 34, 102,0.7)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave2", "rgba(0, 34, 102,0.5)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave3", "rgba(0, 34, 102,0.3)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave4", "rgba(0, 34, 102,1)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_texta", "#fff");
  document
    .querySelector(":root")
    .style.setProperty("--thumb", "rgba(255, 255, 255, 0.4)");
    document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_text_page", "white");
    document
    .querySelector(".hi")
    .style.setProperty("color", "rgba(0, 34, 102, 1)");
    document
    .querySelector(":root")
    .style.setProperty("--color_of_texts", "#14279b");
}
function btns_white() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_textt", "#002265");
  // document.querySelector(".header").style.background = "white";
  document.querySelector("body").style.background = "white";
  document
    .querySelector(":root")
    .style.setProperty("--color_of_text", "#002265");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_text", "rgba(96, 138, 245, 1)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_page2", "#14279b");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_someblue", "#14279b");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_text_page", "#002265");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave1", "rgba(0, 34, 102,0.7)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave2", "rgba(0, 34, 102,0.5)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave3", "rgba(0, 34, 102,0.3)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave4", "rgba(0, 34, 102,1)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_texta", "white");
  document.querySelector(":root").style.setProperty("--thumb", "#002265");
  document
    .querySelector(".hi")
    .style.setProperty("color", "transparent");
    document
    .querySelector(":root")
    .style.setProperty("--color_of_texts", "rgba(96, 138, 245, 1)");
}

const btns_black = () => {
  // document.querySelector(".header").style.background = "#002265";
  document.querySelector("body").style.background = "#002265";
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_text", "rgba(96, 138, 245, 1)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_someblue", "rgba(96, 138, 245, 1)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_page2", "rgba(96, 138, 245, 1)");
  document.querySelector(":root").style.setProperty("--color_of_text", "white");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_text_page", "white");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_texts", "rgba(96, 138, 245, 1)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_textt", "white");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave1", "rgba(255, 255,255,0.7)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave2", "rgba(255, 255,255,0.5)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave3", "rgba(255, 255,255,0.3)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_wave4", "rgba(255, 255,255,1)");
  document
    .querySelector(":root")
    .style.setProperty("--color_of_hover_texta", "#002265");
  document
    .querySelector(":root")
    .style.setProperty("--thumb", "rgba(255, 255, 255, 0.4)");
    document
    .querySelector(".hi")
    .style.setProperty("color", "transparent");
};

function App() {
  const [state, setState] = useState("");
  const toggleAccordion = () => {
    setState(state === "" ? "block" : "");
  };

  return (
    <div className="App">
      {/* <button
        style={{ display: "none" }}
        type="button"
        onClick={myFunction_get}
      >
        Get CSS Variable with JavaScript
      </button> */}
      <div className="header">
        <div className="buttons">
          <div onClick={btns_bluelight} className="ball bluelight"></div>
          <div onClick={btns_white} className="ball white"></div>
          <div onClick={btns_black} className="ball black"></div>
        </div>

        <div onClick={toggleAccordion} className="Navbar_logo">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule={"evenodd"}
              d="M1.5625 21.875H23.4375C24.3 21.875 25 21.175 25 20.3125C25 19.45 24.3 18.75 23.4375 18.75H1.5625C0.7 18.75 0 19.45 0 20.3125C0 21.175 0.7 21.875 1.5625 21.875ZM1.5625 14.0625H23.4375C24.3 14.0625 25 13.3625 25 12.5C25 11.6375 24.3 10.9375 23.4375 10.9375H1.5625C0.7 10.9375 0 11.6375 0 12.5C0 13.3625 0.7 14.0625 1.5625 14.0625ZM1.5625 6.25H23.4375C24.3 6.25 25 5.55 25 4.6875C25 3.825 24.3 3.125 23.4375 3.125H1.5625C0.7 3.125 0 3.825 0 4.6875C0 5.55 0.7 6.25 1.5625 6.25Z"
              fill="black"
            />
          </svg>
        </div>

        <Navbar />
      </div>
      <div className="Nav_Menu2" style={{ display: state }}>
        <div className="Menu">
          <a
            onClick={toggleAccordion}
            href="#about_tag"
            className="About hover"
          >
            About
          </a>
          <a
            onClick={toggleAccordion}
            href="#passion_tag"
            className="Passions hover"
          >
            Passions
          </a>
          <a
            onClick={toggleAccordion}
            href="#portfolio_tag"
            className="Portfolio hover"
          >
            Portfolio
          </a>
          <a
            onClick={toggleAccordion}
            href="#contact_tag"
            className="Contact_Me_btn hover"
          >
            Contact Me 
          </a>
        </div>
      </div>
      <div id="about_tag">
        {/* <div className="fixed-center">Scroll position: {scrollY}px</div> */}

        <Hero />
      </div>
      <div className="buttons2">
        <div onClick={btns_bluelight} className="ball bluelight"></div>
        <div onClick={btns_white} className="ball white"></div>
        <div onClick={btns_black} className="ball black"></div>
      </div>
      <Background />

      <Passions />
      {/* <Route>
        <Router>
          <Link
            to={{
              pathname: "/Portfolio",
              search: "?sort=name",
              hash: "#the-hash",
              state: { fromDashboard: true },
            }}
          />
        </Router>
      </Route> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
