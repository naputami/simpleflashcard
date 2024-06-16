import React from "react";

export const PageTemplate = ({ children }) => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="pb-16">
          <div className="navbar bg-base-300">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
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
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Sudah hafal</a>
                  </li>
                  <li>
                    <a>Belum hafal</a>
                  </li>
                </ul>
              </div>
              <a href="/" className="btn btn-ghost text-xl">
                Simple Flash Card
              </a>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Sudah hafal</a>
                </li>
                <li>
                  <a>Belum hafal</a>
                </li>
              </ul>
            </div>
          </div>
          <main className="mt-10 pb-8">{children}</main>
        </div>
        <footer className="absolute bottom-0 footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p> © {new Date().getFullYear()} - Nadia Puji Utami</p>
          </aside>
        </footer>
      </div>
    </>
  );
};
