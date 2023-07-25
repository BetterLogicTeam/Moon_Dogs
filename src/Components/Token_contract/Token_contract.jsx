import React from 'react'
import "./Token_contract.css"
import {BiSolidCopy} from "react-icons/bi"
import tbg from "../Assets/tb.png"

export default function Token_contract() {
  return (
    <div className='main_token_C'>
    <h1 className='main_mdh'>Token Contract</h1>
    <div className="container">
    <div className="main_content_token mt-5">
    <div className="first_div">
    <h4>Address</h4>
<p>0x7D60dE2E7D92Cb5C863bC82f8d59b37C59fC0A7A <BiSolidCopy></BiSolidCopy></p>


    </div>
    <div className="first_div   ">
    <h4>Decimal</h4>
<p>18</p>


    </div>
    <div className="first_div">
    <h4>Network</h4>
<p>Ethereum</p>


    </div>
    <div className=" first_div borae   ">
    <h4 className='tk_sym'> Token symbol</h4>
<p>$moon</p>

<img src={tbg} className='token_bg_imh' alt="" />


    </div>
    </div>
    </div>

    </div>
  )
}
