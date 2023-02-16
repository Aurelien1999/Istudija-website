import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './headerPageInt.css'

export default function HeaderPageInt() {

    return (
            <div className="hpicontainer">
                <img
                    alt="interior"
                    className="imgmain"
                    src="https://www.mymove.com/wp-content/uploads/2022/07/mm-things-you-should-know-about-becoming-an-interior-designer-hero.jpg"
                    >
                </img>
                <p className="santap">Santa</p>
                <p className="santapbelow"><Trans i18nKey="description.titleheader"/></p>
            </div>
        );
}