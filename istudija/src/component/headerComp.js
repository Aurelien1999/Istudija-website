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
                <div style = {{ top: "35%", right: "10%", width: "30%", position : "absolute", justifyContent: "space-between", display: "table"}}>
                    <div className="titleG">
                        <div className="divclick">
                            <Link style = {{textDecoration: "none", color : "#FFF"}} to="/garden">
                                <Trans i18nKey="description.titleimgGarden"/>
                            </Link>
                        </div>
                    </div>
                    <div className="titleG">
                        <div className="divclick">
                            <Link style = {{textDecoration: "none", color: "#FFF"}} to="/interior">
                                <Trans i18nKey="description.titleimgInt"/>
                            </Link>
                        </div>
                    </div>
                    <div className="titleG">
                        <div className="divclick">
                            <Link style = {{textDecoration: "none", color : "#FFF"}} to="/">
                                <Trans i18nKey="description.headercont"/>
                            </Link>
                        </div>
                    </div>
                </div>
                    <div className="flags" onClick={() => changeLanguage("en")}>
                        <img
                            alt="England"
                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                            className="flagsimg"
                            />
                    </div>
                    <div className="flags2" onClick={() => changeLanguage("ru")}>
                        <img
                            alt="Russia"
                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                            className="flagsimg"
                        />
                    </div>
                    <img
                        alt="France"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
                        className="flags3"
                        onClick={() => changeLanguage("fr")}
                    />
                    <img
                        alt="Latvija"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/LV.svg"
                        className="flags4"
                        onClick={() => changeLanguage("lv")}
                    />
                    <Link className="logoContainer" to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="logo"
                            >
                        </img>
                    </Link>
            </div>
        );
}