import { Link } from "react-router-dom";
import DropdownNav from "./navbar/DropdownNav";
import LinkNav from "./navbar/Link";

export default function Navbar() {
  const burgerClick = () => {
    document.querySelector(".mobile-menu")?.classList.toggle("hidden");
  };

  return (
    <nav className="bg-orange-500 shadow text-white">
      <div className="max-w-7xl mx-auto py-2">
        <div className="justify-between flex items-center">
          <div className="flex space-x-5 items-center">
            <img
              className="h-11"
              alt="AuctionSense logo"
              src="/images/LogoHeading.png"
            ></img>
            <div className="hidden md:flex space-x-5 items-center">
              <DropdownNav />
              <LinkNav name="Populair" link="/Populair" />
              <LinkNav name="New" link="/New" />
            </div>
          </div>
          <input
            className="hidden lg:flex outline-none bg-white border border-gray-500 w-80 px-2 text-gray-400"
            placeholder="Search..."
            maxLength={50}
          ></input>
          <div className="hidden md:flex space-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <div>Username</div>
          </div>
          <div className="items-center md:hidden">
            <button onClick={burgerClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-menu hidden bg-gray-200 text-black">
        <Link to="" className="block py-2 px-2">
          Categories
        </Link>
        <Link to="" className="block py-2 px-2">
          Populair
        </Link>
        <Link to="" className="block py-2 px-2">
          New
        </Link>
      </div>
    </nav>
  );
}
