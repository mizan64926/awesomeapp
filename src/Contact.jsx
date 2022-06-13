import React, { useState } from "react";
const Contact = () => {
  const [input, setinput] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const typeEvent = (event) => {
    const { name, value } = event.target;
    setinput((preval) => {
      return { ...preval, [name]: value };
    });
  };
  const formEvent = (e) => {
    e.preventDefault();
    alert(`${input.fullname}`);
  };

  return (
    <>
      <section id="contact_section">
        <div className="container-fluid">
          <div className="row">
            <h3 className="text-center">Contact US</h3>
            <div className="col-6 mx-auto mt-4">
              <form onSubmit={formEvent}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Fullname</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    name="fullname"
                    value={input.fullname}
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                    onChange={typeEvent}
                  />
                  <label for="exampleInputEmail1">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    name="phone"
                    value={input.phone}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Mobile number"
                    onChange={typeEvent}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="email"
                    value={input.email}
                    placeholder="name@example.com"
                    onChange={typeEvent}
                  />
                </div>
                <label for="exampleInputPassword1">Email address</label>
                <textarea
                  class="form-control"
                  onChange={typeEvent}
                  name="msg"
                  value={input.msg}
                />

                <button type="submit" class="btn btn-outline-dark px-4 mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
