import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../Home/HeroSection'
import Image1 from "../../Images/Image/Img-77.png"
import ClientSay from '../../Home/ClientSay';
import Image2 from "../../Images/Image/Bulb.png"
import video from "../../Images/video/Corporation.mp4"
import ThumbNail from "../../Images/Image/Img-49.png"
import AnouncementSection from '../../Components/AnouncementSection'
import LargeText from "../../Components/LargeText"
import Card from '../../Components/Card'
import Image3 from "../../Images/Icons/PNG/9.png"
import Image4 from "../../Images/Icons/PNG/10.png"
import Image5 from "../../Images/Icons/PNG/11.png"
import Image6 from "../../Images/Icons/PNG/12.png"
import MainButton from '../../Components/MainButton'
import Image7 from "../../Images/Image/Space-Rocket.png"
import ImageMind from '../../Components/ImageMind'


function BuisnessIndustryGuide() {
  return (
    <div>
      <Container>
        <HeroSection heading="Guides on How to Start a Business"
          heroImage={Image1} anotherimgclass="hero-section-image-llc"
          text={< >Do you want to start a new business? GYB Firm can help you with many business ideas and detailed guides to succeed in various industries.</>}
          btntext="Check Out Buisness Type"
          path="/how-it-start"

        />
        <ClientSay text={<><img src={Image2} alt="" className='registration-agent-left-col-image' /></>} class="ein-section"
          component={<>
            <LargeText
              heading="Before you begin a business"
              text={<>Before you begin a new business, you need to make sure that this new project is suitable for you and for the market.
                <AnouncementSection boldtext="Don't rush into starting a new business without thinking carefully"
                  text={<>
                    Use our detailed "Start a Business" guides to find out all the important steps you need to take before you can open your business.
                  </>}

                  icon={<i className='fa-solid fa-share'></i>}
                  anotherclass="virtual-address-annountcement" />
                We have studied important topics for your industry, such as market information, what customers want, and taxes for businesses. We also know how to start a business, follow rules and laws, and pick the right type of business. Choose the type of business that suits you best to begin your journey in the right direction.
                <video controls className="client-say-youtube dissolve-company-video mt-4 mb-0"
                  poster={ThumbNail} >
                  <source src={video} type='video/mp4' />
                </video>
              </>} />
          </>} />
        <div className='AboutBuisnessSectionA'>
          <div className='AboutBuisnessSectionA-div'>
            <Card image={Image3} text="LLC" para="Keep personal assets separate from the company."
              anotherClassName="industry-guide" />
            <Card image={Image4} text="S Corporation"
              anotherClassName="industry-guide" para="Keep personal assets separate from the company." />
            <Card image={Image5} text="C Corporation"
              anotherClassName="industry-guide" para="Attractive to investors." />
            <Card image={Image6} text="Non Profit"
              anotherClassName="industry-guide" para="Donations can be recordedby donors as not taxable." />
          </div>
        </div>
        <center>
          <MainButton text="Compare Entity Type" path="/business-entity-comparison" icon={<><i className="fa-solid fa-arrow-right"></i></>}
          />
        </center>

        <ImageMind heading="Launch Your Business with GYB Firm"
          text={<>No contracts. No surprises.<br />
            Only $39 + state fee to launch your business.
            <MainButton
             path="https://www.order.gybfirm.com/order" text="Launch Your Buisness" icon={<i className='fa-solid fa-arrow-right'></i>}
              anotherclass="faq-btn" />
              </>}
          Image={Image7} anotherClass="flex-md-row-reverse" />
      
      </Container>
    </div>
  )
}

export default BuisnessIndustryGuide