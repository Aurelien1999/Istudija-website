import React from "react";
import { Trans, useTranslation} from 'react-i18next';
import './barsepInt.css'

export default function BarsepInt() {
    return (
            <div className="barsepdivint">
                <p className="barseptitle"><Trans i18nKey="description.titleimgInt"/></p>
            </div>
        );
}