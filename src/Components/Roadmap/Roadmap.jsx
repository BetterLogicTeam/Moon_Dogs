import React from "react";
import "./Roadmap.css";

export default function Roadmap() {
  return (
    <div className="mmain_roadmap" id="roadmap" >
      <h1 className="main_mdh">Roadmap</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card_content">
              <div className="d-flex justify-content-center">
                <div className="circular">
                  <p>Q3</p>
                </div>
              </div>
              <ul>
                <li className="card_content_i">
                New Website and Branding{" "}
                </li>
                <li className="card_content_i">
                  {" "}
                  Social Media Channels{" "}
                </li>
                <li className="card_content_i">
                Social Media Marketing
                </li>
                <li className="card_content_i">
                Release 3 of our many DOGGIE NFTs for presale 
                </li>
                <li className="card_content_i">
                Applications and Reviews
                </li>
                <li className="card_content_i">
                CoinSniper Application
                </li>

              </ul>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="card_content">
              <div className="d-flex justify-content-center">
                <div className="circular">
                  <p>Q4</p>
                </div>
              </div>
              <ul>
                <li className="card_content_i">
                MoonDogg Ecosystem{" "}
                </li>
                <li className="card_content_i">
                  {" "}
                  Community / Team Building{" "}
                </li>
                <li className="card_content_i">
                AMA's & Giveaways
                </li>
                <li className="card_content_i">
                Gain More Social Followers
                </li>
                <li className="card_content_i">
                COIN GECKO And COINMARKET CAP Applications
                </li>
                <li className="card_content_i">
                Expand Community On Other Platform
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="card_content">
              <div className="d-flex justify-content-center">
                <div className="circular">
                  <p>Q1</p>
                </div>
              </div>
              <ul>
                <li className="card_content_i">
                MoonDogg Swap{" "}


                </li>
                <li className="card_content_i">
                  {" "}
                  Listing on Major Exchanges{" "}
                </li>
                <li className="card_content_i">
                Influencer Marketing Push
                </li>
                <li className="card_content_i">
                NFT Collection Launch
                </li>
                <li className="card_content_i">
                Further Ecosystem Development
                </li>
                {/* <li className="card_content_i">
                Further Ecosystem Development
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
