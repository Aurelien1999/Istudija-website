import './carrouselInt.css'
import { useEffect, useState } from 'react';
import carr1 from '../../assets/Int/carri1.jpg'
import carr2 from '../../assets/Int/carri2.jpg'
import carr3 from '../../assets/Int/carri3.jpg'
import carr4 from '../../assets/Int/carri4.jpg'
import carr5 from '../../assets/Int/carri5.jpg'

export default function CarrouselInt(){
    const [mod, setmod] = useState(false);
    const [url, seturl] = useState(0)
    const list = [carr1, carr2, carr3, carr4, carr5];

    const toggleModal = ()=> {
      setmod(!mod);
    }
    const toggleModal1 = ()=> {
      setmod(!mod);
      seturl(0);
    }
    const toggleModal2 = ()=> {
      setmod(!mod);
      seturl(1);
    }
    const toggleModal3 = ()=> {
      setmod(!mod);
      seturl(2);
    }
    const toggleModal4 = ()=> {
      setmod(!mod);
      seturl(3);
    }
    const toggleModal5 = ()=> {
      setmod(!mod);
      seturl(4);
    }

    if (mod) {
      document.body.classList.add('active-modal');
    }
    else {
      document.body.classList.remove('active-modal');
    }
    return (
      <div className='containerofdivcarr'>
        <div className='vrai'>
          <div className='containerCarr'>
          <img
              src={carr1}
              className='imagecarr'
              onClick={toggleModal1}
            />
            <img
              src={carr2}
              className='imagecarr2'
              onClick={toggleModal2}
            />
            <img
              src={carr3}
              className='imagecarr'
              onClick={toggleModal3}
            />
            <img
              src={carr4}
              className='imagecarr2'
              onClick={toggleModal4}
              />
            <img
              src={carr5}
              className='imagecarr'
              onClick={toggleModal5}
              />
          </div>
          <div className='containerCarr'>
            <img
              src={carr1}
              className='imagecarr'
              onClick={toggleModal1}
            />
            <img
              src={carr2}
              className='imagecarr2'
              onClick={toggleModal2}
              />
            <img
              src={carr3}
              className='imagecarr'
              onClick={toggleModal3}
              />
            <img
              src={carr4}
              className='imagecarr2'
              onClick={toggleModal4}
              />
            <img
              src={carr5}
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
                src={list[url]}
                className='image-modal'
              />
              <button
                className='close-modal'
                onClick={toggleModal}>
                  <p className='xofthebutton'>X</p>
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