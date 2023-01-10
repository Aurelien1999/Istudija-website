import React, {useEffect} from "react";
import useWindowDimensions from './DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import { Link } from "react-router-dom";
import AOS from 'aos';
import "./aosProfileInt.css"
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';
import { positions } from "@mui/system";
import { motion } from "framer-motion"
import "../assets/Abel-Regular.ttf";


export default function AosProfileInt() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    }
    useEffect(() => {
        AOS.init();
      }, [])
  
    return (
        <div style = {{height: height, width: width, overflow: "hidden"}}>
                <img
                  src="https://svgsilh.com/svg/2024359.svg"
                  className='imgbg2'
                  data-aos="zoom-out"
                  data-aos-offset="300"
                  data-aos-once="true"
                  data-aos-duration="3000"
                  />
                  <div className="titlediv" data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">
                   <Trans i18nKey="description.titleprofile"/>
                  </div>
               <div className="aosdiv" data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">
                  <img
                      src="https://mobile-img.lpcdn.ca/lpca/924x/d6b197c4/c664a2a5862630268e6c0832594729c9.jpeg"
                      className="imgProfile">
                  </img>
               </div>
               <div className="aosdivtext" data-aos="zoom-out" data-aos-offset="300" data-aos-duration="1000" data-aos-once="true">
                  <img
                      src="https://thumbs.dreamstime.com/b/happy-family-four-smiling-together-outdoors-41938163.jpg"
                      className="img-txt">
                  </img>
                  <h5 className="textp">[<Trans i18nKey="description.titletextprofile"/>]</h5>
                  <p className="textp2"><Trans i18nKey="description.textprofile"/></p>
               </div>
            </div>
        );
}