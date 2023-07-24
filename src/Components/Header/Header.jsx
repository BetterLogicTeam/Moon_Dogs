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
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <span onClick={()=>setShow(!show)}  className="d-block d-lg-none">
        {
        
          show ? <><RxCross2 className='text-dark fs-1' /> </>:<><AiOutlineMenu className='text-dark fs-1'/></>
        }
        

        </span>
          <Navbar.Collapse id="responsive-navbar-nav"  className={show ? "show":""}>
            <Nav className="ms-auto">
              <Nav.Link className="nav_bar_links" href="#features">
              About
              </Nav.Link>
              <Nav.Link className="nav_bar_links" href="#pricing">
              Ecosystem
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link className="nav_bar_links" href="#deets">
            Roadmap
              </Nav.Link>
              <Nav.Link className="nav_bar_links" eventKey={2} href="#memes">
              Tokenomics
              </Nav.Link>
              <Nav.Link className="nav_bar_links" eventKey={2} href="#memes">
              Team
              </Nav.Link>
              <Nav.Link className="nav_bar_links" eventKey={2} href="#memes">
              Faq
              </Nav.Link>
            
            </Nav>
            <Nav>
            <div className=" d-flex align-items-center borer_lg ">
                <div className="soical_links gap-3 d-flex align-items-center">
                <div>
                  <AiOutlineTwitter className="soical_icons"></AiOutlineTwitter>
                  <BsTelegram className="soical_icons" ></BsTelegram></div>
                  <div>
                  {/* <button class="site_btn" type="button">
  <strong>SPACE</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button> */}
                    {/* <button className="navBar_buttn"> <BiWallet></BiWallet> Buy now </button> */}
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
