import React from "react";
import FullImage from "../images/FullImage.jpg";
import CV from "../images/M Safdar CV.pdf";



export default function InfoSection() {


    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'M Safdar CV.pdf';
        link.click();
    }

    return (
        <div id="about" className="my-5 sectionBox px-sm-4 px-md-5 px-lg-5 px-3">


            <h3 className="text-center lightGreenColor">About Me</h3>
            <h1 className="text-center mb-5">WELCOME TO MY SITE</h1>
            <div className="row mt-5 pt-3">
                <div className="col-lg-5 col-md-6 col-12 bg-black  p-3 d-flex justify-content-center borderRadius">
                    <img className="infoImage borderRadius" src={FullImage} />
                </div>
                <div className="col-lg-7 col-md-6 col-12 py-4 px-md-4 px-lg-5 px-3">
                    <h4>I'M PROFESIONAL WEB DESIGNER AND EDEVELOPER.</h4>
                    <ul className="pt-3 list-unstyled">
                        <li className="fontSizeChange py-2"> <span className="infoProperty"><b>Name</b></span> <b className="me-2">: </b>  Safdar Awan </li>
                        <li className="fontSizeChange py-2"> <span className="infoProperty"><b>Hobby</b></span> <b className="me-2">: </b>Discovering and Creating new things. </li>
                        <li className="fontSizeChange py-2"> <span className="infoProperty"><b>Languages</b></span> <b className="me-2">: </b> English and Urdu </li>
                        <li className="fontSizeChange py-2"> <span className="infoProperty"><b>Experience</b></span> <b className="me-2">: </b> 1.5 years </li>
                        <li className="fontSizeChange py-2"> <span className="infoProperty"><b>Phone</b></span> <b className="me-2">: </b> +923244679807 </li>
                        <li className="fontSizeChange py-2"> <span className="infoProperty"><b>Email</b></span> <b className="me-2">: </b> safdarstudent@gmail.com </li>
                        <li className="fontSizeChange py-2"> <span className="infoProperty"><b>Education</b></span> <b className="me-2">: </b> BS in Software Engineering </li>
                        <li className="fontSizeChange py-2"> <span className="infoProperty"><b>FREELANCE</b></span> <b className="me-2">: </b>Available </li>
                    </ul>
                    <button onClick={downloadCV} className="py-2   px-3 border-0 bg-lightGreen text-light"><b> DOWNLOAD CV </b></button>
                </div>
            </div>




        </div>
    )
}