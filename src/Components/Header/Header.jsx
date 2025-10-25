import React from "react";
import './header.scss';


import UpperHeader from "./UpperHeader/UpperHeader";
import LowerHeader from "./LowerHeader/LowerHeader";

function Header() {
    return (
  <>
  <header className="header">
    <UpperHeader />
    <LowerHeader />
    </header>
  </>
    );
}

export default Header;