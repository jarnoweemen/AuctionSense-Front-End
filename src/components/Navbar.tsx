import "../css/components/Navbar.css";

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
        <a href="#home">
          <img alt="AuctionSense logo" src="/images/Logo.png"></img>
        </a>
      </div>
      <div className="dropdownleft">
        <button className="dropbtn">
          Categories
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content-left">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a href="#populair">Populair</a>
      <a href="#new">New</a>
      <div className="dropdown">
        <button className="dropbtn">
          Rhoshandiatellyneshiaunneveshenk
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a
        href="javascript:void(0);"
        className="icon"
        onClick={MobileFunctionality}
      >
        &#9776;
      </a>
    </div>
  );
}
