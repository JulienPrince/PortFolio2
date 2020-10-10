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
        <h2 className="contact_title">Contact</h2>
        <div className="contact_content">
          <div className="contact_column contact_left">
            <div className="contact_text">Infos de contact</div>
            <p>
              Vous avez un projet en tête? Écrivez-moi! Faisons quelque chose de
              génial ensemble. Vous avez des missions freelance ou des projets à
              me proposez , ou si vous souhaitez me contacter pour un devis
              n’hésitez pas à me contacter directement ou en utilisant le
              formulaire, je serais heureuse de vous répondre dans les plus
              brefs délais.
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
                    <div className="sub-title">Prince Julien</div>
                  </div>
                </div>
                <div className="row">
                  <div className="info_icon">
                    <FaFacebook />
                  </div>
                  <div className="info">
                    <div className="head">Facebook</div>
                    <div className="sub-title">Wick Jhone</div>
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
                    <div className="sub-title">Fianarantsoa, Madagascar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_column contact_right">
            <div className="contact_text">Envoyez-moi un message</div>
            <form action="#" onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    placeholder="votre nom"
                    required
                    name="name"
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="votre Email"
                    required
                    name="email"
                  />
                </div>
              </div>
              <div className="field subject">
                <input
                  type="text"
                  placeholder="Objet"
                  required
                  name="subject"
                />
              </div>

              <div className="field textarea">
                <textarea
                  placeholder="Comment puis-je vous aider?"
                  name="message"
                ></textarea>
              </div>
              <div className="button">
                <Button type="submit">Envoyer Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
