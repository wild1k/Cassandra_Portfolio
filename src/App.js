import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";


class App extends Component {
  render() {
    return (
      <div>
            <header>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Cassandra Chamberlain</h1>
              
              <div>
                <a className="btn btnColor" href="https://www.linkedin.com/in/cassandra-chamberlain-875794166/"><i className="fab fa-linkedin"></i></a>
               <a className="btn btnColor" href="https://github.com/wild1k"><i className="fab fa-github"></i></a> 
               <a className="btn btnColor" href="https://1drv.ms/w/s!AhJEfkE7YCh9k18krxpev1ICKey3?e=siMHVC"><i className="fab fa-file-text" aria-hidden="true"></i>Resume</a>
              </div>
                <nav>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <a className="nav-link active" href="index.html">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                      
                    </ul>
           
                </nav>   
            </div>
        </div>
    </header>
        <section>
          <div className="container fluid">
            <div className="card border-secondary d-flex">
              <h2 className="cardName">About Me</h2>
              <div className="card-header">
                <div className="container">
                  <div className="row">
                    <div className="col-sm col-md col-lg">
                      <img
                        src="./utils/portfoliopic.JPG"
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
                        {" "}
                        Full-Stack Web developer: University of Washington{" "}
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
   
          <footer className="d-flex justify-content-center footerColor">
          <div>
         Created By:
         <br/>
           <p>Cassandra Chamberlain</p>
         CONTACT ME:
         <br/>
         Email:
          CassandraChamberlain@ymail.com
         <br/>
         Phone: 206-939-9997
         <br/>
         Address: 13029 22nd Ave S,
         <br/>
         SeaTac, WA 98168
         <br/>
       </div>
       </footer>
       </div>
    );
  }
}
export default App;

{
  /* <BrowserRouter>
      
      <Navigation/>
      <Switch>
      <Route exact path="/Home" component={Home}/>
      </Switch>
    </BrowserRouter> */
}
