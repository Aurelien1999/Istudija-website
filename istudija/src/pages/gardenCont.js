import './gardenCont.css'
import Headercomp from "../component/headerComp";
import HeaderPageGarden from '../component/garden/headerPageGarden';
import FooterCompGarden from '../component/garden/footerCompGarden';


export default function GardenCont() {
    return (
      <div className="divgardencontainer">
          <Headercomp/>
          <HeaderPageGarden/>
          <FooterCompGarden/>
      </div>
    );
  };