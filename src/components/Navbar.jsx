import React from "react";
import logo from "../images/netflix-logo.png";

window.onscroll = () => {
  let nav = document.querySelector(".nav-container");
  let top = window.scrollY;
  if (top > 80) {
    nav.classList.add("nav-black");
  } else {
    nav.classList.remove("nav-black");
  }
};

export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <img className="nav-logo" src={logo} alt="" />
        <div className="nav-link-container"></div>
        <img
          className="smile-icon"
          src="https://occ-0-2041-3662.1.nflxso.net/art/0d282/eb648e0fd0b2676dbb7317310a48f9bdc2b0d282.png"
          alt=""
        />
      </div>
    </>
  );
}
