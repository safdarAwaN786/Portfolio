import React from "react";
import {ImWhatsapp} from "react-icons/im"

export default function WhatsAppLink(){

    const phoneNumber = "+923244679807"
    const message = "Hi, I would like to chat with you."

    const openWhatsapp = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
        let url;
        if (isMobile) {
          url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        } else {
          url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        }
      
        const target = isMobile ? "_blank" : "whatsapp_web_window";
        window.open(url, target);
      };

    return (
        <div className="whatsappLinkBox animate__animated animate__bounceInDown  p-sm-3 " onClick={openWhatsapp}>
            <ImWhatsapp className="text-light whatsappIcon" />
        </div>
    )
}