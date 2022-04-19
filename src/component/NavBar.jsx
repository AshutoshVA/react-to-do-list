import React from "react";
import "./NavBar.css"
const NavBar = () => {
  return (
    <div>
      {/* Nav bar starts  */}
      <nav className="navbar navbar-expand-lg navbar-light nav-bg">
        <div className="container-fluid">
          <a className=" logo navbar-brand" href="#">
            RZ
          </a>
        </div>
      </nav>

      {/* Nav Bar ends */}
    </div>
  );
};

export default NavBar;
