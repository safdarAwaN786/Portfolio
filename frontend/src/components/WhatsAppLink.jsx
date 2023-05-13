import React from "react";
import {ImWhatsapp} from "react-icons/im"

export default function WhatsAppLink(){

    const phoneNumber = "+923244679807"
    const message = "Hi, I would like to chat with you."

    const openWhatsapp = ()=>{
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url);
    }


    return (
        <div className="whatsappLinkBox animate__animated animate__bounceInDown p-lg-3 p-md-3 p-2 " onClick={openWhatsapp}>
            <ImWhatsapp className="text-light fs-1" />
        </div>
    )
}