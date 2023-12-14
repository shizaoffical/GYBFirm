import React from 'react'
import Image1 from "../../Images/Image/Img-1.jpg"
import Image2 from "../../Images/logo/Logo-1.png";
import Image3 from "../../Images/logo/Logo-3.png";
import Image4 from "../../Images/Icons/PNG/43.png";
import Image5 from "../../Images/Icons/PNG/70.png";
import Image6 from "../../Images/Icons/PNG/31.png";
import Image7 from "../../Images/Icons/PNG/69.png";
import Image8 from "../../Images/Icons/PNG/1.png";
import Image9 from "../../Images/Icons/PNG/20.png";
import Image10 from "../../Images/Image/Img-7.png";
import Image11 from "../../Images/Image/Illustration-1.png";
import Image12 from "../../Images/Image/Img-8.png";
import Image13 from "../../Images/Image/Illustration-3.png";
import image from "../../Images/Image/Img-9.jpg"
import ClientsData from '../../Components/ClientsData'
import Image from "../../Images/Image/Client-Image.webp"
import MainButton from '../../Components/MainButton'
import RatingCompanies from '../../Components/RatingCompanies';
import { Container } from 'react-bootstrap';
import Step from './Step';
import Check from "../../Components/Check"
import ImageMind from '../../Components/ImageMind';
import Text from '../../Components/Text';
import Card2 from '../../Components/Card2';
import HeroSection from '../../Home/HeroSection';
import Heading from "../../Components/Heading"
function HowItWork() {
  return (
    <Container>


<HeroSection heading="How GYB Firm Starts" 
        heroImage={Image1}
        text="From shinning thought to set up business, GYB Firm has all the services, devices and assets you would, like all in one place."
        btntext="Start My Business" path="https://www.order.gybfirm.com/order"
        Gybfirmtext="US Fastest-Raising Companies"
        Gybfirmheading="GYB Firm. 60000"
        GybfirmImage={Image2}
        trustedimage={Image3}
        ratingclass="d-none"
        trustedheading="More trusted, Verified Reviews"
        trustedrating="51319 rating"
        joinimage={Image4}
        jointext={<>Join the   <span className='fw-bolder'>1,000,000+</span>  businesses that have chosen GYB Firm.</>}
        />
        <div className='how-it-work-steps-heading-row' >
        <Heading heading="Start Your Business In 3 Simple Steps" anotherclass="how-it-work-steps-heading"/>
        </div>
    

      {/* steps */}
      <Step number="1" text="Select a business type and the state you’d like to join in. Require help with state-specific formation points of interest? We've got you secured! Check out our "
        heading="Choose The Correct Business Type For You" link=" LLC State Guides."
        image={Image13} />
      <Step number="2" heading="Select A Registration Package"
        text="GYB Firm's essential registration package costs is $39, so you pay as it were the state expense plus $39 to enroll your business. The Gold and Platinum bundles open more than a dozen extra GYB Firm services to assist your business flourish" image={Image10}
        anotherclass="how-it-work-2-step-div" />
      <Step number="3" text="Our simple, hassle-free order form will accumulate all the information required to guarantee you’re coordinated with the proper services, and get you on your way to trade possession in a streak."
        heading="Tell Us About Your Business" image={Image11} />
      <Step number="?" text="Sit back and unwind knowing your business is in great hands, or hop straight into arranging to form your business a victory. Anything you are, doing we'll spring into activity and beware of the printed material, bother and circles for you"
        heading="You’ve Placed Your Order. What’s Next?" image={Image12} anotherclass="how-it-work-2-step-div" />

      <div className='how-it-work-div-b'>
        <Check
          text="We'll compile your data, make your Articles of Association or Consolidation and after that file them with the administering organization in your state." icon
          heading="We Get Ready and File Your Reports" />
        <Check text="The business name you select is portion of your business’s identity. We’ll make beyond any doubt its accessible and ready to utilize in your state." heading="We Check Your Business Name Availability" icon />

      </div>


      <ImageMind heading="Get Access to the All in One Solution for Your Business"
        text="Your dashboard is your all-in-one business management tool." Image={image} anotherClass="how-it-work-image-seciton" 
        anotherImgClass="how-it-work-dashboard"/>

      <div className='how-it-work-div-c'>
        <h2 className='image-mind-heading'>Registering an LLC Can Be Overwhelming and Costly.</h2>
        <Text text="There's a lot that goes into registering an LLC. With different state necessities, different steps and a lot of necessary documentation, indeed the littlest mistake can conclusion up costing you. That's where we come in" />
      </div>

      <div className='how-it-work-div-d'>
        <Card2 image={Image5} text="Easy Annual Report filing" />
        <Card2 image={Image6} text="Automated Registered Agent renewal" />
        <Card2 image={Image7} text="Text and email notifications on order status and critical information" />
        <Card2 image={Image8} text="Compliance alerts with key filing dates" />
        <Card2 image={Image9} text="Lifetime support for the life of your business" />
      </div>



      <div className='trust-pilot-excellence-a'>
        <div className='trust-pilot-excellence-a-row'>
          <RatingCompanies image={Image} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon" rating="11,8176 rating" />
          <h1 className='trust-pilot-excellence-a-heading'>
            Loved by 1,000,000+ Entrepreneurs Across All 50 States
          </h1>
        </div>
      </div>


      <div className='clients'>
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image} />
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image} />
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image} />
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image} />
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image} />
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image} />

      </div>

      <center>
        <h1 className='term-condition-heading '>
          Bring Your Business to Life It’s Free, It’s Simple and It’s Stretch Free
          <MainButton text="Get Stated Now"  path="https://www.order.gybfirm.com/order" icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="how-it-work-div-e-btn" />
        </h1>

      </center>


    </Container>



  )
}

export default HowItWork