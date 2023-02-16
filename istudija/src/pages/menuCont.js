import Headercomp from '../component/headerComp';
import ContentComp from '../component/contentComp';
import './menuCont.css'


export default function MenuCont() {
    return (
        <div className="homecontainer">
            <Headercomp />
            <ContentComp />
        </div>
    );
  };