import React from "react";
import { Trans, useTranslation} from 'react-i18next';
import './barsepGarden.css'

export default function BarsepGarden() {
    return (
            <div className="barsepdiv">
                <p className="barseptitle"><Trans i18nKey="description.titleimgGarden"/></p>
            </div>
        );
}