import { Store } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div className="navbar bg-orange-300 shadow-sm relative z-50">
      {/* Start */}
      <div className="navbar-start">
        {/* Dropdown untuk mobile */}
        <div className="dropdown">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu dropdown di mobile */}
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-orange-200 rounded-box w-52 z-50">
              <li>
                <Link to="/" onClick={() => setDropdownOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                {/* Tombol untuk submenu */}
                <button
                  onClick={() => setSubmenuOpen(!isSubmenuOpen)}
                  className="flex justify-between items-center w-full"
                >
                  Katalog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${
                      isSubmenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Submenu */}
                {isSubmenuOpen && (
                  <ul className="p-2 bg-orange-100 rounded mt-1">
                    <li>
                      <Link
                        to="/katalog#makanan"
                        onClick={() => {
                          setDropdownOpen(false);
                          setSubmenuOpen(false);
                        }}
                      >
                        Makanan & Minuman
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/katalog#kuliah"
                        onClick={() => {
                          setDropdownOpen(false);
                          setSubmenuOpen(false);
                        }}
                      >
                        Kebutuhan Kuliah
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/contact" onClick={() => setDropdownOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Logo / Judul */}
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <Store /> Kantin HMJ MI
        </Link>
      </div>

      {/* Center untuk desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer">Katalog</span>
            {/* Submenu untuk desktop */}
            <ul className="absolute hidden group-hover:block bg-orange-200 mt-2 rounded shadow">
              <li>
                <Link
                  to="/makan"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Makanan & Minuman
                </Link>
              </li>
              <li>
                <Link
                  to="/katalog"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Kebutuhan Kuliah
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Kontak</Link>
          </li>
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 md:w-48 pr-10"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <button className="btn bg-white text-black hover:bg-orange-100">
          Login
        </button>
      </div>
    </div>
  );
}

export default NavBar;
