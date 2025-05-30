import { Store } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar bg-orange-300 shadow-sm relative z-50">
      {/* Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="btn btn-ghost lg:hidden"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            > */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/* </svg> */}
          </button>

          {/* Mobile Menu */}
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-orange-200 rounded-box w-52 z-50">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>MENU</summary>
                  <ul className="p-2 bg-orange-100 rounded">
                    <li>
                      <Link to="/makan">Makanan & Minuman</Link>
                    </li>
                    <li>
                      <Link to="/Katalog">Kebutuhan Kuliah</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/kontak">Contact</Link>
              </li>
            </ul>
          )}
        </div>

        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <Store /> Kantin HMJ MI
        </Link>
      </div>

      {/* Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Katalog</summary>
              <ul className="p-2 bg-orange-200 rounded">
                <li>
                  <Link to="/makan">Makanan & Minuman</Link>
                </li>
                <li>
                  <Link to="/Katalog">Kebutuhan Kuliah</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/kontak">Kontak</Link>
          </li>
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end gap-2">
        <button className="btn bg-white text-black hover:bg-orange-100">
          Login
        </button>
      </div>
    </div>
  );
}

export default NavBar;
