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
              <h6>metaverse</h6>
              <p>for all users</p>
              <h6>NFT marketplace</h6>
              <p>for all users</p>
              <h6> freelancing platform</h6>
              <p>buyers and sellers</p>
              <h6>job hiring platform</h6>
              <p>employers and job seekers</p>
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
