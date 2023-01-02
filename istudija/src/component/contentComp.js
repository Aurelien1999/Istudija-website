import React, {useEffect} from "react";
import useWindowDimensions from './DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import './contentComp.css'
import { Link } from "react-router-dom";


export default function ContentComp() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    }       

    return (
            <div style = {{height:"70%", width: width, backgroundColor: '#fff', overflow: "hidden"}}>

              <Link className="linkInt" to="/Blogs">
                <div className="divInt">
                  <img
                    alt="interior"
                    src="https://i.pinimg.com/originals/00/89/cd/0089cd71c3c4278d19a54a9b0f2588c6.jpg"
                    className="imgInt"
                    >
                  </img>
                  <div className="titleOnImage">
                      <Trans i18nKey="description.titleimgInt"/>
                  </div>
                </div>
                <div className="btn btn-one">
                    <span>
                      <Trans i18nKey="description.buttonunderimg"/>
                    </span>
                </div>
              </Link>
             
              <Link className="linkGarden" to="/Contact">
                <div className="divGarden">
                  <img
                    alt="garden"
                    src="https://wallpaper.dog/large/17001144.jpg"
                    className="imgGarden"
                    ></img>
                    <div className="titleOnImage2">
                      <Trans i18nKey="description.titleimgGarden"/>
                    </div>
                  </div>
                    <div className="btn btn-one">
                      <span>
                        <Trans i18nKey="description.buttonunderimg"/>
                      </span>
                    </div>
                </Link>
                <div className="sentLB">
                   <Trans i18nKey="description.part3"/>
                </div>
                
            </div>
        );
}