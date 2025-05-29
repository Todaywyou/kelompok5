import { Store } from 'lucide-react';
import React from 'react'

function NavBar() {
  return (
    <div>
      <div className="navbar bg-orange-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>Katalog</a>
                <ul className="p-2">
                  <li>
                    <a>Makanan & Miuman</a>
                  </li>
                  <li>
                    <a>Kebutuhan Kuliah</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Store /> Kantin HMJ MI
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Katalog</summary>
                <ul className="p-2">
                  <li>
                    <a>Makanan&Minuman</a>
                  </li>
                  <li>
                    <a>Kebutuhan Kuliah</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Kontak</a>
            </li>
          </ul>
        </div>
        {/* Group search and button together */}
        <div className="navbar-end flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 p-0 bg-transparent border-none cursor-pointer"
              tabIndex={0}
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar