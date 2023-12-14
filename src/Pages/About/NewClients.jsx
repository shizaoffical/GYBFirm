import React from 'react'
import { Container } from 'react-bootstrap'
import LargeText from "../../Components/LargeText"
import { Link } from 'react-router-dom'

import Heading from '../../Components/Heading'
import Text from '../../Components/Text'
import MainButton from '../../Components/MainButton'
import ClientsRequest from '../../Components/ClientsRequest'
import NeedComponent from '../../Components/NeedComponent'
import Image from "../../Images/Image/Img-61.png"
import Image1 from "../../Images/Icons/PNG/3.png"
import Image2 from "../../Images/Icons/PNG/4.png"
import Image3 from "../../Images/Icons/PNG/5.png"
import Image4 from "../../Images/Icons/PNG/1.png"
import Image6 from "../../Images/Icons/PNG/57.png"
import Image7 from "../../Images/Icons/PNG/56.png"
import Image8 from "../../Images/Icons/PNG/58.png"
import Image9 from "../../Images/Icons/PNG/26.png"
import Image10 from "../../Images/Icons/PNG/52.png"
import Image11 from "../../Images/Icons/PNG/61.png"
import Image5 from "../../Images/Icons/PNG/40.png"




function NewClients() {
  return (
    <Container>
      {/* 1 */}
      <div className='contact-us-div-a'>
        <div className='contact-us-div-a-col'>
          <Heading heading="We're Here to Help" />
          <Text text="Phone support is available Monday – Friday from 9 a.m. to 6 p.m. CST, or submit a question and we'll respond as quickly as possible." />
        </div>
        <img src={Image} alt="" className='image-mind-image' />
      </div>


      {/* 2 */}
      <div className='d-flex flex-column gap-2 justify-content-center text-center align-items-center'>
        <center className='new-clients-div-a'>
          <LargeText heading="We've put together the following resources to help answer our most common questions."/>
          <MainButton
           path="https://www.order.gybfirm.com/order" text="start your buisness eith us today! " icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="how-it-work-div-e-btn" />
        </center>
      </div>

      {/* 3 */}
      <div className='choose-us-div-c'>
        <i className='fa-solid fa-lightbulb choose-us-div-c-icon' ></i>
        <p className='choose-us-div-c-text'><span className='fw-bolder'>Popular Articles </span>to Help You Get Started </p>
      </div>


      {/*  4*/}
      <div className='d-flex align-content-center flex-wrap justify-content-center flex-column  choose-us-div-d-components'>
        <div className='user-need'>
          <NeedComponent text="Regardless of the industry or nature of business, GYB Firm can help you form your new business."
            heading="Choose the Right Type of Entity for Your New Company" image={Image2}
            anotherclass="choose-us-div-d-need-component"/>
          <NeedComponent text="We'll tackle those questions so you have all the information you need to start an LLC or C Corporation."
            heading="Understand the Differences b/w LLC vs. C Corporation" image={Image1} 
            anotherclass="choose-us-div-d-need-component" />
          <NeedComponent text="Here’s our handly guide to choosing the perfect state depending on various legal issues, market demand, taxation rates, job markets and more."
            heading="What Is the Best State to Start My LLC?" image={Image4}
            anotherclass="choose-us-div-d-need-component" />
          <NeedComponent text="If you're a non-U.S. resident, we'll help you understand if you can run an LLC or corporation. "
            heading="Are Non-U.S. Residents Allowed to Own a Corporation or LLC?" image={Image3}
            anotherclass="choose-us-div-d-need-component" />
        </div>
      </div>

{/* 5 */}
<div className='choos-us-div-e'>
  <div className='choos-us-div-e-component'>
    <NeedComponent heading="Corporation State Information" anotherheading="choos-us-div-e-need-component-heading"
     image={Image5} 
    anotherclass="choos-us-div-e-need-component" anotherdivclass="choose-us-div-e-need-div-component"/>
    <NeedComponent heading="LLC State Information" anotherheading="choos-us-div-e-need-component-heading"
     image={Image6} 
    anotherclass="choos-us-div-e-need-component" anotherdivclass="choose-us-div-e-need-div-component"/>
  </div>
  <div className='choos-us-div-e-component'>
    <NeedComponent heading="S Corporation Tax Calculator" anotherheading="choos-us-div-e-need-component-heading"
     image={Image7} 
    anotherclass="choos-us-div-e-need-component" anotherdivclass="choose-us-div-e-need-div-component"/>
    <NeedComponent heading="Entity Comparison Chart" anotherheading="choos-us-div-e-need-component-heading"
     image={Image8} 
    anotherclass="choos-us-div-e-need-component" anotherdivclass="choose-us-div-e-need-div-component"/>
  </div>
  <div className='choos-us-div-e-component'>
    <NeedComponent heading="Start Filling Fees" anotherheading="choos-us-div-e-need-component-heading"
     image={Image9} 
    anotherclass="choos-us-div-e-need-component" anotherdivclass="choose-us-div-e-need-div-component"/>
    <NeedComponent heading="Start Filling Times " anotherheading="choos-us-div-e-need-component-heading"
     image={Image10} 
    anotherclass="choos-us-div-e-need-component" anotherdivclass="choose-us-div-e-need-div-component"/>
  </div>
  <div className='choos-us-div-e-component'>
    <NeedComponent heading="Ongoing Filling Reruirment" anotherheading="choos-us-div-e-need-component-heading"
     image={Image11} 
    anotherclass="choos-us-div-e-need-component" anotherdivclass="choose-us-div-e-need-div-component"/>
  </div>
</div>






      <center>
        <Heading heading="Client Support Request" />
        <Text text="Please provide contact information" />
        <ClientsRequest />
      </center>

      <div className='contact-us-div-c'>
        <Heading heading="Contact Us" />
        <dt className='my-2'>GYB Firm.com LLC</dt>
        <div className='d-flex flex-column gap-2'>
          <span >
            <i className='fa-solid fa-house pe-2 contact-us-div-c-text-1'></i>
            Business Address:
102 Gold Ave SW # 171	
Albuquerque NM 87102
          </span>
          <Link to="https://api.whatsapp.com/send/?phone=%2B923267647709&text&type=phone_number&app_absent=0"
            target="_blank" className='contact-us-div-c-text'>
            <span className='fw-bold '><i className='fa-solid fa-phone'></i></span> +1 (575) 247-6989
          </Link>
          <Link to="contact@GYB Firm.com" className='contact-us-div-c-text'>
            <span className='fw-bold '><i className='fa-solid fa-envelope'></i></span> contact@gybfirm.com
          </Link>
        </div>
      </div>
    </Container>


  )
}

export default NewClients