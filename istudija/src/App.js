import './App.css';
import React from "react";
import {useTranslation} from 'react-i18next';
import { Routes, Route } from "react-router-dom";
import GardenCont from "./pages/gardenCont";
import NoPage from "./pages/NoPage";
import InteriorCont from './pages/interiorCont';
import MenuCont from './pages/menuCont';
import ContactCont from './pages/contactCont';
import GalleryCont from './pages/galleryCont';

function App() {
  const {t, i18n} = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
        <Routes>
            <Route index element={<MenuCont />} />
            <Route path="interior" element={<InteriorCont />} />
            <Route path="garden" element={<GardenCont />} />
            <Route path="contact" element={<ContactCont />} />
            <Route path="gallery" element={<GalleryCont />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
  );
}

export default App;
