import React, { useEffect, useState } from "react";
import "./Landing_page.css";
import eth from "../Assets/eth.svg";
import usdt from "../Assets/usdt.svg";
import usd from "../Assets/usdc.svg";
import moon from "../Assets/site_logo.jpg";
import { BsLinkedin, BsTelegram, BsTwitter, BsYoutube ,BsDiscord} from "react-icons/bs";
import { FaTwitch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useAccount, useContractWrite, useNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { useSwitchNetwork } from "wagmi";
import { toast } from "react-hot-toast";
import { useBalance } from "wagmi";
import Web3 from "web3";
import Countdown from "react-countdown";
import {
  Moon_Dogs_Abi,
  Moon_Dogs_Address,
  TetherToken_Abi,
  TetherToken_Address,
  USD_Coin_Address,
  USD_Coin_Abi,
} from "../../util/Contract";

export default function Landing_page() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { address, isConnecting, isDisconnected } = useAccount();
  const { open, close } = useWeb3Modal();
  const [isActive, setisActive] = useState(0);
  const [Token_Balance, setToken_Balance] = useState(0);
  const [get_userValue, setget_userValue] = useState("");
  const [show_value, setshow_value] = useState(0);
  const [getmaxTokeninPresale, setgetmaxTokeninPresale] = useState(0);
  const [$MDOGG_Sold, set$MDOGG_Sold] = useState(0);
  const [contractbalance, setcontractbalance] = useState(0);

  const [spinner, setspinner] = useState(false);

  // console.log("chains",chain?.id);
  const data1 = useBalance({
    address: address || null,
  });
  const webSupply = new Web3("https://rpc.flashbots.net");

  const USDT_Balance = async () => {
    let contractOf_Token = new webSupply.eth.Contract(
      TetherToken_Abi,
      TetherToken_Address
    );
    let contractOf_usdcToken = new webSupply.eth.Contract(
      USD_Coin_Abi,
      USD_Coin_Address
    );
    if (address && isActive==1 ) {
      let balance = await contractOf_Token.methods.balanceOf(address).call();
      setToken_Balance(balance / 1000000);
    }else{
      let balance = await contractOf_usdcToken.methods.balanceOf(address).call();
      setToken_Balance(balance / 1000000);
    }
    let contractOf = new webSupply.eth.Contract(
      Moon_Dogs_Abi,
      Moon_Dogs_Address
    );
    let $MDOGG_Sold = await contractOf.methods.$MDOGG_Sold().call();
    $MDOGG_Sold = webSupply.utils.fromWei($MDOGG_Sold);

    set$MDOGG_Sold($MDOGG_Sold);
    let maxTokeninPresale = await contractOf.methods.maxTokeninPresale().call();
    maxTokeninPresale = webSupply.utils.fromWei(maxTokeninPresale.toString());
    setgetmaxTokeninPresale(maxTokeninPresale);

    let Balance_Contract = await contractOf_Token.methods
      .balanceOf(Moon_Dogs_Address)
      .call();
    let Balance_Contract_usdc = await contractOf_usdcToken.methods
      .balanceOf(Moon_Dogs_Address)
      .call();
    Balance_Contract = Number(Balance_Contract) / 1000000;
    Balance_Contract_usdc = Number(Balance_Contract_usdc) / 1000000;
    let totalDollar = Balance_Contract + Balance_Contract_usdc;

    let USDTpricePerETH = await contractOf.methods.USDTpricePerETH().call();
    let contractbalance = await contractOf.methods.contractbalance().call();
    setcontractbalance(
      parseFloat(
        (Number(USDTpricePerETH) * Number(contractbalance)) /
          1000000000000000000000000 +
          Number(totalDollar)
      ).toFixed(2)
    );
  };

  const getLive_Rate = async () => {
    try {
      let contractOf = new webSupply.eth.Contract(
        Moon_Dogs_Abi,
        Moon_Dogs_Address
      );
      if (isActive == 0) {
        let value = webSupply.utils.toWei(get_userValue.toString());
        let get$MDOGGvalueperETH = await contractOf.methods
          .get$MDOGGvalueperETH(value)
          .call();
        let result = webSupply.utils.fromWei(get$MDOGGvalueperETH.toString());
        setshow_value(result);
        // console.log("get$MDOGGvalueperETH", result);
      } else if (isActive == 1) {
        let value = get_userValue * 1000000;
        let get$MDOGGvalueperUSDT = await contractOf.methods
          .get$MDOGGvalueperUSDT(value)
          .call();
        let result = webSupply.utils.fromWei(get$MDOGGvalueperUSDT.toString());
        setshow_value(result);
        // console.log("get$MDOGGvalueperETH", result);
      } else {
        let value = get_userValue * 1000000;
        let get$MDOGGvalueperUSDT = await contractOf.methods
          .get$MDOGGvalueperUSDT(value)
          .call();
        let result = webSupply.utils.fromWei(get$MDOGGvalueperUSDT.toString());
        setshow_value(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    USDT_Balance();
    getLive_Rate();
  }, [get_userValue, isActive]);
  // console.log("getFunName",getFunName);
  const { isLoading, isSuccess, write } = useContractWrite({
    onSettled(data, error) {
      if (!error) {
        alert("tayya");
        setTimeout(() => {
          text(data);
        }, 10000);
        // setspinner(true);
      } else {
        toast.error("Transaction failed");
        setspinner(false);
      }
    },
  });
  const buyEth = async () => {
    try {
      if (address) {
        if (get_userValue != "") {
          if (get_userValue > parseFloat(data1?.data?.formatted).toFixed(4)) {
            toast.error("Insufficient balance");
            setspinner(false);
          } else {
            if (window.ethereum) {
              setspinner(true);

              const web3 = new Web3(window.ethereum);

              await window.ethereum.enable();

              let contractOf = new web3.eth.Contract(
                Moon_Dogs_Abi,
                Moon_Dogs_Address
              );

              await contractOf.methods.Buy$MDOGGWithETH().send({
                from: address,
                value: webSupply.utils.toWei(get_userValue.toString()),
              });
              toast.success("Transaction Completed");

              setspinner(false);
            } else {
              toast.error("Error");
              setspinner(false);
            }

            // write({
            //   address: Moon_Dogs_Address,
            //   abi: Moon_Dogs_Abi,
            //   functionName: "Buy$MDOGGWithETH",
            //   from: address,
            //   value: webSupply.utils.toWei(get_userValue.toString()),
            // });
          }
        } else {
          toast.error("Please Enter Amount First");
          setspinner(false);
        }
      } else {
        toast.error("Connect Wallet!");
        setspinner(false);
      }
    } catch (error) {
      console.log(error);
      setspinner(false);
    }
  };

  const text = async (data) => {
    try {
      var receipt = await webSupply.eth.getTransactionReceipt(data.hash);
      console.log("receipt", receipt.status);

      if (receipt.status == true) {
        toast.success("Transaction Completed");
        setspinner(false);
      } else {
        toast.error("Transaction failed");
        setspinner(false);
      }

      // const web3 = new Web3( window.ethereum);

      // await window.ethereum.enable();

      // let contractOf_Token = new publicClient.eth.Contract(
      //   TetherToken_Abi,
      //   TetherToken_Address
      // );
      // let contractOf = new web3.eth.Contract(
      //   Moon_Dogs_Abi,
      //   Moon_Dogs_Address
      // );

      // await contractOf_Token.methods
      //   .approve(Moon_Dogs_Address, "1000000")
      //   .send({
      //     from: address,

      //   });
      // toast.success("Approved Done");

      // await contractOf.methods
      //   .Buy$MDOGGWithUSDT(get_userValue * Number(1000000))
      //   .send({
      //     from: address,
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  const buyUSDT = async () => {
    try {
      if (address) {
        if (get_userValue != "") {
          if (window.ethereum) {
            setspinner(true);

            const web3 = new Web3(window.ethereum);

            await window.ethereum.enable();

            let contractOf_Token = new web3.eth.Contract(
              TetherToken_Abi,
              TetherToken_Address
            );
            let contractOf = new web3.eth.Contract(
              Moon_Dogs_Abi,
              Moon_Dogs_Address
            );

            await contractOf_Token.methods
              .approve(Moon_Dogs_Address, get_userValue * Number(1000000))
              .send({
                from: address,
              });
            toast.success("Approved successfully");

            await contractOf.methods
              .Buy$MDOGGWithUSDT(get_userValue * Number(1000000))
              .send({
                from: address,
              });
            toast.success("Transaction Completed");

            setspinner(false);
          } else {
            toast.error("Error");
          }
        } else {
          toast.error("Please Enter Amount First");
          setspinner(false);
        }
      } else {
        toast.error("Connect Wallet!");
      }
      // write({
      //   address: Moon_Dogs_Address,
      //   abi: Moon_Dogs_Abi,
      //   functionName: "Buy$MDOGGWithUSDT",
      //   from: address || null,
      //   args: [get_userValue * Number(1000000)],
      // });
      // setisActive(0);
    } catch (error) {
      setspinner(false);

      console.log(error);
    }
  };

  const buyUSDC = async () => {
    try {
      if (address) {
        if (get_userValue != "") {
          if (window.ethereum) {
            setspinner(true);

            const web3 = new Web3(window.ethereum);

            await window.ethereum.enable();

            let contractOf_Token = new web3.eth.Contract(
              USD_Coin_Abi,
              USD_Coin_Address
            );
            let contractOf = new web3.eth.Contract(
              Moon_Dogs_Abi,
              Moon_Dogs_Address
            );

            await contractOf_Token.methods
              .approve(Moon_Dogs_Address, get_userValue * Number(1000000))
              .send({
                from: address,
              });
            toast.success("Approved successfully");

            await contractOf.methods
              .Buy$MDOGGWithUSDC(get_userValue * Number(1000000))
              .send({
                from: address,
              });
            toast.success("Transaction Completed");

            setspinner(false);
          } else {
            toast.error("Error");
          }
        } else {
          toast.error("Please Enter Amount First");
          setspinner(false);
        }
      } else {
        toast.error("Connect Wallet!");
      }
      // write({
      //   address: Moon_Dogs_Address,
      //   abi: Moon_Dogs_Abi,
      //   functionName: "Buy$MDOGGWithUSDT",
      //   from: address || null,
      //   args: [get_userValue * Number(1000000)],
      // });
      // setisActive(0);
    } catch (error) {
      setspinner(false);

      console.log(error);
    }
  };

  const Completionist = () => {
    return (
      <>
        <div className="text_days fs-5 ">Date of Sale TBA</div>
      </>
    );
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="row justify-content-between mt-3 ml-10">
          <div className="col-3">
            <div className="white_box">
              <p>{days}d</p>
            </div>
          </div>
          <div className="col-3  mt-md-0">
            <div className="white_box">
              <p>{hours}h</p>
            </div>
          </div>
          <div className="col-3  mt-md-0">
            <div className="white_box">
              <p>{minutes}m</p>
            </div>
          </div>
          <div className="col-3  mt-md-0">
            <div className="white_box">
              <p>{seconds}s</p>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="main_landing">
      <div className="container pt-3">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-5">
            <div className="lg_left_cont text-start ">
              <h1 className="main_ld_haeding">
              🐶 Welcome To MOONDOGG Official Presale 🐶
              </h1>
              <p>
              Introducing MOONDOGG At the heart of our project is “MOONDOGG"  representing the iconic 
              French bulldog now infused with the magic of blockchain technology.
              ⚡️0% Tax  🔥Top CEX Listing 🔥CS & CMC & CG Fast-Track 🔥Top Trending Backed
               by Experienced Team & Marketers The world's top influencer💠
               <br/>NFT’S COMING SOON
               <br/>Lets Take MOONDOGG to the Moon Launch after Presale ends
              </p>
              <div className="d-flex gap-3">
                <button className="buy_moon_btn">Whitepaper</button>
                <button className="buy_moon_btnn"> Twitter</button>
              </div>
              <h6 className="join mt-3">join our community</h6>
              <div className="soical_icon_main mt-3">
              <a href="https://twitter.com/Moon_Dogg_Token" target="_blank" className="text-decoration-none"> <BsTwitter className="icccons"></BsTwitter></a>
                {/* <FaTwitch className="icccons"></FaTwitch> */}
                <a href="https://t.me/MoonDoggOfficialGroup" target="_blank" className="text-decoration-none"> <BsTelegram className="icccons"></BsTelegram></a>
                {/* <BsLinkedin className="icccons"></BsLinkedin>
                <BsYoutube className="icccons"></BsYoutube>
                <AiFillInstagram className="icccons"></AiFillInstagram> */}
                <a href="https://discord.gg/w3WeKarF" target="_blank" className="text-decoration-none"><BsDiscord className="icccons"></BsDiscord></a>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card_main_bg">
              <div className="text-center mb-3">
                <button
                  className="site_main_btn text-white "
                  onClick={() =>
                    address ?
                    chain?.id == chains[0]?.id
                      ? open()
                      : switchNetwork?.(chains[0]?.id)
                      :open()

                  }
                >
                  {
                  address ?
                  chain?.id == chains[0]?.id ? (
                    address ? (
                      <>
                        {`${address.substring(0, 6)}...${address.substring(
                          address.length - 4
                        )}`}{" "}
                      </>
                    ) : (
                      "connect wallet"
                    )
                  ) : (
                    "Switch NewWork"
                  )
                  :
                  "Connect Wallet"
                
                }
                </button>
              </div>
              <div className="card_main_content">
                <h5>Lets go to moon with MoonDogg</h5>
                {/* <div className="main_progress_bar mt-3">
                  <div className="text_progress">untill sold out</div>
                  <div className="progress_bar_clr">


                  </div>
                </div> */}

                <div className="main_pooo">
                  <div className="progress_bar">
                    <div
                      className="bvvvv"
                      style={{
                        width:
                          Number($MDOGG_Sold) /
                          Number(getmaxTokeninPresale) /
                          100,
                      }}
                    ></div>
                    <span className="stage_text">
                      <p className="stage_text">untill sold out</p>
                    </span>
                  </div>

                  <p className="token_s">
                    USDT Raised:{contractbalance} / 3,000,000
                  </p>
                </div>
                <div className="row justify-content-around mt-4">
                  <div className="col-4 ">
                    <div className="lit">
                      <h6>Stage1 </h6>
                      <p>$0.18</p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="lit">
                      <h6>Stage2 </h6>
                      <p>$0.14</p>
                    </div>
                  </div>
                </div>
                <p className="one_how">1 MoonDogg = $1</p>

                <div className="token_boxes py-3 d-flex justify-content-center gap-3">
                  <div className="d-flex">
                    <div
                      className={`eth d-flex justify-content-center gap-2 align-items-center ${
                        isActive == 0 ? "border" : ""
                      }`}
                      onClick={() => setisActive(0)}
                    >
                      <img className="token_logo" src={eth} alt="" />
                      <p>ETH</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div
                      className={`eth d-flex justify-content-center gap-2 align-items-center ${
                        isActive == 1 ? "border" : ""
                      }`}
                      onClick={() => setisActive(1)}
                    >
                      <img className="token_logo" src={usdt} alt="" />
                      <p>USDT</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div
                      className={`eth d-flex justify-content-center gap-2 align-items-center ${
                        isActive == 2 ? "border" : ""
                      }`}
                      onClick={() => setisActive(2)}
                    >
                      <img className=" border_re" src={usd} alt="" />
                      <p>USDC</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                <p className="eth_bla">
                    {" "}
                    {isActive == 0 ? "ETH ": isActive==1 ?  "USDT " : "USDC"} balance :{" "}
                    <span className="fs-5">
                      {isActive == 0 ? (
                        <>
                          {data1?.data?.formatted == undefined
                            ? 0
                            : parseFloat(data1?.data?.formatted).toFixed(
                                4
                              )}{" "}
                        </>
                      ) : isActive==1 ? (
                        <>{Token_Balance} </>
                      ): (
                        <>{Token_Balance} </>
                      )
                    
                    }
                    </span>
                  </p>
                  <div className="col-md-6 mt-3">
                    <div className="d-flex mb-2 new_conver justify-content-between">
                      <p>you pay </p>
                      <p>Max </p>
                    </div>
                    <div className="covert_input d-flex  ">
                      <input
                        type="text"
                        className="input_cober"
                        placeholder="0"
                        name=""
                        id=""
                        value={get_userValue}
                        onChange={(e) => setget_userValue(e.target.value)}
                      />
                      {isActive == 0 ? (
                        <>
                          <img src={eth} className="iaafamd " alt="" />{" "}
                        </>
                      ) : isActive == 1 ? (
                        <>
                          {" "}
                          <img src={usdt} className="iaafamd " alt="" />
                        </>
                      ) : (
                        <>
                          {" "}
                          <img src={usd} className="iaafamd " alt="" />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="d-flex mb-2 new_conver justify-content-between">
                      <p>AMOUNT OF TOKENS</p>
                    </div>
                    <div className="covert_input d-flex  ">
                      <input
                        type="text"
                        className="input_cober"
                        name=""
                        id=""
                        value={show_value}
                      />
                      <img src={moon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-2 py-4">
                  <button
                    className="site_main_btn text-white "
                    onClick={() =>
                      isActive == 0
                        ? buyEth()
                        : isActive == 1
                        ? buyUSDT()
                        : buyUSDC()
                    }
                  >
                    {spinner
                      ? "Loading..."
                      : isActive == 0
                      ? "Buy ETH"
                      : isActive == 1
                      ? "Buy USDT"
                      : "Buy USDC"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
