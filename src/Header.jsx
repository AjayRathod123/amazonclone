import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import amazonlogo from "./images/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={amazonlogo} alt="logo" />
        </NavLink>
      </div>
      <div className="header__input">
        <input className="search__input" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__right__nav">
        <NavLink to="/login">
          <div className="right__nav__option">
            <span className="header__optionline__one">Hello Guest</span>
            <span className="header__optionline__two">Sign in</span>
          </div>
        </NavLink>
        <div className="right__nav__option">
          <span className="header__optionline__one">Returns</span>
          <span className="header__optionline__two"> & Order</span>
        </div>
        <div className="right__nav__option">
          <span className="header__optionline__one">Your</span>
          <span className="header__optionline__two">Prime</span>
        </div>
      </div>
      <div className="header__basket">
        <NavLink to="/checkout">
          <ShoppingBasketIcon className="basket__img" />
        </NavLink>
        <span className="header__basket basket__count">{basket?.length}</span>
      </div>
    </div>
  );
};

export default Header;
