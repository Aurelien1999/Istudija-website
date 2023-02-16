import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './contentComp.css'
import { Link } from "react-router-dom";


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
                      src="https://www.mymove.com/wp-content/uploads/2022/07/mm-things-you-should-know-about-becoming-an-interior-designer-hero.jpg"
                      className="menuimg">
                    </img>
                    <p className="titleOnImage"><Trans i18nKey="description.titleimgInt"/></p>
                  </Link>
                </div>
                <div className="menudiv">
                  <Link className="menulink" to="./garden"> 
                    <img
                      alt="garden"
                      src="https://images.squarespace-cdn.com/content/v1/5dea42a80d60bb6675fdb54c/1619182116698-VM8JQZATNHI2DWZB2RYY/alaster-anderson-garden-design-planting-installation-garden-lighting.jpg?format=2500w"
                      className="menuimg">
                    </img>
                    <p className="titleOnImage"><Trans i18nKey="description.titleimgGarden"/></p>
                  </Link>
                </div>
                  <div className="sentLB">
                    <Trans i18nKey="description.part3"/>
                  </div>
            </div>
        );
}