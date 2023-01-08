import Headercomp from '../component/headerComp';
import ContentComp from '../component/contentComp';
import useWindowDimensions from '../component/DimensionComp';
import './gardenCont.css'


export default function GardenCont() {
    const {height, width} = useWindowDimensions();
    return (
      <div style={{ height: height, width: width, justifyContent: "center", alignContent:"center", background: 'silver'}}>
      </div>
    );
  };