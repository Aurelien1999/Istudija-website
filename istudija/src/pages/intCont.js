import useWindowDimensions from '../component/DimensionComp';
import './intCont.css'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Trans, useTranslation} from 'react-i18next';
import "../assets/Alegreya-VariableFont_wght.ttf"

export default function IntCont(){
    const {height, width} = useWindowDimensions();
    const [mod, setmod] = useState(false);
    const [url, seturl] = useState("")
    const {t, i18n} = useTranslation()

    useEffect(() => {
      AOS.init();
    }, [])

    const toggleModal = ()=> {
      setmod(!mod);
    }
    const toggleModal1 = ()=> {
      setmod(!mod);
      seturl("https://carlislehomes.com.au/assets/Uploads/8b2be161ec/Modern-Mediterranean.jpg");
    }
    const toggleModal2 = ()=> {
      setmod(!mod);
      seturl("http://cdn.home-designing.com/wp-content/uploads/2013/06/modern-neutral-living-room-4.jpg");
    }
    const toggleModal3 = ()=> {
      setmod(!mod);
      seturl("https://i.ytimg.com/vi/jz2mL0ortEE/maxresdefault.jpg");
    }
    const toggleModal4 = ()=> {
      setmod(!mod);
      seturl("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg");
    }
    const toggleModal5 = ()=> {
      setmod(!mod);
      seturl("https://media.architecturaldigest.com/photos/57506662f77873823f7d164e/master/w_3200,h_2087,c_limit/0716-jamie-mccourt-malibu-home-1.jpg");
    }

    if (mod) {
      document.body.classList.add('active-modal');
    }
    else {
      document.body.classList.remove('active-modal');
    }
    return (
      <div style = {{height: height, width:width, backgroundColor:"black", overflowX: "hidden"}}>
          <img
            src="https://img.freepik.com/free-vector/watercolor-roses-wallpaper_79603-1168.jpg?w=2000"
            className='img-bg'
            />
        {/* <div className='titlecarr'>
           <Trans i18nKey="description.carr"/>
        </div> */}
        <div className='vrai'>
          <div className='containerCarr'>
            <img
              src="https://carlislehomes.com.au/assets/Uploads/8b2be161ec/Modern-Mediterranean.jpg"
              className='imagecarr'
              onClick={toggleModal1}
            />
            <img
              src="http://cdn.home-designing.com/wp-content/uploads/2013/06/modern-neutral-living-room-4.jpg"
              className='imagecarr2'
              onClick={toggleModal2}
            />
            <img
              src="https://i.ytimg.com/vi/jz2mL0ortEE/maxresdefault.jpg"
              className='imagecarr'
              onClick={toggleModal3}
            />
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg"
              className='imagecarr2'
              onClick={toggleModal4}
              />
            <img
              src="https://media.architecturaldigest.com/photos/57506662f77873823f7d164e/master/w_3200,h_2087,c_limit/0716-jamie-mccourt-malibu-home-1.jpg"
              className='imagecarr'
              onClick={toggleModal5}
              />
          </div>
          <div className='containerCarr'>
            <img
              src="https://carlislehomes.com.au/assets/Uploads/8b2be161ec/Modern-Mediterranean.jpg"
              className='imagecarr'
              onClick={toggleModal1}
            />
            <img
              src="http://cdn.home-designing.com/wp-content/uploads/2013/06/modern-neutral-living-room-4.jpg"
              className='imagecarr2'
              onClick={toggleModal2}
              />
            <img
              src="https://i.ytimg.com/vi/jz2mL0ortEE/maxresdefault.jpg"
              className='imagecarr'
              onClick={toggleModal3}
              />
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg"
              className='imagecarr2'
              onClick={toggleModal4}
              />
            <img
              src="https://media.architecturaldigest.com/photos/57506662f77873823f7d164e/master/w_3200,h_2087,c_limit/0716-jamie-mccourt-malibu-home-1.jpg"
              className='imagecarr'
              onClick={toggleModal5}
              />
            </div>
        </div>
        {mod && (
          <div className='modal'>
            <div className='overlay' onClick={toggleModal}></div>
            <div className='modal-content'>
              <img
                src={url}
                className='image-modal'
              />
              <button
                className='close-modal'
                onClick={toggleModal}>
                  <p className='t-btn'>X</p>
              </button>
            </div>
          </div>
          )}
          </div>
    );
  };



        {/* <div data-aos="fade-left" 
             data-aos-duration="1000"
             data-aos-offset="300"
             className='divprofile'
        >
          <h2>azeazezeaaze</h2>
          <img
            src="https://img.freepik.com/free-photo/front-view-elegant-businesswoman-holding-clipboard-with-copy-space_23-2148788842.jpg?w=2000"
            className='imageProfile'
          />
        </div> */}