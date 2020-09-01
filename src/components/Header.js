import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Cassandra Chamberlain</h1>

          <div>
            <a
              className="btn btnColor"
              href="https://www.linkedin.com/in/cassandra-chamberlain-875794166/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="btn btnColor" href="https://github.com/wild1k">
              <i className="fab fa-github"></i>
            </a>
            <a
              className="btn btnColor"
              href="https://1drv.ms/w/s!AhJEfkE7YCh9k18krxpev1ICKey3?e=siMHVC"
            >
              <i className="fab fa-file-text" aria-hidden="true"></i>Resume
            </a>
          </div>
          <nav>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link to="/Projects">
                  <li className="nav-link">Projects</li>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Home">
                  <li className="nav-link">Home</li>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact">
                  <li className="nav-link">Contact</li>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
