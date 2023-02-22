import './gardenCont.css'
import Headercomp from "../component/headerComp";
import HeaderPageGarden from '../component/garden/headerPageGarden';
import FooterCompGarden from '../component/garden/footerCompGarden';
import AosProfileGarden from '../component/garden/aosProfileGarden';
import CarrouselGarden from '../component/garden/carrouselGarden';
import ContentGarden from '../component/garden/contentGarden';


export default function GardenCont() {
    return (
      <div className="divgardencontainer">
          <Headercomp/>
          <HeaderPageGarden/>
          <AosProfileGarden />
          <ContentGarden />
          <CarrouselGarden />
          <FooterCompGarden/>
      </div>
    );
  };