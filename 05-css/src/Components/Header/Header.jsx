import React from "react";
import header from "./Header.module.css"; 

const Header = () => {
  return (
    <div className={header.header}>
      <h3>Nikunj</h3>
      <button>Login</button>
    </div>
  )
};

export default Header;
