import React from "react";
import emailjs from "emailjs-com";

import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarked,
  FaPhone,
} from "react-icons/fa";
import { Button } from "@material-ui/core";
import "./contact.css";

const Contact = () => {
  //utilisation d'emailJs

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "PortFolio",
        "template_xjxdjmh",
        e.target,
        "user_3g59h8dX7eN4hnNVsmTvM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact_max-width">
        <h2 className="contact_title">Contact us</h2>
        <div className="contact_content">
          <div className="contact_column contact_left">
            <div className="contact_text">Contact Information</div>
            <p>
              Do you have a project in mind? Write to us ! Let's do something
              great together. You have freelance missions or projects to propose
              us, or if you want to contact us for a quote do not hesitate to
              contact us directly or by using the form, we will be happy to
              answer you as soon as possible.
            </p>

            <div className="icons">
              <div className="info_gauch">
                <div className="row">
                  <div className="info_icon">
                    <FaEnvelope />
                  </div>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">prince.julienh@gmail.com</div>
                  </div>
                </div>
                <div className="row">
                  <div className="info_icon">
                    <FaLinkedin />
                  </div>
                  <div className="info">
                    <div className="head">LinkedIn</div>
                    <div className="sub-title">
                      linkedin.com/in/prince-julien-445a3916a
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="info_icon">
                    <FaFacebook />
                  </div>
                  <div className="info">
                    <div className="head">Facebook</div>
                    <div className="sub-title">John Wick</div>
                  </div>
                </div>
              </div>
              <div className="info_droit">
                <div className="row">
                  <div className="info_icon">
                    <FaPhone />
                  </div>
                  <div className="info">
                    <div className="head">Phone</div>
                    <div className="sub-title">+261347124289</div>
                  </div>
                </div>
                <div className="row">
                  <div className="info_icon">
                    <FaMapMarked />
                  </div>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Madagascar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_column contact_right">
            <div className="contact_text">Send us a message</div>
            <form action="#" onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    name="name"
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    name="email"
                  />
                </div>
              </div>
              <div className="field subject">
                <input
                  type="text"
                  placeholder="Object"
                  required
                  name="subject"
                />
              </div>

              <div className="field textarea">
                <textarea
                  placeholder="How can we help you ?"
                  name="message"
                ></textarea>
              </div>
              <div className="button">
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
