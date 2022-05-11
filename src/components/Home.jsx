import React, {useState} from 'react';
import './Home.css';
import Grettings from './Grettings';

export const Home = () => {
  const[contact,SetContact]=useState('')
  const call = () =>{
    let newCall = '01829018244';
    SetContact(newCall)
  }
  return (
    <div className='container-fluid mt-5' id='home' style={{ 
        backgroundImage: `linear-gradient(#660066,green)`,backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',backgroundSize:`100% 100%`, 
      }}>
        <div className="row">
        <div className="home  col-12 col-sm-12 col-md-12 col-lg-12 m-auto " >
            <div className="row">
                <div className="home col-12 col-sm-6 col-md-6 col-lg-6 my-3 bg- text-warning d-flex justify-content-center align-items-center" >
                    <img src="habib.jpg" data-aos="slide-right" data-aos-duration="1000" className="img-fluid h-50 shadow rounded p-2 img-thumbnail " alt="Habib" />
                    <div className="">
                      <div className=" ml-3 font-weight-bold text-center" style={{color:'#66ff66',}}>
                            <Grettings/>
                            </div>
                        <h1 data-aos="zoom-out" data-aos-duration="1000">মোঃ হাবিবুর রহমান</h1>
                        <div className="text-danger text-4 d-flex text-light ml-3" data-aos="slide-left" data-aos-duration="1000">এই দোকানের গর্বিত<p className="text-warning ml-1"> মালিক </p>
                        </div>
                        <a href="tel:{contact}" onClick={call} className="btn btn-outline-warning ml-3" data-aos="zoom-out" data-aos-duration="2000">কল করুন </a>
                    </div>
                </div>
                <div className=" home col-12 col-sm-6 col-md-6 col-lg-6 my-3 image bg- d-flex justify-content-center align-items-center">

                    <img src="shop.webp" className="img-fluid h-75" data-aos="slide-left" data-aos-duration="500" alt=""/>
                </div> 
            </div>
        </div>
    </div>
    </div>
  )
}
