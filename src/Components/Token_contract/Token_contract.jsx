import React from "react";
import "./Token_contract.css";
import { BiSolidCopy } from "react-icons/bi";
import tbg from "../Assets/tb.png";

export default function Token_contract() {
  return (
    <div className="main_token_C" id="tokenomics">
      <h1 className="main_mdh">Token Contract</h1>
      <div className="container">
        <div className="main_content_token mt-5">
          <div className="first_div">
            <h4>Address</h4>
            <p className="text-truncate">
            0xA6B8BC9500518F4C15F36151D1A41c8E59F244BD{" "}
              <BiSolidCopy></BiSolidCopy>
            </p>
          </div>
          <div className="first_div mt-4 mt-md-0   ">
            <h4>Decimal</h4>
            <p>18</p>
          </div>
          <div className="first_div mt-4 mt-md-0">
            <h4>Network</h4>
            <p>Ethereum</p>
          </div>
          <div className=" first_div borae    ">
            <h4 className="tk_sym"> Token symbol</h4>
            <p>$MDOGG</p>

            <img src={tbg} className="token_bg_imh" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
