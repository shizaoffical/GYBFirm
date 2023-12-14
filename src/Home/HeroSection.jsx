import React from 'react'
import MainButton from '../Components/MainButton'
import Text from '../Components/Text';
import SimpleCompanies from '../Components/SimpleCompanies'
import RatingCompanies from '../Components/RatingCompanies';

function HeroSection(props) {
  return (
    <div className='hero-section-main-div'>
      <div className='hero-section-div-a grid-item'>
        <h1 className='hero-section-heading'>{props.heading}</h1>
        <Text className='hero-section-text' text={props.text}/>
        {props.btntext &&  <MainButton text={props.btntext} path={props.path} icon={<><i className="fa-solid fa-arrow-right"></i></>} 
        anotherclass="hero-section-btn rounded-pill" />}
       
        <div >
          {props.GybfirmImage && 
          <SimpleCompanies
           image={props.GybfirmImage}
            heading={props.Gybfirmheading} text={props.Gybfirmtext}/>}

          {props.trustedimage && 
          <RatingCompanies 
          image={props.trustedimage}
          rating={props.trustedrating} heading={props.trustedheading}  />}

          {props.trustedimage2 && 
          <RatingCompanies  anotherclass="green-ratings"   ratingclass={props.ratingclass}
          image={props.trustedimage2}
          rating={props.trustedrating2} heading={props.trustedheading2}  />}
          
          {props.joinimage && 
          <SimpleCompanies
          image={props.joinimage}
          text={props.jointext}  />}
        </div>
      </div>
      <img src={props.heroImage}alt="" className={`hero-section-image-1 grid-item ${props.anotherimgclass}`}  />
    </div>
  )
}

export default HeroSection