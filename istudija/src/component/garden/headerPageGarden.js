import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './headerPageGarden.css'
import imggar from '../../assets/Garden/carr3.JPG'


export default function HeaderPageGarden() {

    return (
            <div className="hpicontainergar">
                <div className="ivarsp"><p>Ivars</p></div>
                <img
                    alt="interior"
                    className="imgmaingar"
                    src={imggar}>
                </img>
            </div>
        );
}