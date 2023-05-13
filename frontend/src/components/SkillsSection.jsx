import React from "react";
import htmlLogo from "../images/htmlLogo.jpg";
import cssLogo from "../images/cssLogo.png";
import jsLogo from "../images/jsLogo.png";
import reactLogo from "../images/reactLogo.png";
import nodeLogo from "../images/nodeLogo.png";
import mongodbLogo from "../images/mongodbLogo.png";
import expressLogo from "../images/expressLogo.png";
import bootstrapLogo from "../images/bootstrapLogo.png";

export default function SkillsSection() {

    return (
        <div id="skills" className="my-5 sectionBox  px-sm-4 px-md-5 px-lg-5 px-3">
            <h3 className="text-center lightGreenColor">My Skills</h3>
            <h1 className="text-center mb-5">TECH STACKS & LANGUAGES</h1>

            <div className="row mt-5 pt-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-3">
                    <div className=" mx-auto skillImgBox m-2 p-2">
                        <img src={htmlLogo} className="languageIcon" />
                    </div>
                    <p className="text-center fs-2"><b>HTML</b></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-3">
                    <div className="mx-auto skillImgBox m-2 p-2">
                        <img src={cssLogo} className="languageIcon" />
                    </div>
                    <p className="text-center fs-2"><b>CSS</b></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-3">
                    <div className="mx-auto skillImgBox m-2 p-2">
                        <img src={jsLogo} className="languageIcon" />
                    </div>
                    <p className="text-center fs-2"><b>Javascript</b></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-3">
                    <div className="mx-auto skillImgBox m-2 p-2">
                        <img src={bootstrapLogo} className="languageIcon" />
                    </div>
                    <p className="text-center fs-2"><b>Bootstrap</b></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-3">
                    <div className="mx-auto skillImgBox m-2 p-2">
                        <img src={reactLogo} className="languageIcon" />
                    </div>
                    <p className="text-center fs-2"><b>React JS</b></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-3">
                    <div className="mx-auto skillImgBox m-2 p-1">
                        <img src={nodeLogo} className="languageIcon" />
                    </div>
                    <p className="text-center fs-2"><b>Node JS</b></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-3">
                    <div className="mx-auto skillImgBox m-2 p-2">
                        <img src={mongodbLogo} className="languageIcon" />
                    </div>
                    <p className="text-center fs-2"><b>mongoDB</b></p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column p-3">
                    <div className="mx-auto skillImgBox m-2 p-2">
                        <img src={expressLogo} className="languageIcon" />
                    </div>
                    <p className="text-center fs-2"><b>Express JS</b></p>
                </div>
            </div>


        </div>
    )
}