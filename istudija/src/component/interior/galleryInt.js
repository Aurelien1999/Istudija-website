import React, {useEffect} from "react";
import { Trans, useTranslation} from 'react-i18next';
import './galleryInt.css'
import { Link } from "react-router-dom";

export default function GalleryInt() {

    return (
            <div style = {{height: "1600px", width: "900px", backgroundColor: 'grey'}}>
              <Link to="../gallery">
                <p style={{position:" absolute"}}>gallery</p>
              </Link>
            </div>
        );
}