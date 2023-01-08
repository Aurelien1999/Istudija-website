import React, {useEffect} from "react";
import useWindowDimensions from '../component/DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import IntCont from "./intCont";
import './interiorCont.css'
import FooterComp from "../component/footerComp";
import Headercomp from "../component/headerComp";

export default function InteriorCont() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    } 
    return (
            <div style={{overflow: "hidden"}}>
                <Headercomp/>
                <div style = {{height: height, width: width, background: "#FFffff"}}>
                <p className="titleonImg">Santa</p>
                <p className="titleonImg2">more than just a designer</p>
                <p className="titleonImg3">Istudija, with 30 years of experience..., Santa know how to tranform a environment..</p>
                <img
                    alt="interior"
                    className="imgmain"
                    src="https://www.mymove.com/wp-content/uploads/2022/07/mm-things-you-should-know-about-becoming-an-interior-designer-hero.jpg"
                    >
                  </img>
                </div>
                <div style = {{height: height, width: width, background: "#FFffff"}}></div>
                <IntCont/>
                <FooterComp/>
                
            </div>
        );
}