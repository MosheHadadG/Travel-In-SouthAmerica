import React from "react";
import "./NavBar.css"
import "./NavBarResponsive.css"

function NavBar() {
  return (
    <div className="header">
    <div className="header-navbar">
      <div className="logo">
        <p><span className="grey"><i class="fa-solid fa-plane-departure"></i> TISA</span> <span className="logoSmall">Travel In South America</span></p>
        {/* <h1><span className="grey">T</span>ravel&nbsp; 
        <span className="grey">I</span>n&nbsp; 
        <span className="grey">S</span>outh<span className="grey">A</span>merica</h1> */}
      </div>
    </div>
    <div className="sub-header"></div>
    </div>

  );
}

export default NavBar;