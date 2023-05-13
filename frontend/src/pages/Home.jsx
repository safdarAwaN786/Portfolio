import React from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactsSection.jsx";
import FaqsSection from "../components/FaqsSection";
import Footer from "../components/Footer";
import WhatsAppLink from "../components/WhatsAppLink.jsx";




export default function Home() {



    return (
        <div>
            <Navbar />
            <IntroSection />
            <AboutSection />
            <ServicesSection />
            <SkillsSection />
            <FaqsSection />
            <ContactSection />
            <Footer />
            <WhatsAppLink />
        </div>
    )
}