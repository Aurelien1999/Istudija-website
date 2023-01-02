import Headercomp from '../component/headerComp';
import ContentComp from '../component/contentComp';
import ContactComp from '../component/contactComp';
import useWindowDimensions from '../component/DimensionComp';
import './gardenCont.css'


export default function GardenCont() {
    const {height, width} = useWindowDimensions();
    return (
      <div style={{ height: height, width: width, justifyContent: "center", alignContent:"center", background: 'silver'}}>
        <div className='carr'>
          <div className="imgs">
            <img
            alt="test"
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            className='imgdiv'
            /> 
            <img
            alt="test1"
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            className='imgdiv'
            /> 
            <img
            alt="test2"
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            className='imgdiv'
            />  
            <img
            alt="test3"
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            className='imgdiv'
            /> 
          </div>
        </div>
      </div>
    );
  };