import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './headerPageInt.css'
import imgint from '../../assets/Int/222.jpg'



export default function HeaderPageInt() {

    return (
            <div className="hpicontainerint">
                <div className="santap"><p>Santa</p></div>
                <img
                    alt="interior"
                    className="imgmainint"
                    src={imgint}
                    >
                </img>
            </div>
        );
}