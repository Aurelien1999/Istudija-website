import './contactCont.css'
import Headercomp from "../component/headerComp";
import FooterCompGarden from '../component/garden/footerCompGarden';
import BarsepGarden from '../component/garden/barsepGarden';
import FooterCompInt from '../component/interior/footerCompInt';
import BarsepInt from '../component/interior/barsepInt';


export default function ContactCont() {
    return (
      <div className="divcontactcontainer">
        <Headercomp/>
        <BarsepInt />
        <FooterCompInt/>
        <BarsepGarden />
        <FooterCompGarden/>
      </div>
    );
  };