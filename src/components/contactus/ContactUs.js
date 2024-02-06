import React from "react";
import { useState } from "react";
import "./ContactUs.css";
import { Fade } from "react-reveal";
const ContactUs = () => {
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    alert("data send succesfully");
    e.preventDefault();
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      message: "",
    });
  };
  return (
    <>
      <Fade bottom duration={2000} distance="40px">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="personal-info">
              <div>
                <label>Firstname</label>
                <input
                  type="text"
                  name="firstname"
                  value={formdata.firstname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Lastname</label>
                <input
                  type="text"
                  name="lastname"
                  value={formdata.lastname}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="contact-info">
              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formdata.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formdata.mobile}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="message">
              <label>Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                value={formdata.message}
                onChange={handleInputChange}
                style={{ resize: "none" }}
              />
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Fade>
    </>
  );
};

export default ContactUs;
