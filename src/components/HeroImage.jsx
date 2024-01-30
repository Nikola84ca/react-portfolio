import "./HeroImageStyles.css";

import React from 'react'
import IntroImg from "../images/heroimage.jpg"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} />
        </div>
    </div>
  )
}

export default HeroImage