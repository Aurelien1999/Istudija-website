import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './contentGarden.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


export default function ContentGarden() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
            <div className="containercontentint">
                <div className="containerdivcontentint">
                    <div className="divcontentintr">
                        <p className="titleleftcontentint" 
                         data-aos="zoom-out"
                         data-aos-offset="200"
                         data-aos-once="true"
                         data-aos-duration="1000">[A remplir]</p>
                        <div className="divfortextoffer">
                            <p data-aos="zoom-out-right"
                            data-aos-offset="200"
                            data-aos-once="true"
                            data-aos-duration="1000">à remplir</p>
                           
                        </div>
                    </div>
                    <div className="divcontentintl">
                        <p className="titleleftcontentint" >[à remplir]</p>
                        <p className="contentinttextpara" >à remplir</p>
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


