import React from "react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div className="main_faq_bbg" id="faq">
      <h1 className="main_mdh">FAQ</h1>
      <p className="faq_par">
      
Welcome to our comprehensive FAQ section, designed to address common queries about MoonDog and its wide range of services. If you can't find the answer to your question here, don't hesitate to reach out to our dedicated support team. You can contact us via the provided contact form or utilize our AI assistant for further assistance. We are here to ensure you have a seamless and enjoyable experience with MoonDog.
      </p>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>what is moondogg?</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                    {" "}
                    MoonDogg is an innovative blockchain-based platform that has revolutionized the concept of virtual collaboration and remote work. Utilizing cutting-edge blockchain technology and the metaverse, MoonDog offers a dynamic market economy and an NFT marketplace that empowers users to engage in seamless and secure transactions.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>why moondog?</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                    {" "}
                    MoonDogg leverages cutting-edge blockchain technology and the metaverse to create a unique platform that fosters virtual collaboration and remote work. Its forward-thinking approach opens up new possibilities for users to engage in a seamless and secure environment.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>how can i buy $moondog</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                    {" "}
            
MoonDogg tokens (MOON) are available for purchase during our presale event, and we accept three major cryptocurrencies as payment: USDT (Tether), ETH (Ethereum), and USDC (USD Coin). This allows potential investors to participate in the presale using their preferred cryptocurrency or stablecoin.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>what is next for moondog?</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                    {" "}
                    Following the pre-sale, our primary focus will be on the comprehensive development and successful launch of the MoonDog platform, including the NFT marketplace and Metaverse app. Our team is committed to delivering a seamless and user-friendly experience, ensuring that users can effortlessly engage in virtual collaboration and remote work
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
