import { Link, useLocation } from "react-router-dom";

import "./navbar.scss";

import logo from "../../images/logo.png";
import shopIcon from "../../images/icon.svg";
import { useSelector } from "react-redux";

function Navbar() {
  const { pathname } = useLocation();
  const shop = useSelector((state) => state.pizzas.shop);

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      {pathname === "/korzinka" ? (
        " "
      ) : (
        <Link to="/korzinka" className="korzinka">
          <div className="iconDiv">
            <img style={{ marginRight: "6px" }} src={shopIcon} alt="" />{" "}
            <span style={{ marginRight: "6px" }}>Cart </span>
            {shop.length > 0 && <span className="circle">{shop.length}</span>}
            
          </div>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
