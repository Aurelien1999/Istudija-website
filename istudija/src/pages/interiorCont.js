import React, {useEffect} from "react";
import useWindowDimensions from '../component/DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import IntCont from "./intCont";
import './interiorCont.css'
import FooterComp from "../component/footerComp";
import Headercomp from "../component/headerComp";
import AosProfileInt from "../component/aosProfileInt";
import GalleryInt from "../component/galleryInt";
import HeaderPageInt from "../component/headerPageInt";

export default function InteriorCont() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    } 
    return (
            <div style={{overflow: "hidden"}}>
                <Headercomp/>
                <HeaderPageInt/>
                <AosProfileInt/>
                <IntCont/>
                <FooterComp/>
            </div>
        );
}