import React from "react";
import "./Why_moondog.css";

import { GiIncense, GiPriceTag, GiShouting } from "react-icons/gi";
export default function Why_moondog() {
  return (
    <div className="why_md_main" id="why_us">
      <h1 className="main_mdh">why moondogg</h1>
      <p className="ymd_para">
        As the centerpiece of our platform's market economy, $Moondog will play
        a vital role in facilitating transactions within the NFT marketplace and
        powering activities in the metaverse. Holders will have exclusive access
        to exciting features such as themed meeting rooms, virtual galleries for
        portfolio showcase, job fairs, advertising opportunities, and much more.
        Our aim is to provide a seamless, secure, and innovative experience that
        leverages the power of blockchain technology and the metaverse to
        revolutionize the way we collaborate and work remotely.
      </p>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card_moondg briht text-start">
              {/* <img src={lock} alt="" /> */}
              <GiShouting className="conte_card_icos"></GiShouting>
              <h4 className="mdcard_h">Utility</h4>
              <p>
                $Moondog unlocks the full potential of the Moondogplatform
                enabling the NFT marketplace and metaverse transactions.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="card_moondg briht text-start">
              <GiIncense className="conte_card_icos"></GiIncense>
              <h4 className="mdcard_h">Incentives</h4>
              <p>
                $Moondog holders are eligible for discounts on the platform, get
                NFT whitelists, and have early access to new features.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="card_moondg  text-start">
              <GiPriceTag className="conte_card_icos"></GiPriceTag>
              <h4 className="mdcard_h">Price Appreciation</h4>
              <p>
                As the Moondogecosystem grows, the demand for $Moondog is
                expected to increase, leading to price appreciation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
