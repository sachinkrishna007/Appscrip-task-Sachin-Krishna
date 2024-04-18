import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "@styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="head">
        <h1 className="logo">LOGO</h1>
        <div className="icons">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faHeart} /> 
          <FontAwesomeIcon icon={faShoppingBag} />
          <FontAwesomeIcon icon={faUser} /> 
          <div className="language-dropdown">
            <select>
              <option value="en">Eng</option>
              <option value="fr">Fre</option>
              <option value="es">Spa</option>
            
            </select>
          </div>
        </div>
      </div>
      <div className="items">
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORIES</p>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>
    </div>
  );
};

export default Navbar;
