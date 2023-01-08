import Headercomp from '../component/headerComp';
import ContentComp from '../component/contentComp';
import useWindowDimensions from '../component/DimensionComp';


export default function Home() {
    const {height, width} = useWindowDimensions();
    return (
        <div style = {{height:height, width:width, backgroundColor:'#fff', overflow:"hidden"}}>
            <Headercomp />
            <ContentComp />
        </div>
    );
  };