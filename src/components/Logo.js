import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <StaticImage
      src="../images/logo.png"
      className="h-12 w-12 rounded-full shadow-md"
    />
  );
};

export default Logo;