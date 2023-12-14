import React from 'react'
import { Container } from 'react-bootstrap'
import Image from "../../Images/Image/Team-Work.png"
import Image1 from "../../Images/Icons/PNG/21.png"
import Image2 from "../../Images/Icons/PNG/22.png"
import Image3 from "../../Images/Icons/PNG/24.png"
import Image4 from "../../Images/Icons/PNG/23.png"
import Image6 from "../../Images/Icons/PNG/26.png"
import Image5 from "../../Images/Icons/PNG/25.png"

import { Link } from 'react-router-dom'
import Heading from '../../Components/Heading'
import Text from '../../Components/Text'
import MainButton from '../../Components/MainButton'
import Asthetics from "../../Home/Asthetics"
import Card3 from '../../Components/Card3'
import ClientsRequest from '../../Components/ClientsRequest'
function ContactUs() {
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
      <center>
        <h1 className='term-condition-heading '>Using Your Client Dashboard
          <Text text="Your client dashboard will become the central document repository and management tool that will allow you to actively manage your entity. You can always access your client dashboard by using the order number and email address associated with your order. Below are some helpful links provided to orient you with the features of the client dashboard." />
          <MainButton text="Check My Order status " icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="how-it-work-div-e-btn" />
        </h1>
      </center>
      <Asthetics />

      <div className='contact-us-div-b'>
        <Card3 Image={Image1} heading="Login"
          text="Use this link to access your client dashboard directly from our site. The login credentials will always be the associated email address and order number." />
        <Card3 Image={Image2} heading="Company Information"
          text="Review and obtain pertinent company information. (Please remember valid email address on file as this will be the primary method of contact.)" />
        <Card3 Image={Image3} heading="Order History & Receipts"
          text="Use this tab to review company order history and to access associated receipts." />
        <Card3 Image={Image4} heading="Track Status"
          text="You can always check the progress of your order or review any pending issues form this tab." />
        <Card3 Image={Image5} heading="Registered Agent"
          text="Obtain the name and address of your designated Registered Agent and review important documents. (Documents received by your agent will be uploaded to the Registered Agent tab and a corresponding notification email will be deployed.)" />
        <Card3 Image={Image6} heading="Ongoing Requirements"
          text="Always be in the know of any ongoing requirements, such as annual reports or other obligatory filing requirements associated with your entity. A Documents tab will also be available to you upon the completion of the order." />

      </div>
      <center>
        <Heading heading="Client Support Request" />
        <Text text="Please provide contact information" />
        <ClientsRequest />
      </center>

      <div className='contact-us-div-c'>
        <Heading heading="Contact Us" anotherclass=" contact-us-heading"/>
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
            <span className='fw-bold '><i className='fa-solid fa-phone'></i></span> (575) 247-6989
          </Link>
          <Link to="contact@GYB Firm.com" className='contact-us-div-c-text'>
            <span className='fw-bold '><i className='fa-solid fa-envelope'></i></span> contact@gybfirm.com
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default ContactUs