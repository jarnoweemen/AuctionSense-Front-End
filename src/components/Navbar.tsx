import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownNav from "./navbar/DropdownNav";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const burgerClick = () => {
    if (navbarOpen)
    {
      setNavbarOpen(false);
    }
    else {
      setNavbarOpen(true);
    }
  };


  return (
    <nav className="bg-orange-500 text-white">
      <div className="flex flex-wrap">
        <div className="inline-flex text-2xl">LOGO PLACEHOLDER</div>
        <button className="sm:hidden ml-auto inline-flex items-center justify-center px-2" onClick={burgerClick}>&#9776;</button>
        <div className={"w-full sm:w-auto sm:inline-flex sm:space-x-4 " + (navbarOpen ? '' : 'hidden')}>
          <DropdownNav />
          <Link className="block hover:bg-orange-400" to="">
            Populair
          </Link>
          <Link className="block hover:bg-orange-400" to="">
            New
          </Link>
        </div>
      </div>
    </nav>
  );
}
