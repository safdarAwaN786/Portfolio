import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md"
import { ImStack} from "react-icons/im";
import {FaReact, FaNodeJs} from "react-icons/fa"

export default function ServicesSection() {

    return (

        <div id="services" className="my-5 sectionBox bg-black  px-sm-4 px-md-5 px-lg-5 px-3">
            <h4 className="text-center lightGreenColor">My Services</h4>
            <h1 className="text-center mb-5 text-light">I'M AVAILABLE FOR THIS</h1>
            <div className="row mt-5 pt-3">
                <div className="col-lg-4 col-md-6 col-12 p-3">
                    <div className="d-flex justify-content-center flex-column py-2 serviceBox">
                        <div className=" py-2 d-flex justify-content-center px-2">
                            <div className=" p-3 borderRadius360 serviceIconBox bg-white">
                                <BiCodeAlt className="lightGreenColor largeFontSize" />
                            </div>
                        </div>
                        <div className="p-2">
                            <h3 className="text-center  lightGreenColor">Web Development</h3>
                            <p className="text-light text-center fs-5">I'm specialize in Full-stack web development, creating visually stunning and highly functional websites that reflect your brand. Contact me to take your online presence to the next level.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  col-12 p-3">
                    <div className="d-flex py-2 flex-column serviceBox">
                        <div className="d-flex justify-content-center py-2 px-2">
                            <div className=" p-3 borderRadius360 serviceIconBox bg-white">
                                <BsVectorPen className="lightGreenColor largeFontSize" />
                            </div>
                        </div>
                        <div className="p-2">
                            <h3 className="text-center  lightGreenColor">web Design</h3>
                            <p className="text-center  text-light fs-5">In web designing, I focuses on creating modern and user-friendly designs that captivate audiences. Let me help you stand out online with a stunning website design tailored to your needs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  col-12 p-3">
                    <div className="d-flex flex-column py-2 serviceBox">
                        <div className="d-flex justify-content-center py-2 px-2">
                            <div className=" p-3 borderRadius360 serviceIconBox bg-white">
                                <MdOutlineWeb className="lightGreenColor yu largeFontSize" />
                            </div>
                        </div>
                        <div className="p-2">
                            <h3 className="text-center  lightGreenColor">Web Maintenance</h3>
                            <p className="text-center  text-light fs-5">Keeping your website up-to-date and running smoothly can be time-consuming. Let me take care of it for you, while ensuring your website is secure, fast, and optimized for search engines.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 p-3">
                    <div className="d-flex flex-column py-2 serviceBox">
                        <div className="d-flex justify-content-center py-2 px-2">
                            <div className=" p-3 borderRadius360 serviceIconBox bg-white">
                                <ImStack className="lightGreenColor largeFontSize" />
                            </div>
                        </div>
                        <div className="p-2">
                            <h3 className="text-center   lightGreenColor">MERN-stack Development</h3>
                            <p className="text-light text-center  fs-5 ">In MERN stack development, I focuses on creating fast, reliable, and scalable web applications using cutting-edge technologies. Let me help you build a robust and efficient web application that meets your specific business needs.</p>
                        </div>
                    </div>
                </div>
                
               
                <div className="col-lg-4 col-md-6  col-12 p-3">
                    <div className="d-flex flex-column py-2 serviceBox">
                        <div className="d-flex justify-content-center py-2 px-2">
                            <div className=" p-3 borderRadius360 serviceIconBox bg-white">
                                <FaReact className="lightGreenColor yu largeFontSize" />
                            </div>
                        </div>
                        <div className="p-2">
                            <h3 className="text-center  lightGreenColor">Front-End Development</h3>
                            <p className="text-center  text-light fs-5">Looking for a way to improve your website's user experience? My front-end development service creates responsive and engaging interfaces that will captivate your audience. Let's work together to take your website to the next level.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6  col-12 p-3">
                    <div className="d-flex flex-column py-2 serviceBox">
                        <div className="d-flex justify-content-center py-2 px-2">
                            <div className=" p-3 borderRadius360 serviceIconBox bg-white">
                                <FaNodeJs className="lightGreenColor yu largeFontSize" />
                            </div>
                        </div>
                        <div className="p-2">
                            <h3 className="text-center  lightGreenColor">Back-End Development</h3>
                            <p className="text-center  text-light fs-5">With my back-end development service, I create powerful and secure server-side applications that drive your website's functionality. Contact me to build a robust and efficient web application that meets your specific business needs.</p>
                        </div>
                    </div>
                </div>
               
                


            </div>
        </div>
    )
}