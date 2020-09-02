import React from "react";
import axios from "axios";
import "../components/index.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3000/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }
  

  render() {
    return (
      <section>
        <div className="container ">
          <div className="card contactForm m-5 p-5">
            <h2 className="cardName">
              Contact Me
            </h2>
            <div className="Contact">
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="row">
                  <div className="form-row ml-1 col-12 form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                      placeholder="Jane Doe"
                    ></input>
                  </div>

                  <div className="form-group ml-1 col-12 row">
                    <label id="user_email" htmlFor="inputEmail">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.onEmailChange.bind(this)}
                      className="form-control"
                      placeholder="Enter email"
                    ></input>
                  </div>

                  <div className="form-group ml-1 col-12 row">
                    <label htmlFor="message">Message</label>
                    <input
                    type="text"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                    className="form-control mb-2"></input>
                  </div>

                  <div class="form-row ml-1 col-sm-10 row">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }



}

export default Contact;
