import React from "react";
import FormOne from "../contact/FormOne";
import FormTwo from "../contact/FormTwo";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";

const AboutTwo = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us">
              <div className="section-heading heading-left">
                <span className="subtitle">CHAT GPT</span>
                <h3 className="title">Get Started with CHAT GPT</h3>
                <p>
                  ChatGPT is an artificial intelligence chatbot developed by
                  OpenAI and released in November 2022.
                </p>
              </div>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaGlobe /> API Integration
                  </Accordion.Header>
                  <Accordion.Body>
                    Integrate CHAT GPT in your Website via ChatGPT API.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaCompress /> Customization Prompt
                  </Accordion.Header>
                  <Accordion.Body>
                    Get AI reply based on the information that you will provide.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaCode /> Chat Box
                  </Accordion.Header>
                  <Accordion.Body>
                    Design your own chat box as you want.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box shadow-box mb--30">
              <div className="contact-form-box-header">
                <h3 className="title">Chat with AI</h3>
              </div>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
