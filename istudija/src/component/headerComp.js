import React from "react";
import useWindowDimensions from './DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import './headerComp.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import "../assets/Alegreya-VariableFont_wght.ttf";


export default function Headercomp() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
      console.log(i18n.language);
    }       
    return (
            <div className="headerdiv">
                <Link className="logoContainer" to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="logo"
                        >
                    </img>
                </Link>
                <div className="divheaderlink">
                    <Link style={{textDecoration:"none"}} className="titleG" to="/garden">
                        <Trans i18nKey="description.titleimgGarden"/>
                    </Link>
                    <Link style={{textDecoration:"none"}} className="titleG" to="/interior">
                        <Trans i18nKey="description.titleimgInt"/>
                    </Link>
                    <Link style={{textDecoration:"none"}} className="titleG" to="/">
                        <Trans i18nKey="description.headercont"/>
                    </Link>
                </div>
                <div className="flag">
                    <img
                        alt="Latvija"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/LV.svg"
                        className="flagimg"
                        onClick={() => changeLanguage("lv")}
                    />
                    <img
                        alt="England"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                        className="flagimg"
                        onClick={() => changeLanguage("en")}
                    />
                    <img
                        alt="Russia"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                        className="flagimg"
                        onClick={() => changeLanguage("ru")}
                    />
                    <img
                        alt="France"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
                        className="flagimg"
                        onClick={() => changeLanguage("fr")}
                    />
                    
                </div>
            </div>
        );
}