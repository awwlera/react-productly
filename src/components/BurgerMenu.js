import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.scss";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <a className="menu-item" href="#product">
        Product
      </a>
      <a className="menu-item" href="#customers">
        Customers
      </a>
      <a className="menu-item" href="#pricing">
        Pricing
      </a>
      <a className="menu-item" href="#resources">
        Resources
      </a>
      <a className="btn" href="/">
        Sign in
      </a>
      <a className="btn" href="/">
        Sign up
      </a> 
    </Menu>
  );
};

export default BurgerMenu;