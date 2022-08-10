import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url: 'images/msn2022.jpg',
  alt: 'msn2022',
  },
  {
  url: 'images/deep21.jpg',
  alt: 'deep21',
  },
  {
  url: 'images/cnygames2022.jpg',
  alt: 'cnygames2022',
  },
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false
};

function Slideshow(){
    return (
        <Fade {...fadeProperties}>
          {fadeImages.map((each, index) => (
            <img key={index} style={{ width: "100%" }} src={each} alt={each}/>
          ))}
        </Fade>
    );
  };

  export default Slideshow;
  