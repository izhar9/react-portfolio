import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_596f2sa",
        "template_imbhut6",
        form.current,
        "ioK2Z6BeIXXet_yXv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a
                          href="https://www.linkedin.com/in/izhar-idrisi-826b2521b/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a
                          href="https://github.com/izhar9"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Enter your Name"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Enter Your Email Address"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Write your message"
                          className="mb-3"
                        />
                      </div>
                      <div className="row px-3">
                        <button className="button">SEND MESSAGE</button>
                      </div>
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
