import React from 'react'
import './Hero.css'

const Hero = ({title, description, image, isReversed}) => {
return (
    <div className={`hero_container ${isReversed ? 'background-white' : ''}`}>

<div className={`hero_sub_container container ${isReversed ? 'reversed' : ''}`}>
  <div className='hero_content '>  
            <h1>{title}</h1>
            <p>
                {description}
            </p>
            <div>
                <button>Explore More</button>
                <button>Contact Us</button>
            </div>
        </div>

        <div className='hero_image'>
            <img src={image} alt="Ferrari" />
        </div>
</div>

      
    </div>
)
}

export default Hero