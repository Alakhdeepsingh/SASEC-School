import React from 'react'
import { HashLink } from "react-router-hash-link";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <h1>Sir Alakhdeep Singh Education Center, Kanpur</h1>
      <main>
        <HashLink  to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink  to={"/#about"}>About</HashLink>
        <HashLink  to={"/#brand"}>Brand</HashLink>
        <Link to={"/activity"}>Activity</Link>
        {/* <Link to={"/"}>Home</Link> */}
      </main>
    </nav>
  )
};

export default Header;

