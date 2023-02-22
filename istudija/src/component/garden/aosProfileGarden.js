import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import AOS from 'aos';
import "./aosProfileGarden.css"
import 'aos/dist/aos.css';


export default function AosProfileGarden() {
    useEffect(() => {
        AOS.init();
      }, [])
  
    return (
        <div className="profilecontainer">
          <div className="divverte"></div>
          <p className="titlediv" 
              data-aos="zoom-out"
              data-aos-offset="300"
              data-aos-once="true"
              data-aos-duration="1000">Mon Expérience</p>
          <div className="profiledivimg">
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
            <div className="profiledivright">
              <img
                src="https://f.maformation.fr/edito/sites/3/2018/04/paysagiste.jpg"
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
          </div>
      </div>
        );
}