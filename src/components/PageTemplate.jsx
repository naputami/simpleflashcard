import React from "react";

export const PageTemplate = ({ children }) => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="pb-16">
          <div className="navbar bg-base-300">
            <div className="navbar-start">
              <a href="/" className="btn btn-ghost text-xl">
                Simple English Flash Card
              </a>
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
