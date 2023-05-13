import React, { useState } from "react";
import Profile from "../images/Profile.png";
import Typed from "react-typed";


export default function IntroSection() {







    return (
        <div id="home" className="px-3  introBox bg-black  d-flex flex-column  text-light">

            <div className=" pt-5 mx-auto">
                <img className="profileimg" src={Profile} />
            </div>
            <div className="mx-auto pt-3 text-center">
               
                <h1 className="d-inline">I'm </h1>
                <Typed className="fs-1 lightGreenColor"
                    strings={["Safdar Awan.", "Web Developer.", "MERN Developer.", "Freelancer."]}
                    typeSpeed={100}
                    backSpeed={60}
                    loop
                />
            </div>

        </div>
    )
}