import React from "react";
import { Link }  from 'react-router-dom';
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Righteous'}}>
          GREEN MARKET
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{fontFamily:'Oswald',letterSpacing:'1.3px'}}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fruits" style={{fontFamily:'Oswald',letterSpacing:'1.3px'}}>
                FRUITS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/salads" style={{fontFamily:'Oswald',letterSpacing:'1.3px'}}>
                SALADS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/juices" style={{fontFamily:'Oswald',letterSpacing:'1.3px'}}>
                JUICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{fontFamily:'Oswald',letterSpacing:'1.3px'}}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
