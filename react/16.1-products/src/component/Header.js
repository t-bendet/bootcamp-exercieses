import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui menu">
      <Link className="item" to="/">
        HomePage
      </Link>
      <Link className="item" to="/products">
        Products
      </Link>
    </div>
  );
};

export default Header;
