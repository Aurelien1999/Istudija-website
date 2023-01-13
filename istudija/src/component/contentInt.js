import React, {useEffect} from "react";
import useWindowDimensions from './DimensionComp';
import { Trans, useTranslation} from 'react-i18next';
import './contentInt.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fontSize } from "@mui/system";

export default function ContentInt() {
    const {t, i18n} = useTranslation()
    const {height, width} = useWindowDimensions();
    
    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    }

    useEffect(() => {
        AOS.init();
      }, [])

    return (
            <div style = {{height: height*1.2, width: width, backgroundColor: 'white', overflow : "hidden"}}>
                <div className="divtopright">
                    <h4 className="titletopright" data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">
                        [NTERIOR FOR PERSONALITIES]
                    </h4>
                    <p className="contenttopright" data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">
                        We create beautiful environment together with you. Each interior design is like a new and unrepeatable scenario of design, innovative and sustainable, created with inspiration and love. Art, elegance and diversity of styles.
                        Today interior design as a part of cultural system is functional and essential. Designer has to possess creative thinking, ability to interpret and integrate interior in harmony with architecture by applying the latest design tendencies in forms, materials and colors.
                        The result - positive feelings in the environment in which you work and relax.
                    </p>
                </div>
                <div className="divbottomright">
                    <h4 className="titlebottomright" data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">
                        [INTERIOR DESIGN SERVICES]
                    </h4>
                    <p className="contentbottomright" data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">
                        Interior design project is a process of creation or arrangment of interior envionment that includes designing and execution of the designed project 
                        in the light of development of interior design and tendencies.

                        Communication with you is the beginning of the interior design project. 
                        Your desire, initial assessment of premises (in any stage of building, architecture of building), 
                        functions of premises, concept, planning, light, mood, colors and design, ergonomics and decorative presentation are important.
                    </p>
                </div>
                <div className="divleft">
                <h3 className="titledivleft" data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">
                        [WE OFFER]
                    </h3>
                    <p className="contentdivleft">
                    <h5  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">[DESIGNING]</h5>
            <p data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">-          Interior projects<br/>
            -          Reconstructions<br/>
            -          Separate projects for premises and their parts<br/></p>
                        <h5  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">[CONSULTING DESIGNER`S SUPERVISION]</h5>
                        <p  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">Our long-term experience in interior design projects is so wide that we can surely say - we have provided interior design services in almost all possible premises:</p>
                        <h5  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">PUBLIC PREMISES</h5>
                        <p  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">Schools, sport halls, culture houses, municipality buildings, offices, hotels, cafes, beauty salons, SPA, etc.</p>
                        <h5  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">PRIVATE PREMISES</h5>
                        <p  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">Houses, appartments, separate living premises.</p>
                       <h5  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">[CONTENTS OF INTERIOR DESIGN PROJECT]</h5>
            <p  data-aos="zoom-out" data-aos-offset="300" data-aos-once="true" data-aos-duration="1000">-          Stylistic solution for premises, concept of design<br/>
            -          Measurement of premises (if necessary)<br/>
            -          Consulting, sketches, drawings, 3D visualizations<br/>
            -          Planning of premises, functional solutions, planning of furniture placement<br/>
            -          Layouts on walls<br/>
            -          Offer of finish materials and colors<br/>
            -          Electricity plans - lighting solutions and schemes<br/>
            -          Ceiling plans, levelling solutions, drawings<br/>
            -          Development of projects for bathrooms and WC<br/>
            -          Kitchen<br/>
            -          Fireplace<br/>
            -          Ladders<br/>
            -          Bath house<br/>
            -          Furniture design – offer of ready made furniture and/or designing of furniture for specific premises<br/>
            -          Solutions for curtains and blinds<br/>
            -          Accessories<br/></p>
                    </p>
                </div>
            </div>
        );
}