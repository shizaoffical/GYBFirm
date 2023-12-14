import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../Home/HeroSection'
import Image1 from "../../Images/Image/Img-59.png"
import Image2 from "../../Images/logo/Logo-3.png";
import Image3 from "../../Images/Image/Img-78.png"
import video from "../../Images/video/Corporation.mp4"
import ThumbNail from "../../Images/Image/Img-49.png"
import LargeText from "../../Components/LargeText"
import ClientSay from '../../Home/ClientSay';
import AnouncementSection from '../../Components/AnouncementSection'
import MainButton from '../../Components/MainButton'
import Image6 from "../../Images/Icons/PNG/37.png"
import Image7 from "../../Images/Icons/PNG/35.png"
import Image8 from "../../Images/Icons/PNG/36.png"
import Image9 from "../../Images/Icons/PNG/39.png"
import Image10 from "../../Images/Icons/PNG/19.png"
import Image11 from "../../Images/Icons/PNG/18.png"
import Image12 from "../../Images/Icons/PNG/31.png"
import Text from '../../Components/Text'

import Card3 from '../../Components/Card3';

function BuisnessStartupGuide() {
  return (
    <div>
      <Container>
        <HeroSection heading="Do You Want to Start Your Own Business?"
          heroImage={Image1}
          text={<>We have everything you need to know to start your new business.</>}
          btntext=" Download the Complete Guide"
          path="https://www.order.gybfirm.com/order"
          trustedimage={Image2}
          trustedheading="More trusted, Verified Reviews"
          trustedrating="51319 rating"
        />
        <ClientSay text={<><img src={Image3} alt="" className='registration-agent-left-col-image' /></>} class="ein-section"
          component={<>
            <LargeText
              heading="Get Start a Business"
              text={<>Starting a business is a basic guide to setting up and running your own company. This guide offers essential information and advice for anyone looking to start their own business endeavor.<br />
                Starting a business is a very big and significant choice that you will make in your life. It allows you to transform your thoughts and aspirations into things that make your customers happy and improve their lives. Starting your own business can seem overwhelming because there is so much to do, like paperwork, getting money, promoting your business, running it day to day, managing taxes, and more. But don't worry, we will help you with all of it.
                <AnouncementSection boldtext="Don't worry, we will take care of everything for you"
                  text={<>
                    At GYB Firm, we think that having and managing a business can bring a lot of happiness and satisfaction. That's why we have created a helpful guide for starting your business. It includes our experience and the best strategies to make the most of your time.
                  </>}

                  icon={<i className='fa-solid fa-share'></i>}
                  anotherclass="virtual-address-annountcement" />
              </>} />
            <LargeText

              text={<>
                <video controls className="client-say-youtube dissolve-company-video mt-4 mb-0"
                  poster={ThumbNail} >
                  <source src={video} type='video/mp4' />
                </video>
              </>} />
            <LargeText

              text={<>If you are starting a new business or have experience running one, you can use our checklist to help you turn your ideas into reality.
                <MainButton text="Download Now" icon={<i className='fa-solid fa-arrow-right'></i>} />
              </>} />
          </>} />


        <div className='virtual-address-row'>
          {/* section a */}

          {/* section a */}
          <div className='virtual-address-row-div'>
            <LargeText heading="What Information is Included in the Guide"
              text="Here’s a brief taster of what we cover:" />
            <div className='virtual-address-row-col'>
              <Card3 Image={Image6} heading="Are you prepared to begin a business?"anotherclass="virtual-address-row-check"
              text="Understanding your current abilities and knowledge, how to determine if your family is prepared, choosing the kind of life you desire, and managing both a business and a regular job." />
              <Card3 Image={Image7} heading="The Laws and Rules involved in Starting a Business" anotherclass="virtual-address-row-check"
                text="Choosing the best way to set up your business, finding a suitable name, and the process of officially registering your new company." />
            </div>
            <div className='virtual-address-row-col'>

              <Card3 Image={Image8} heading="Creating Your Business Concept" anotherclass="virtual-address-row-check"
                text="Coming up with a business idea, doing proper research, and getting helpful feedback." />
              <Card3 Image={Image9} heading="Incorporation Charges, Licenses and Forms" anotherclass="virtual-address-row-check"
                text={<>Recording your commerce charges, getting the correct grants and licenses in put for your trade and progressing recording necessities so you remain compliant.</>} />
            </div>
            <div className='virtual-address-row-col'>

              <Card3 Image={Image11} heading="Business Arranging and Financing" anotherclass="virtual-address-row-check"
                text="Composing your trade arrange and what you ought to incorporate within the record, trade financing counting bootstrapping, crowdfunding, credits, awards and lines of credit." />
              <Card3 Image={Image12} heading="Business Character and Showcasing" anotherclass="virtual-address-row-check"
                text={<>Branding your commerce counting your vision, mission articulation, logos, showcasing resources, physical and computerized showcasing channels and your little trade site.</>} />
            </div>
            <div className='virtual-address-row-col'>

              <Card3 Image={Image10} heading="Measuring Commerce Victory" anotherclass="virtual-address-row-check"
                text="Getting the proper estimations input to get it your return on speculation, working with a bookkeeper and understanding critical money related reports." />
            </div>
          </div>
        </div>
        <center>
          <div className='testimonials-b'>
        
            <h1 className='faq-heading'> Need more information?
              <Text text="If that’s not enough, the guide also links to plenty of other in-depth business resources to give you the expertise and confidence you need to start your business today. The time to start is now, download our guide to starting your business and start turning your vision into reality." />
            </h1>

          </div>
        </center>
      </Container>
    </div>
  )
}

export default BuisnessStartupGuide