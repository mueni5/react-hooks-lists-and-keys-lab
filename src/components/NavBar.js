import React from "react";
function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
  const displayedLinksTags = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>{displayedLinksTags}</nav>;
}

export default NavBar;

