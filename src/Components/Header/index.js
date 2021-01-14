import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-md">
          <Link to="/">
            <h1 className="navbar-brand">Artist Hunter</h1>
          </Link>
        </div>
      </nav>
    </>
  );
}
