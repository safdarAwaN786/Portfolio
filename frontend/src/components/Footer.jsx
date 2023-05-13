import React from "react";
import { CgFacebook } from "react-icons/cg";
import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";


export default function Footer() {


    return (
        <div className="py-5 mt-3 bg-black px-sm-4 px-md-5 px-lg-5 px-1 ">
            <h3 className="text-center lightGreenColor">My Profiles</h3>
            <h1 className="text-center text-light mb-5">REACH TO ME</h1>
            <div className="d-flex justify-content-center flex-row flex-wrap">
                <a href="https://www.facebook.com/profile.php?id=100008531312907" target="_blank" className="profileBox d-flex align-items-center p-1 m-lg-2 m-md-2 m-sm-2 m-1 ">
                    <CgFacebook className="fs-3 profileSvg" />
                </a>
                <a href="https://www.linkedin.com/in/safdar-awan-17017a244/" target="_blank" className="profileBox d-flex align-items-center p-1 m-lg-2 m-md-2 m-sm-2 m-1">
                    <RiLinkedinFill className="fs-3 profileSvg" />
                </a>
                <a href="https://www.instagram.com/safdar_awan_01/" target="_blank" className="profileBox d-flex align-items-center p-1 m-lg-2 m-md-2 m-sm-2 m-1">
                    <RiInstagramLine className="fs-3 profileSvg" />
                </a>

            </div>
        </div>
    )
}