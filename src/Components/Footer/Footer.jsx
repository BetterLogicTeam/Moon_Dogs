import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsMedium,
  BsReddit,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="main_footer ">
      <div className="container  bord pt-4">
        <div className="footer_content">
          <h3 className="main_mdh"> join our community</h3>
          <div className="footer_soical_icons">
            <div className="soical-icons d-flex justify-content-center my-3 ">
              <a href=" #" target="_blank" className="text-decoration-none">
                <BsTelegram className="sical-logo0"></BsTelegram>
              </a>
              <a href="#" target="_blank" className="text-decoration-none">
                <BsInstagram className="sical-logo0"></BsInstagram>
              </a>
              <a href="#" target="_blank" className="text-decoration-none">
                <BsTwitter className="sical-logo0"></BsTwitter>
              </a>
              <a href="#" target="_blank">
                <BsFacebook className="sical-logo0"></BsFacebook>
              </a>

              <a href=" #" target="_blank" className="text-decoration-none">
                <BsMedium className="sical-logo0"></BsMedium>
              </a>
              <a href="#" target="_blank" className="text-decoration-none">
                <BsReddit className="sical-logo0"></BsReddit>
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="footerlin">
                <p className="foooter_para">
                  consectetur adipisicing elit. Molestias in dicta error.
                  Accusantium corporis, repellat, voluptas vel eveniet, magni
                  laboriosam quisquam officiis nisi fuga blanditiis omnis quae?
                  Esse, eos et?
                </p>
              </div>
            </div>

            <p className="copy_right">
              copyright@2023-Moondog all rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
