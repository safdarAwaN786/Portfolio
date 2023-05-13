import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "animate.css";



export default function FaqsSection() {
    const [showWho, setShowWho] = useState(false);
    const [showTrust, setShowTrust] = useState(false);
    const [showService, setShowService] = useState(false);
    const [showValue , setShowValue] = useState(false)

    return (

        <div id="faqs" className=" my-5 sectionBox bg-black px-sm-4 px-md-5 px-lg-5 px-1 ">
            <h3 className="text-center lightGreenColor">FAQ</h3>
            <h1 className="text-center text-light mb-5">HAVE ANY QUESTIONS?</h1>
            <div className="mx-lg-5 px-lg-5">
                <div className="px-lg-5">
                    <div className="mt-5  pt-5 d-flex justify-content-center px-lg-5 mx-lg-5 flex-column">


                        <div className={`p-1 ${showWho ? "bg-lightGreen radiusTop" : "bg-light radiusFull my-2"} mt-2 d-flex questionBox  flex-row w-100 mx-auto cursor-pointer `} onClick={() => {
                            if (showWho) {
                                setShowWho(false)
                            } else {
                                setShowWho(true)
                            }
                        }}>
                            <div className="d-flex align-items-center">

                                <button className="bg-lightGreen border-0 radiusFull">{showWho ? <AiOutlineMinus className={`m-2 ${showWho ? "text-light" : " text-black"} fs-3`} /> : <AiOutlinePlus className={`m-2 ${showWho ? "text-light" : " text-black"} fs-3`} />}</button>
                            </div>
                            <div className=" d-flex align-items-center px-2">
                                <p className={`my-auto ${showWho ? "text-light" : "text-black"} d-inline fs-6`}><b>WHO AM I ?</b></p>
                            </div>
                        </div>
                        {showWho &&
                            <div className={`p-3 answerBox animate__animated   animate__zoomIn radiusBottom mb-2 bg-light w-100 mx-auto`}>
                                <p>Hi, I'm Safdar Awan, a MERN stack web developer with a passion for crafting beautiful and functional websites. With a keen eye for design and a deep understanding of the latest web development technologies, I can help you create a web presence that truly stands out. Let's work together to bring your vision to life.</p>
                            </div>
                        }


                        <div onClick={() => {
                            if (showTrust) {
                                setShowTrust(false)
                            } else {
                                setShowTrust(true)
                            }
                        }} className={`p-1 ${showTrust ? "bg-lightGreen radiusTop" : "bg-light radiusFull my-2"} mt-2 d-flex questionBox flex-row w-100 mx-auto cursor-pointer `}>
                            <div className="d-flex align-items-center">

                                <button className="bg-lightGreen border-0 radiusFull">{showTrust ? <AiOutlineMinus className={`m-2 ${showTrust ? "text-light" : " text-black"} fs-3`} /> : <AiOutlinePlus className={`m-2 ${showTrust ? "text-light" : " text-black"} fs-3`} />}</button>
                            </div>
                            <div className=" d-flex align-items-center px-2">
                                <p className={`my-auto ${showTrust ? "text-light" : "text-black"} fs-6 d-inline`}><b>WHY YOU SHOULD TRUST ME ?</b></p>
                            </div>
                        </div>
                        {showTrust &&
                            <div className="p-3 answerBox animate__animated animate__zoomIn  radiusBottom mb-2 bg-light w-100 mx-auto">
                                <p>You can trust me because I have a track  of delivering high-quality web development projects. I am committed to exceptional customer service and staying up-to-date with the latest industry trends. Check out my portfolio to see the results for yourself.</p>
                            </div>
                        }

                        <div onClick={() => {
                            if (showService) {
                                setShowService(false)
                            } else {
                                setShowService(true)
                            }
                        }} className={`p-1 ${showService ? "bg-lightGreen radiusTop" : "bg-light radiusFull my-2"} mt-2 d-flex questionBox  flex-row w-100 mx-auto cursor-pointer `}>
                            <div className="d-flex align-items-center">

                                <button className="bg-lightGreen border-0 radiusFull">{showService ? <AiOutlineMinus className={`m-2 ${showService ? "text-light" : " text-black"} fs-3`} /> : <AiOutlinePlus className={`m-2 ${showService ? "text-light" : " text-black"} fs-3`} />}</button>
                            </div>
                            <div className=" d-flex align-items-center px-2">
                                <p className={`my-auto ${showService ? "text-light" : "text-black"} fs-6  d-inline`}><b>CAN I GIVE YOU THE BEST SERVICE ?</b></p>
                            </div>
                        </div>
                        {showService &&
                            <div className="p-3 answerBox animate__animated animate__zoomIn radiusBottom mb-2 bg-light w-100 mx-auto">
                                <p>Definitely! I strive to provide the best service to my clients and work closely with you to ensure your project meets all your needs. With my experience and passion for web development, I'm confident I can deliver a top-notch service that exceeds your expectations.</p>
                            </div>
                        }

                        <div onClick={() => {
                            if (showValue) {
                                setShowValue(false)
                            } else {
                                setShowValue(true)
                            }
                        }} className={`p-1 ${showValue ? "bg-lightGreen radiusTop" : "bg-light radiusFull my-2"} mt-2 d-flex questionBox  flex-row w-100 mx-auto cursor-pointer `}>
                            <div className="d-flex align-items-center">

                                <button className="bg-lightGreen border-0 radiusFull">{showValue ? <AiOutlineMinus className={`m-2 ${showValue ? "text-light" : " text-black"} fs-3`} /> : <AiOutlinePlus className={`m-2 ${showValue ? "text-light" : " text-black"} fs-3`} />}</button>
                            </div>
                            <div className=" d-flex align-items-center px-2">
                                <p className={`my-auto ${showValue ? "text-light" : "text-black"} fs-6  d-inline`}><b>WHY I AM MOST VALUABLE TO CUSTOMERS ?</b></p>
                            </div>
                        </div>
                        {showValue &&
                            <div className="p-3 answerBox animate__animated animate__zoomIn radiusBottom mb-2 bg-light w-100 mx-auto">
                                <p>I'm most valuable to my customers due to my strong commitment to high-quality work, attention to detail, and effective communication. I prioritize customer satisfaction and work hard to ensure their project meets their specific needs and goals. I can provide a valuable service to elevate your web presence.</p>
                            </div>
                        }



                    </div>

                </div>
            </div>
        </div>
    )
}