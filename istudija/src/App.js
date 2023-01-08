import './App.css';
import React from "react";
import useWindowDimensions from './component/DimensionComp';
import {useTranslation} from 'react-i18next';
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import IntCont from "./pages/intCont";
import GardenCont from "./pages/gardenCont";
import NoPage from "./pages/NoPage";
import InteriorCont from './pages/interiorCont';

function App() {
  const {t, i18n} = useTranslation()
  const {height, width} = useWindowDimensions();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Home />} />
            <Route path="interior" element={<InteriorCont />} />
            <Route path="garden" element={<GardenCont />} />
            <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
  );
}

export default App;
