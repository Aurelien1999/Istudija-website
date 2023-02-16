import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import AOS from 'aos';
import "./aosProfileInt.css"
import 'aos/dist/aos.css';


export default function AosProfileInt() {
    useEffect(() => {
        AOS.init();
      }, [])
  
    return (
        <div className="profilecontainer">
          <p className="titlediv" 
              data-aos="zoom-out"
              data-aos-offset="300"
              data-aos-once="true"
              data-aos-duration="1000">
            <Trans i18nKey="description.titleprofile"/>
          </p>
          <img
            src="https://svgsilh.com/svg/2024359.svg"
            className='imgbg2'
            data-aos="zoom-out"
            data-aos-offset="300"
            data-aos-once="true"
            data-aos-duration="2000"
          />
          <div className="profiledivimg">
            <div className="profiledivright">
              <img
                src="https://media.istockphoto.com/id/1139999076/fr/photo/jeune-femme-appr%C3%A9ciant-la-rome.jpg?s=612x612&w=0&k=20&c=onRHUmD4M6SMkTExPAfaf1R3zJUL8yzq9qOIH84fYhA="
                className="profileimg"
                data-aos="zoom-out"
                data-aos-offset="300"
                data-aos-once="true"
                data-aos-duration="2000">
              </img>
              <p className="titleimgright"
                  data-aos="zoom-out"
                  data-aos-offset="100"
                  data-aos-once="true"
                  data-aos-duration="2000">[<Trans i18nKey="description.titletextprofile"></Trans>]</p>
              <p className="textimgright"
                  data-aos="zoom-out"
                  data-aos-offset="100"
                  data-aos-once="true"
                  data-aos-duration="2000">
              <Trans i18nKey="description.textprofile"></Trans></p>
            </div>
            <div className="profiledivleft">
              <img
                src="https://www.selexium.com/app/uploads/2021/08/succession-et-famille-recomposee-mode-d-emploi.jpg"
                className="profileimgleft" 
                data-aos="zoom-out"
                data-aos-offset="300"
                data-aos-once="true"
                data-aos-duration="2000">
              </img>
              <p className="titleimgleft"
               data-aos="zoom-out"
               data-aos-offset="100"
               data-aos-once="true"
               data-aos-duration="2000">[<Trans i18nKey="description.titletextprofile"></Trans>]</p>
              <p className="textimgleft"
                  data-aos="zoom-out"
                  data-aos-offset="100"
                  data-aos-once="true"
                  data-aos-duration="2000">
              <Trans i18nKey="description.textprofile"></Trans></p>
            </div>
          </div>
      </div>
        );
}