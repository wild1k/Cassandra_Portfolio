import React from "react";


const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="card m-5 p-5">
          <h2 className="cardName" style={{width: 200}}>
            Contact Me
          </h2>
          <div>
            <form>
              <div className="row">
                <div className="form-row ml-1 col-12">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Jane Doe"
                  ></input>
                </div>

                <div className="form-group ml-1 col-12 row">
                  <label id="user_email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  ></input>
                </div>

                <div className="form-group ml-1 col-12 row">
                  <label>Message</label>
                  <input type="text" className="form-control mb-2"></input>
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
};

export default Contact;
