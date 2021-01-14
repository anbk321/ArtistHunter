import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-md">
          <h1 className="navbar-brand">Artist Hunter</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../About/index.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="../History/index.html">
                  History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
