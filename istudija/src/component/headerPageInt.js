import React, {useEffect} from "react";
import useWindowDimensions from './DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import './headerPageInt.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function HeaderPageInt() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    } 
    return (
            <div style = {{height: height, width: width, background: "#FFffff"}}>
                <p className="titleonImg">Santa</p>
                <p className="titleonImg2"><Trans i18nKey="description.titleheader"/></p>
                <p className="titleonImg3"><Trans i18nKey="description.titleheaderbottom"/></p>
                <img
                    alt="interior"
                    className="imgmain"
                    src="https://www.mymove.com/wp-content/uploads/2022/07/mm-things-you-should-know-about-becoming-an-interior-designer-hero.jpg"
                    >
                </img>
            </div>
        );
}