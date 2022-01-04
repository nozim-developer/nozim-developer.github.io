import React from "react";
// import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css";
import $ from 'jquery'
// import Navcontent from "./Navcontent";



class Navbar extends React.Component {

  componentDidMount() {
      $(document).on('click','.Menu a', function(){
         $(this).addClass('bind').siblings().removeClass('bind')
      });
   }

  // const  = [active,SetActive]=useState('')

render(){
  return (
    <div className="Navbar">
      <div className="Logo">
        <span className="text_of_logo">
          <span className="N">N</span>ozim<span className="bold">B</span>
          <span className="ek">ek</span>
        </span>
      </div>
      <div className="Nav_Menu">
        <div className="Menu">
          <Router>
          <a href='#about_tag' className='About hover'>About</a>
          <a href='#passion_tag' className="Passions hover">Passions</a>
          <a href='#portfolio_tag' className="Portfolio hover">Portfolio</a>
          <a href='#contact_tag' className="Contact_Me_btn hover">Contact Me</a>
          </Router>
        </div>
      </div>
      {/* <Navcontent/> */}
    </div>
  );
};
}
export default Navbar;
