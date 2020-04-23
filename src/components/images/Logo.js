import React from "react";
import { Image } from "react-bootstrap";
const Logo = () => {
  return (
    <>
      <Image
        src="./images/gb_logo.png"
        alt="Geek Beacon Logo"
        thumbnail
        fluid
      />
    </>
  );
};

export default Logo;
