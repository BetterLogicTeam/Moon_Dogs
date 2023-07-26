import React from "react";
import "./NFT.css";
import nft from "../Assets/nft.jpg";
import nft1 from "../Assets/nft1.jpg";
import nft2 from "../Assets/nft2.jpg";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function NFT() {
  return (
    <div className="main_nft_page" id="MoonDogg_Nft">
      <h1 className="main_mdh">MoonDogg Nft</h1>
      <div className="container mt-5">
        <div className="row justify-content-evenly">
          <div className="col-md-3">
          <div className=" d-flex flex-column ">
              <img src={nft} className="nft_img w-100" alt="" />
              <button className="nft_button">
                Explore now <BsBoxArrowUpRight></BsBoxArrowUpRight>
              </button>
            </div>
          </div>
          <div className="col-md-3 mt-4 mt-md-0">
            <div className=" d-flex flex-column ">
              <img src={nft1} className="nft_img w-100" alt="" />
              <button className="nft_button">
                Explore now <BsBoxArrowUpRight></BsBoxArrowUpRight>
              </button>
            </div>
          </div>
          <div className="col-md-3 mt-4 mt-md-0">
          <div className=" d-flex flex-column ">
              <img src={nft2} className="nft_img w-100" alt="" />
              <button className="nft_button">
                Explore now <BsBoxArrowUpRight></BsBoxArrowUpRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
