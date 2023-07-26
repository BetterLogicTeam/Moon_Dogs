import React from "react";
import "./Why_moondog.css";

import { GiIncense, GiPriceTag, GiShouting } from "react-icons/gi";
export default function Why_moondog() {
  return (
    <div className="why_md_main" id="Moondogg">
      <h1 className="main_mdh">why moondogg</h1>
      <p className="ymd_para">
      MoonDog will serve as the core utility token driving our platform's vibrant market economy. With its pivotal role in the NFT marketplace and activities within the metaverse, $Moondog will empower users to engage in seamless and secure transactions while exploring new frontiers of collaboration and remote work. As holders of $Moondog, users will enjoy exclusive access to a plethora of exciting features, including themed meeting rooms, virtual galleries for showcasing portfolios, job fairs, advertising opportunities, and much more. We are committed to revolutionizing the way people collaborate and work remotely by harnessing the innovative potential of blockchain technology and the metaverse, providing an unparalleled user experience for our community.





      </p>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card_moondg briht text-start">
              {/* <img src={lock} alt="" /> */}
              <GiShouting className="conte_card_icos"></GiShouting>
              <h4 className="mdcard_h">Functionality</h4>
              <p>
              MoonDog will serve as the core functionality token driving our platform's vibrant market economy. With its pivotal role in the NFT marketplace and activities within the metaverse, $Moondog will empower users to engage in seamless and secure transactions while exploring new frontiers of collaboration and remote work.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="card_moondg briht text-start">
              <GiIncense className="conte_card_icos"></GiIncense>
              <h4 className="mdcard_h">Rewards</h4>
              <p>
              MoonDogg will provide attractive rewards as users engage with our platform's vibrant market economy. With its pivotal role in the NFT marketplace and activities within the metaverse, $Moondog will empower users to participate actively and earn rewards for their contributions
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="card_moondg  text-start">
              <GiPriceTag className="conte_card_icos"></GiPriceTag>
              <h4 className="mdcard_h">Value Growth</h4>
              <p>
              MoonDogg will provide opportunities for value growth as users engage with our platform's vibrant market economy. With its pivotal role in the NFT marketplace and activities within the metaverse, $Moondog will empower users to participate actively and potentially witness significant growth in the value of their holdings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
