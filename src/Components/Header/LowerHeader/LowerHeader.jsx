import React from "react";
import './lowerHeader.scss';

import logo from '../../../assets/logo/logo.svg';
import logoBurger from '../../../assets/logo/logoBurger.svg';


function LowerHeader() {
    return (
  <>
  <div className="lower">
    <div className="logo-block">
      <img src={logoBurger} alt="logoBurger" className="logo-burger"/>
      <img src={logo} alt="logo" className="logo"/>


    </div>

    <div className="lower-right-block">
      <input type="text" />
      <div className="lower-right-block-text">
        <p>Sign In</p>
        <p>Cart</p>

      </div>

    </div>

  </div>
   
  </>
    );
} export default LowerHeader;