import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { Offcanvas } from "react-bootstrap";
import "animate.css";
import avator from "../images/Avator.png";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [showOffcanvas, setShowOffCanvas] = useState(false);

    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    const scrollToSection = (id) => {
        window.scrollTo({
            top: document.getElementById(id).offsetTop,
            behavior: "smooth",
        })
    }




    return (
        <div className={` ${scrolled && "bg-lightGreenNav"} w-100 animate__animated animate__bounceInRight navbar px-sm-4 px-md-5 px-lg-5 px-3 py-2 d-flex text-light`}>
        <div className="d-flex align-items-center">
            <a href="#home">

            <img src={avator} className="avatorImg me-2" />
            </a>
            <a href="#home" className="text-light text-no-decoration fs-1  me-lg-5">M<b> Safdar</b></a>
        </div>
            <div className=" mt-lg-2 nav-links">
                <a href="#home" className="fs-4 text-no-decoration text-light mx-3"><b>Home</b></a>
                <a href="#about" className="fs-4 text-no-decoration text-light mx-3"><b>About</b></a>
                <a href="#services" className="fs-4 text-no-decoration text-light mx-3"><b>Services</b></a>
                <a href="#skills" className="fs-4 text-no-decoration text-light mx-3"><b>Skills</b></a>
                <a href="#faqs" className="fs-4 text-no-decoration text-light mx-3"><b>Faq's</b></a>
                <a href="#contact" className="fs-4 text-no-decoration text-light mx-3"><b>Contact</b></a>
            </div>
            {!showOffcanvas && (
                <div className="mt-2 menuBox">
                    <TbMenu2 onClick={() => {
                        setShowOffCanvas(true)
                    }} className="fs-2 text-light" />
                </div>
            )}
            <Offcanvas placement="end" className="offCanvas bg-lightGreen" show={showOffcanvas} onHide={() => { setShowOffCanvas(false) }}>

                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div className="d-flex ">

                        <ul className="list-unstyled w-100">
                            <li className="text-center  py-2 fs-4 text-light" onClick={() => {
                                setShowOffCanvas(false);
                                scrollToSection("home");
                            }}><b>Home</b></li>
                            <li className="text-center py-2 fs-4 text-light w-100" onClick={() => {
                                setShowOffCanvas(false);
                                scrollToSection("about");
                            }} ><b>About</b></li>
                            <li className="text-center py-2 fs-4 text-light" onClick={() => {
                                setShowOffCanvas(false);
                                scrollToSection("services");
                            }}><b>Services</b></li>
                            <li className="text-center py-2 fs-4 text-light" onClick={() => {
                                setShowOffCanvas(false);
                                scrollToSection("skills");
                            }}><b>Skills</b></li>
                            <li className="text-center py-2 fs-4 text-light" onClick={() => {
                                setShowOffCanvas(false);
                                scrollToSection("faqs");
                            }}><b>Faq's</b></li>
                            <li className="text-center py-2 fs-4 text-light" onClick={() => {
                                setShowOffCanvas(false);
                                scrollToSection("contact");
                            }}><b>Contact</b></li>

                        </ul>
                    </div>

                </Offcanvas.Body>

            </Offcanvas>
        </div>
    )
}

