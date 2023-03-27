import React, { useState } from 'react'
import "./Slider.scss"
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) =>prev - 1 );
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }

    const data = [
        "https://images.pexels.com/photos/9573704/pexels-photo-9573704.jpeg",
        "https://images.pexels.com/photos/9775888/pexels-photo-9775888.jpeg",
        "https://images.pexels.com/photos/952630/pexels-photo-952630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 
      ];

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon />
            </div>

        </div>
    </div>
  )
}

export default Slider