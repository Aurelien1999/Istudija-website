import React, {useEffect} from "react";
import useWindowDimensions from './DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import './galleryInt.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function GalleryInt() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    } 
    return (
            <div style = {{height: height, width: width, backgroundColor: 'grey'}}>
              <Link to="../gallery">
                <p style={{position:" absolute"}}>gallery</p>
              </Link>
            </div>
        );
}