import Headercomp from '../component/headerComp';
import useWindowDimensions from '../component/DimensionComp';


export default function Gallery() {
    const {height, width} = useWindowDimensions();
    return (
        <div style = {{height:height, width:width, backgroundColor:'#fff', overflow:"hidden"}}>
            <Headercomp />
        </div>
    );
  };