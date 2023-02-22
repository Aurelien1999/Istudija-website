import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './contentComp.css'
import { Link } from "react-router-dom";
import imggar from '../assets/Garden/carr3.JPG'
import imgint from '../assets/Int/222.jpg'



export default function ContentComp() {
    const {t, i18n} = useTranslation()
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    }       

    return (
            <div className="menucontainer">
                <div className="menudiv">
                  <Link className="menulink" to="./interior">
                    <img
                      alt="interior"
                      src={imgint}
                      className="menuimg">
                    </img>
                    <p className="titleOnImage"><Trans i18nKey="description.titleimgInt"/></p>
                  </Link>
                </div>
                <div className="menudiv">
                  <Link className="menulink" to="./garden"> 
                    <img
                      alt="garden"
                      src={imggar}
                      className="menuimg">
                    </img>
                    <p className="titleOnImage"><Trans i18nKey="description.titleimgGarden"/></p>
                  </Link>
                </div>
                  {/* <div className="sentLB">
                    <Trans i18nKey="description.part3"/>
                  </div> */}
            </div>
        );
}