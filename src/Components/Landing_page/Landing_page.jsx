import React from 'react'
import "./Landing_page.css"
import eth from "../Assets/eth.svg"
import usdt from "../Assets/usdt.svg"
import usd from "../Assets/usdc.svg"
import moon from "../Assets/site_logo.jpg"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {BsLinkedin, BsTelegram, BsTwitter, BsYoutube} from "react-icons/bs"
import {FaTwitch} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"

export default function Landing_page() {
  return (
    <div className='main_landing'>
    <div className="container pt-3">
        <div className="row justify-content-around align-items-center">
        <div className="col-md-5">
        <div className="lg_left_cont text-start ">
            <h1 className='main_ld_haeding'>expansive network revenue generating crypto platform</h1>
<p>
Moon is an ecosystem committed   to the goal of providing an  expansive and envolving technology platform.utilizing the potenial of the blockchain,moon will host a staking,farming,P2E gaming platforms and more
{/* For a short time in 2011, Bitcoin traded for $1. We’re repeating this point in Bitcoin’s life cycle as an ERC-20 token. */}
</p>
     <div className="d-flex gap-3">
        <button className='buy_moon_btn'>buy moon</button>
        <button className='buy_moon_btnn'> moon stake</button>
     </div> 
        <h6 className='join mt-3'>join our community</h6>
      <div className="soical_icon_main mt-3">
      <BsTwitter className='icccons'></BsTwitter>
      <FaTwitch className='icccons'></FaTwitch>
<BsTelegram className='icccons'></BsTelegram>
<BsLinkedin className='icccons'></BsLinkedin>
<BsYoutube className='icccons'></BsYoutube>
<AiFillInstagram className='icccons'></AiFillInstagram>
      </div>
      
      
        </div>
        </div>

        <div className="col-md-5">
            <div className="card_main_bg">
            <div className="card_main_content">
                <h5>Lets go to moon with MoonDoggs</h5>
                <div className="main_progress_bar mt-3">
                <div className="progress_bar_clr">
                    <div className='text_progress'>untill sold out</div>
                </div>

                </div>
                <p className='token_s'>Usdt Raised: 1,487,005 / 3,000,000</p>



<div className="row justify-content-around mt-4">
    <div className="col-4 ">
        
                <div className="lit">

                    <h6>Stage1 </h6>
                    <p>$.18</p>
                </div>
    </div>
    <div className="col-4 text-end">
        
                <div className="lit">

                    <h6>Stage2 </h6>
                    <p>$.18</p>
                </div>
    </div>
</div>
                <p className='one_how'>1  MoonDogg = $1</p>


                <div className="token_boxes py-3 d-flex justify-content-center gap-3">
                    <div className="d-flex">
                        <div className="eth d-flex justify-content-center gap-2 align-items-center">
                            <img className='token_logo' src={eth} alt="" />
                            <p>ETH</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="eth d-flex justify-content-center gap-2 align-items-center">
                            <img className='token_logo' src={usdt} alt="" />
                            <p>USDT</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="eth d-flex justify-content-center gap-2 align-items-center">
                            <img className=' border_re' src={usd} alt="" />
                            <p>USDC</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-3">
                        <div className='d-flex mb-2 new_conver justify-content-between'>
                            <p>you pay </p>
                            <p>Max </p>
                          
                        </div>
                          <div className='covert_input d-flex  '>
                                <input type="text" className='input_cober' name="" id="" />
                                <img src={eth} alt="" />
                            </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className='d-flex mb-2 new_conver justify-content-between'>
                          

   <p>AMOUNT OF TOKENS</p>
                          
                        </div>
                          <div className='covert_input d-flex  '>
                                <input type="text" className='input_cober' name="" id="" />
                                <img src={moon} alt="" />
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-2 py-4">
                    
                {/* <button class="site_btn" type="button">
  <strong>Connect wallet</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button> */}

<button className='site_main_btn'> Connect wallet</button>
                </div>
                {/* <div className="d-flex justify-content-center mt-3">
                    
                <button class="site_btn" type="button">
  <strong>Buy With Eth</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
                </div> */}

                {/* <div className="how_buy">
                    <p><AiOutlineInfoCircle></AiOutlineInfoCircle>  how to buy</p>
                </div> */}
            </div>

            </div>
        </div>
        </div>
    </div>
    
    </div>
  )
}
