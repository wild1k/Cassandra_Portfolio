import React from "react";
import wavel from "../utils/wavel.png";
import quizPic from "../utils/quizPic.png";
import pure2 from "../utils/pure2.png";
import passwordGen from "../utils/passwordGen.png";
import gatherNow from "../utils/gatherNow.png";
import burgerApp from "../utils/burgerApp.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container  mobile-responsive">
      <div className=" mb-5">
        <h2>Portfolio</h2>

        <div className="row">
          <div className="col-md col-sm d-flex justify-content-center">
            <a href="https://wild1k.github.io/Wavel-/" target="#blank">
              <img
                src={wavel}
                alt="wavel project"
                height="300"
                width="350"
                className="imgSize my-5 img-thumbnail "
              />
            </a>
          </div>
          <div className="col-md col-sm d-flex justify-content-center">
            <a href="https://purecloudone.herokuapp.com/" target="#blank">
              <img
                src={pure2}
                alt="purecloud project"
                height="350"
                width="350"
                className="imgSize img-fluid my-5 img-thumbnail"
              />{" "}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md col-sm d-flex justify-content-center">
            <a
              href="https://wild1k.github.io/password-generator-homework/"
              target="#blank"
            >
              <img
                src={passwordGen}
                alt="password generator project"
                height="300"
                width="350"
                className="imgSize img-fluid my-5 img-thumbnail"
              />
            </a>
          </div>
          <div className="col-md col-sm d-flex justify-content-center">
              <div>
            <a
              href="https://mighty-woodland-97649.herokuapp.com/?"
              target="#blank"
            >
              <img
                src={burgerApp}
                alt="burger eating app"
                height="200"
                width="250"
                className="imgSize img-fluid my-5 img-thumbnail"
              />
            </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md col-sm d-flex justify-content-center">
            <a
              href="https://wild1k.github.io/quiz-Api-s-Homework/"
              target="#blank"
            >
              <img
                src={quizPic}
                alt="code quiz"
                height="300"
                width="350"
                className="imgSize img-fluid my-5 img-thumbnail"
              />
            </a>
          </div>
          <div className="col-md col-sm d-flex justify-content-center">
            <a href="https://gather-now.herokuapp.com/" target="#blank">
              <img
                src={gatherNow}
                alt="gatherNow"
                height="200"
                width="250"
                className="imgSize img-fluid my-5 img-thumbnail"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
