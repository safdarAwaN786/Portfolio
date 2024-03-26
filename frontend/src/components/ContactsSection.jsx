import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import axios from "axios";


export default function ContactsSection() {
    const [messageData, setMessageData] = useState(null);

    useEffect(()=>{
         
            if (messageData) {
                axios.post("/send-message", messageData);               
            }
    },[messageData])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        setMessageData({
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        });
    
        form.reset();
    }


    return (

        <div id="contact" className="my-5 sectionBox px-sm-4 px-md-5 px-lg-5 px-3">
            <h3 className="text-center lightGreenColor">Contact Me</h3>
            <h1 className="text-center mb-5">LET'S GET IN TOUCH</h1>

            <div className="row mt-5 pt-5">
                <div className="col-lg-3 col-md-6 col-12 p-lg-3 p-md-3 p-sm-3 p-0">
                    <div className="p-lg-3 p-md-3 my-3  p-0 d-flex flex-column justify-content-center">
                        <BsFillTelephoneFill className="fs-1 mx-auto lightGreenColor" />
                        <div className="p-lg-2 p-md-2 p-0">
                            <h3 className="text-center mb-0">Phone</h3>
                            <p className="text-center fs-5">+923244679807</p>
                        </div>
                    </div>
                    <div className="p-lg-3 p-md-3 my-3  p-0 d-flex flex-column justify-content-center">
                        <MdEmail className="fs-1 mx-auto lightGreenColor" />
                        <div className="p-lg-2 p-md-2 p-0">
                            <h3 className="text-center mb-0">Email</h3>
                            <p className="text-center fs-5">iamsafdarawan@ gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 p-lg-3 p-md-3 p-sm-3 p-0">
                    <div className="p-lg-3 p-md-3 my-3  p-0 d-flex flex-column justify-content-center">
                        <MdLocationPin className="fs-1 mx-auto lightGreenColor" />
                        <div className="p-lg-2 p-md-2 p-0">
                            <h3 className="text-center mb-0">Address</h3>
                            <p className="text-center mb-0 fs-5">Township, Lahore</p>
                            <p className="text-center mb-0 fs-5">Pakistan</p>
                        </div>
                    </div>
                    <div className="p-lg-3 py-lg-1 py-md-1 py-5  p-md-3  my-sm-1 my-md-0 my-lg-0  p-0 d-flex flex-column justify-content-center">
                        <FaGlobe className="fs-1 mx-auto lightGreenColor" />
                        <div className="p-lg-2 p-md-2 p-0">
                            <h3 className="text-center mb-0">Website</h3>
                            <p className="text-center fs-5">imsafdar.onrender.com</p>
                        </div>
                    </div>
                </div>





                <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-lg-3 p-md-3 p-sm-3 my-5 p-0 d-flex flex-column">
                    <form onSubmit={handleSubmit}>


                        <div className="d-flex flex-row flex-wrap">

                            <div className="contactNameBox my-3 pe-lg-2 pe-md-2 ">
                                <input name="name" type="text" className="p-2 w-100 contactInput" placeholder="Name" required />
                            </div>
                            <div className="contactNameBox  my-3 ps-lg-2 ps-md-2">
                                <input name="email" type="email" className="p-2 w-100 contactInput" placeholder="Email" required />
                            </div>
                        </div>


                        <input name="subject" type="text" className="p-2 my-4 w-100 contactInput" placeholder="Subject" required />
                        <textarea rows={7} name="message" type="text" placeholder="Type a message to me.." className="p-2 contactInput w-100" required />
                        <div>
                            <button type="submit" className="py-2 px-3 bg-lightGreen fs-5 messageBtn my-3 text-light ">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>






        </div>
    )
}