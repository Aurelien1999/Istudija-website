import React, {useEffect} from "react";
import useWindowDimensions from './DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import './footerComp.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { SocialIcon } from 'react-social-icons';
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function FooterComp() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    } 
    return (
            <div className="contactView">
              <Link className="visitgardendiv" to="../garden">
                <p className="visitgardentext"> <Trans i18nKey="description.linkfootgar"></Trans></p>
              </Link>
              <div className="socialdiv">
                  <div className="logoface">
                    <SocialIcon classname="face" url="https://www.facebook.com/ISTUDIJA/"/>
                  </div>
              </div>
              <div className="textmiddlediv">
                <p className="textmiddle"><Trans i18nKey="description.footinter"></Trans></p>
              </div>
             {/* <div className="bottomcontact">
              <h2>zone de mailing</h2>
            </div> */}
            <div className="bottomcontact2">
            <p className="bottomnametxt">Santa Birze Stirna</p>
            <div style = {{width : "100%", display: "flex", justifyContent: "center"}}>
              <FaEnvelope className="phoneenvelope" color={"red"}/>
              <p className="bottommailtxt">istudija.santa@gmail.com</p>
            </div>
              <div style = {{ width : "100%", display: "flex", justifyContent: "center"}}>
                <FaPhone className="phoneicon" color={"green"}/>
                <p className="bottomteltxt">+371 29 212 585</p>
              </div>
            </div>
            </div>
        );
}