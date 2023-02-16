import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './contentInt.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContentInt() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
            <div className="containercontentint">
                <div className="containerdivcontentint">
                    <div className="divcontentintr">
                            <p>lorem</p>
                    </div>
                    <div className="divcontentintl">
                            <p>lorem</p>
                    </div>
                </div>
                <div className="divcontentintb">
                    <p>zae</p>
                </div>
            </div>
        );
}