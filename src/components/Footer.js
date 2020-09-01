import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer page-footer font-small">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-4 py-3">
            <a
              href="https://www.facebook.com/cassandra.chamberlain.9"
              className="fb-ic"
            >
              <i className="fab fa-facebook-f fa-lg white-text mr-5 fa-2x">
                {" "}
              </i>
            </a>

            <a
              href="https://www.linkedin.com/in/cassandra-chamberlain-875794166/"
              className="li-ic"
            >
              <i className="fab fa-linkedin-in fa-lg white-text fa-2x ">
                {" "}
              </i>
            </a>
           <hr/>
            <div class="footer-copyright">
              © 2020 Created By:
              <p> Cassandra Chamberlain</p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
