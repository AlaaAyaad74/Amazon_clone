import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { UseStateValue } from "../Stateprovider";
function Header() {
  const [{ basket }] = UseStateValue();
  // console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__Search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__SearchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__Link">
          <div className="header__Option">
            <span className="header__LineOne">Hello</span>
            <span className="header__LineTwo">Sign In</span>
          </div>
        </Link>
        <Link className="header__Link">
          <div className="header__Option">
            <span className="header__LineOne">Returns</span>
            <span className="header__LineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header__Link">
          <div className="header__Option">
            <span className="header__LineOne">Your</span>
            <span className="header__LineTwo">Prime</span>
          </div>
        </Link>
      <Link to="/checkout" className="header__Link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__LineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
      </div>

    </nav>
  );
}

export default Header;
