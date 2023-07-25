import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import site_logo from "../Assets/site_logo.jpg";
import { BsTelegram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineTwitter } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import {RxCross2} from "react-icons/rx"

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=" main_navBAr   bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand className="site_logo_desk" href="#home">
            {" "}
            <img src={site_logo} alt="" />
          </Navbar.Brand>
          <span onClick={()=>setShow(!show)}  className="d-block d-lg-none">
        {
        
          show ? <><RxCross2 className='text-white fs-1' /> </>:<><AiOutlineMenu className='text-white fs-1'/></>
        }
        

        </span>
          <Navbar.Collapse id="responsive-navbar-nav"  className={show ? "show":""}>
            <Nav className="ms-auto">
              <Nav.Link className="nav_bar_links" href="#about">
              About
              </Nav.Link>
              <Nav.Link className="nav_bar_links" href="#ecosystem">
              Ecosystem
              </Nav.Link>
              
            <Nav.Link className="nav_bar_links" href="#roadmap">
            Roadmap
              </Nav.Link>
              <Nav.Link className="nav_bar_links" eventKey={2} href="#tokenomics">
              Tokenomics
              </Nav.Link>
              <Nav.Link className="nav_bar_links" eventKey={2} href="#team">
              Team
              </Nav.Link>
              <Nav.Link className="nav_bar_links" eventKey={2} href="#faq">
              Faq
              </Nav.Link>
            
            </Nav>
            <Nav>
            <div className=" d-flex align-items-center borer_lg ">
                <div className="soical_links gap-3 d-flex align-items-center">
                <div>
                  <AiOutlineTwitter className="soical_icons"></AiOutlineTwitter>
                  <BsTelegram className="soical_icons ms-0 ms-lg-2" ></BsTelegram></div>
                  <div>
                 
                  </div>
                </div>
              </div>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
