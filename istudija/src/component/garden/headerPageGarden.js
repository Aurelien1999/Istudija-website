import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './headerPageGarden.css'

export default function HeaderPageGarden() {

    return (
            <div className="hpicontainer">
                <img
                    alt="interior"
                    className="imgmain"
                    src="https://images.squarespace-cdn.com/content/v1/5dea42a80d60bb6675fdb54c/1619182116698-VM8JQZATNHI2DWZB2RYY/alaster-anderson-garden-design-planting-installation-garden-lighting.jpg?format=2500w"
                    >
                </img>
                <p className="ivarsp">Ivars</p>
                <p className="ivarspbelow"><Trans i18nKey="description.titleheader"/></p>
            </div>
        );
}