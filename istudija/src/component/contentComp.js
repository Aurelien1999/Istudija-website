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
            <div style = {{height:"100%", width: width, backgroundColor: '#121212', overflow: "hidden"}}>

              <Link className="linkInt" to="/interior">
                <div className="divInt">
                  <img
                    alt="interior"
                    src="https://www.mymove.com/wp-content/uploads/2022/07/mm-things-you-should-know-about-becoming-an-interior-designer-hero.jpg"
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
             
              <Link className="linkGarden" to="/garden">
                <div className="divGarden">
                  <img
                    alt="garden"
                    src="https://images.squarespace-cdn.com/content/v1/5dea42a80d60bb6675fdb54c/1619182116698-VM8JQZATNHI2DWZB2RYY/alaster-anderson-garden-design-planting-installation-garden-lighting.jpg?format=2500w"
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