import { Link } from "react-router-dom";
import "../css/components/Navbar.css";
import CategoriesDropdown from "./navbar/CategoriesDropdown";

export default function Navbar() {
  const MobileFunctionality = () => {
    var x = document.getElementById("myTopnav");

    if (x != null) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  };

  return (
    <div className="topnav" id="myTopnav">
      <div className="logonav">
        <Link to="/" >
          <img alt="AuctionSense logo" src="/images/Logo.png"></img>
        </Link>
      </div>
      <div className="dropdownleft">
        <button className="dropbtn">
          Categories
          <i className="fa fa-caret-down"></i>
        </button>
        <CategoriesDropdown />
      </div>
      <Link to="/Populair" >Populair</Link>
      <Link to="/New" >New</Link>
      <div className="dropdown">
        <button className="dropbtn">
          Rhoshandiatellyneshiaunneveshenk
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/" >Link 1</Link>
          <Link to="/" >Link 2</Link>
          <Link to="/" >Link 3</Link>
        </div>
      </div>
      <Link
        to="javascript:void(0);"
        className="icon"
        onClick={MobileFunctionality}
      >
        &#9776;
      </Link>
    </div>
  );
}
