import React from "react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div className="main_faq_bbg" id="faq">
      <h1 className="main_mdh">FAQ</h1>
      <p className="faq_par">
        The frequently asked questions (FAQ) section aims to provide answers to
        common queries about MoonDog and its services. If you have any questions
        that are not addressed here, please do not hesitate to reach out to our
        support team via the contact form or using our AI assitant for further
        help.
      </p>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>what is moondog?</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    libero illum neque blanditiis similique enim quod inventore
                    non consequatur, ab laudantium sapiente eum ipsa velit, sunt
                    maxime tempora quis laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>why moondog?</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    libero illum neque blanditiis similique enim quod inventore
                    non consequatur, ab laudantium sapiente eum ipsa velit, sunt
                    maxime tempora quis laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>how can i buy $moondog</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    libero illum neque blanditiis similique enim quod inventore
                    non consequatur, ab laudantium sapiente eum ipsa velit, sunt
                    maxime tempora quis laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>what is next for moondog?</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    libero illum neque blanditiis similique enim quod inventore
                    non consequatur, ab laudantium sapiente eum ipsa velit, sunt
                    maxime tempora quis laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
