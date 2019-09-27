import React from "react";
import logo from "../img/nasa-logo.png";
import { Image } from "semantic-ui-react";

function Header() {
  return (
    <header>
      <Image src={logo} alt="NASA logo" size="large" centered />
    </header>
  );
}

export default Header;