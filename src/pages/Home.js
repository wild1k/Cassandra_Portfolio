import React from "react";
import portfolioPic from "../utils/portfoliopic.JPG";
import profileBackGround from '../utils/profileBackGround.jpg';
import '../components/index.css';


const Home = () => {
  return (
    <div className='mb-5 headerPic'>
        <section className=''>
          <div className="container fluid ">
            <div className="card d-flex">
              <h2>About Me</h2>
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <img
                        src={portfolioPic}
                        alt="professional"
                        height="100"
                        width="250"
                        className="img-fluid rounded"
                      />
                    </div>

                    <div className="col-sm col-md col-lg">
                      <p>
                        Hi, My name is Cassandra and I am a current student at
                        University of Washington. I have studied web development
                        in the past and currently my skills set includes the
                        following:{" "}
                      </p>
                      <br />
                      <ul>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Handlebars</li>
                        <li>API</li>
                        <li>Sequelize</li>
                        <li>Express</li>
                        <li>mySQL</li>
                        <li>Node</li>
                        <li>JQuery</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                      </ul>
                      <br />
                      <p>
                        2020 Full-Stack Web developer: University of Washington{" "}
                        <br /> Bachelor of Science Degree: Missouri State
                        University in 2006 <br /> Associate of Arts Degree:
                        Longview Community College{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Home;
