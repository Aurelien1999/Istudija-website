import React from "react";
import { Trans, useTranslation} from 'react-i18next';
import './headerComp.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import "../assets/Alegreya-VariableFont_wght.ttf";


export default function Headercomp() {
    const {t, i18n} = useTranslation()
    
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
                    <Link style={{textDecoration:"none"}} className="titleG" to="/interior">
                        <Trans i18nKey="description.titleimgInt"/>
                    </Link>
                    <Link style={{textDecoration:"none"}} className="titleG" to="/garden">
                        <Trans i18nKey="description.titleimgGarden"/>
                    </Link>
                    <Link style={{textDecoration:"none"}} className="titleG" to="/contact">
                        <Trans i18nKey="description.headercont"/>
                    </Link>
                </div>
                <div className="flag">
                    <div className="flags">
                        <img
                            alt="Latvija"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/2560px-Flag_of_Latvia.svg.png"
                            className="flagimg"
                            onClick={() => changeLanguage("lv")}
                            />
                    </div>
                    <div className="flags">
                    <img
                        alt="England"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/2560px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                        className="flagimg"
                        onClick={() => changeLanguage("en")}
                    />
                    </div>
                   
                    <div className="flags">
                    <img
                        alt="France"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
                        className="flagimg"
                        onClick={() => changeLanguage("fr")}
                    />
                    </div>
                </div>
            </div>
        );
}