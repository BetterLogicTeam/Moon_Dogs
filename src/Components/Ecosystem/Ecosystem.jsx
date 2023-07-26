import React from "react";
import "./Ecosystem.css";
import eco from "../Assets/eco.svg"
export default function Ecosystem() {
  return (
    <div className="main_ecosysytem" id="ecosystem">
      <div className="container">
              <h6 className="main_heading_eco" style={{ color: "#00ff80" }}>Ecosystem</h6>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5">
            <div className="right_eco_content">
              <h6>Payment Method</h6>
              <p>MoonDogg crypto token can be used as a decentralized payment method within the MoonDogg ecosystem. Users can make fast and secure transactions using the token for various goods and services offered by participating merchants and partners.</p>
              <h6>Staking and Rewards</h6>
              <p>Holders of MoonDogg crypto token can participate in staking programs to earn passive income. By staking their tokens, users can contribute to network security and stability while being rewarded with additional MoonDogg tokens as an incentive.</p>
              <h6> Decentralized Finance (DeFi) Applications:</h6>
              <p>MoonDogg crypto may be integrated into various DeFi applications, such as decentralized exchanges (DEXs), lending platforms, and liquidity pools. Users can leverage these DeFi services to earn interest, swap tokens, and participate in yield farming, all while utilizing MoonDogg tokens as part of these financial activities.</p>
              {/* <h6>job hiring platform</h6>
              <p>employers and job seekers</p> */}
            </div>
          </div>
          <div className="col-md-5">
           <img className="w-100" src={eco} alt="" />
         
          </div>
        </div>
      </div>
    </div>
  );
}
