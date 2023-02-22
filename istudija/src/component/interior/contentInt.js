import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './contentInt.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


export default function ContentInt() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
            <div className="containercontentint">
                <div className="containerdivcontentint">
                    <div className="divcontentintr">
                        <div className="divfortextoffer">
                            <p className="titleleftcontentint" 
                             data-aos="zoom-out"
                             data-aos-offset="200"
                             data-aos-once="true"
                             data-aos-duration="1000">[We offer]</p>
                            <p data-aos="zoom-out-right"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Stylistic solution for premises, concept of design</p>
                            <p data-aos="zoom-out-left"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Measurement of premises (if necessary)</p>
                            <p data-aos="zoom-out-right"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Consulting, sketches, drawings, 3D visualizations</p>
                            <p data-aos="zoom-out-left"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Planning of premises, functional solutions, planning of furniture placement</p>
                            <p data-aos="zoom-out-right"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Layouts on walls</p>
                            <p data-aos="zoom-out-left"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Offer of finish materials and colors</p>
                            <p data-aos="zoom-out-right"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Electricity plans - lighting solutions and schemes</p>
                            <p data-aos="zoom-out-left"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Development of projects for bathrooms and WC</p>
                            <p data-aos="zoom-out-right"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Kitchen, fireplace, ladders, bath house, accessories</p>
                            <p data-aos="zoom-out-left"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Furniture design – offer of ready made furniture and/or designing of furniture for specific premises</p>
                            <p data-aos="zoom-out-right"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Solutions for curtains and blinds</p>
                            <p data-aos="zoom-out-left"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">Ceiling plans, levelling solutions, drawings</p>
                        </div>
                    </div>
                    <div className="divcontentintl">
                        <p className="titleleftcontentint" >[INTERIOR FOR PERSONALITIES]</p>
                        <p className="contentinttextpara" >We create beautiful environment together with you. Each interior design is like a new
                            and unrepeatable scenario of design, innovative and sustainable, created with inspiration and love.
                            Art, elegance and diversity of styles.
                            Today interior design as a part of cultural system is functional and essential.
                            Designer has to possess creative thinking, ability to interpret and integrate 
                            interior in harmony with architecture by applying the latest design tendencies in forms, materials and colors.
                            The result - positive feelings in the environment in which you work and relax.</p>
                        <p className="titleleftcontentint">[INTERIOR DESIGN SERVICES]</p>
                        <p className="contentinttextpara" >Interior design project is a process of creation or arrangment of interior envionment 
                            that includes designing and execution of the designed project 
                            in the light of development of interior design and tendencies.
                            Communication with you is the beginning of the interior design project. 
                            Your desire, initial assessment of premises (in any stage of building, architecture of building), 
                            functions of premises, concept, planning, light, mood, colors and design,
                            ergonomics and decorative presentation are important.</p>
                    </div>
                </div>
                {/* <div className="divcontentintb">
                    <Link className="buttonlinktogallery" style={{textDecoration:"none"}} to="../gallery">
                        <p>Visit gallery</p>
                    </Link>
                </div> */}
            </div>
        );
}


