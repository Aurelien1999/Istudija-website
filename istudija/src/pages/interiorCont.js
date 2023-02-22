import React from "react";
import './interiorCont.css'
import Headercomp from "../component/headerComp";
import AosProfileInt from "../component/interior/aosProfileInt";
import HeaderPageInt from "../component/interior/headerPageInt";
import ContentInt from "../component/interior/contentInt";
import CarrouselInt from "../component/interior/carrouselInt";
import FooterCompInt from "../component/interior/footerCompInt";

export default function InteriorCont() {
    return (
            <div className="divinteriorcontainer">
                <Headercomp/>
                <HeaderPageInt/>
                <AosProfileInt/>
                <ContentInt/>
                <CarrouselInt/>
                <FooterCompInt/>
            </div>
        );
}