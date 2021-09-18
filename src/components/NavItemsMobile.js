import React from "react";
import { Link } from "gatsby"

const StyledLink = ({ setDisplay, to, text }) => {
  return (
    <Link
      onClick={() => setDisplay("hidden")}
      to={to}
      activeClassName="font-bold"
      className="ml-2 text-lg"
    >
      {text}
    </Link>
  );
};

const NavItemsMobile = ({ display, setDisplay }) => {
  return (
    <div>
      <div className={display}>
        <div className="absolute left-0 top-14 right-0  w-full flex flex-col rounded-sm shadow-md space-y-6 bg-gray-100 p-4 tracking-tight backdrop-filter backdrop-blur">
          <StyledLink
            setDisplay={setDisplay}
            to="/bio"
            text="Bio"
          />
          <StyledLink
            setDisplay={setDisplay}
            to="/portafolio"
            text="Portafolio"
          />
          <StyledLink
            setDisplay={setDisplay}
            to="/contact"
            text="Contacto"
          />
        </div>
      </div>
    </div>
  );
};

export default NavItemsMobile;
