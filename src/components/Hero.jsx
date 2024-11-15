/* eslint-disable react/prop-types */
import './Hero.css';

function Hero({ img_src }) {
  return (
    <div className="hero-image">
      <div className="hero-img-wrapper">
        <img src={img_src} />
      </div>
    </div>
  )
}

export default Hero;
