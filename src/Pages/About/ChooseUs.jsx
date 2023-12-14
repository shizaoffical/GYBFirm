import React from 'react'
import Image6 from "../../Images/Image/Img-45.png"
import Image2 from "../../Images/logo/Logo-2.png";
import Image3 from "../../Images/logo/Logo-3.png";
import Image4 from "../../Images/Icons/PNG/43.png";
import Image1 from "../../Images/Image/Img-62.png";
import Image5 from "../../Images/Image/Img-11.png";
import Image7 from "../../Images/Image/Img-64.png";
import Image8 from "../../Images/Image/Img-63.png";
import Image9 from "../../Images/Image/Img-2.jpg";
import Image10 from "../../Images/Image/Client-Image.webp";
import RatingCompanies from '../../Components/RatingCompanies';
import Text from '../../Components/Text';
import MainButton from '../../Components/MainButton';
import { Container } from 'react-bootstrap';
import Heading from '../../Components/Heading';
import Check from '../../Components/Check';
import ImageMind from "../../Components/ImageMind"
import Check2 from '../../Components/Check2';
import ClientsData from '../../Components/ClientsData';
import HeroSection from '../../Home/HeroSection';
function ChooseUs() {
  return (
    <Container>



      <HeroSection heading="Why Our Customers Love Us"
        heroImage={Image1}
        text={<>A <span className='fw-bolder'>1,000,000 </span> (and counting!) customers served, we’re doubling down on our commitment to power big business ideas for small business owners, entrepreneurs and future founders</>}
        Gybfirmtext="US Fastest-Raising Companies"
        Gybfirmheading="GYB Firm. 60000"
        GybfirmImage={Image2}
        trustedimage={Image3}
        trustedheading="More trusted, Verified Reviews"
        trustedrating="51319 rating"
        joinimage={Image4}
        jointext={<>Join the   <span className='fw-bolder'>1,000,000+</span>  businesses that have chosen GYB Firm.</>}
      />

      {/* 2 */}
      <center className='choose-us-div-a'>
        <Heading heading="Zero Dollars. Zero Hassle. Zero Catch." />
        <dt className='choose-us-div-a-text'>Business owners trust GYB Firm to give them a lot more…for a lot less.</dt>

      </center>

      {/* 3 */}{
        <div className='choose-us-div-b'>
          <Check anotherclass="choose-us-div-b-check" icon
            text={<>Gain peace of <span className='fw-bolder'>mind knowing your business</span>  is in expert and experienced hands.</>} />
          <Check anotherclass="choose-us-div-b-check" icon
           text={<> Join the <span className='fw-bolder'>GYB Firm community</span>   of close to a million like-minded business owners.</>}/>
          <Check anotherclass="choose-us-div-b-check" icon
           text={<>Access expert<span className='fw-bolder'> support, services and guidanc</span> that will last for the life of your business.</>} />
        </div>
      }

      {/* 4 */}
      <div className='choose-us-div-c'>
        <i className='fa-solid fa-lightbulb choose-us-div-c-icon' ></i>
        <p className='choose-us-div-c-text'>From Bright Idea to Brilliant Success Story — <span className='fw-bolder'>It All Begins with GYB Firm</span> </p>
      </div>


      {/* 5 */}
      <ImageMind heading="We’ve Been in Your Shoes..."
        text="GYB Firm began as a small business, too. Our founders bootstrapped their way to success and never took a dime from big-money investors.
    So if you’re just starting out, we know how stressed you may feel right now. We also know you’d rather be building your big idea than dealing with all the administrative details." Image={Image5} />
      <ImageMind heading="...And We Know What It Takes"
        text="Successful business ownership is a lot more than formation — it takes the right attitude, motivation and support. Plus, a little moxie. And a lot of paperwork.

        That’s where GYB Firm comes in. We manage the paperwork and handle other services so you can focus on the parts of your business that inspire you." Image={Image6} anotherClass="choose-us-div-d" />
      <ImageMind heading="What Does GYB Firm Do Differently?"
        text="Sit back and relax knowing your business is in good hands, or jump straight into planning to make your business a success. Whatever you do, we'll spring into action and take care of the paperwork, hassle and hoops for you." Image={Image7} />
      {/* 6 */}
      <div className="choose-us-div-e">
        <div className="choose-us-div-e-div">
          <Check2 text="One time formation fee" />
          <Check2 text="$39 to incorporate through GYB Firm" />
          <Check2 text=" next day business filing" />
        </div>

        <div className="choose-us-div-e-div">
          <Check2 text="Filing date reminders for life" />
          <Check2 text="Tax consultation" />
          <Check2 text="One year of free Registered Agent service" />
        </div>
      </div>
      {/* 7 */}
      <ImageMind heading="Transparent Pricing and No Surprises"
        text="When we say “zero,” we mean it. No annual fees, no hidden or forced membership charges — just quick, easy business formation to get you on your way to success. Plus some included extras:" Image={Image8}
        li1="Registered Agent service for 12 months ($119 value)"
        li2="Same business day processing"
        li3="Lifetime business alerts and notifications"
        li4="Unlimited business name searches"
        anotherClass="choose-us-div-f" />
      {/* 8 */}
      <ImageMind heading="Everything You Need, All in One Place"
        text="GYB Firm offers several packages to choose from that start at $39, with a variety of services and products that offer tremendous value. Or you can build your own package from our à la carte services. No one else in the industry offers this level of flexible customization." Image={Image9} anotherClass="choose-us-div-g" />


      {/* 9 */}
      <div className='trust-pilot-excellence-a'>
        <div className='trust-pilot-excellence-a-row'>
          <RatingCompanies image={Image3} rating="51319 rating" heading=" More trusted, verified reviews" />
          <h5 className='trust-pilot-excellence-a-heading'>  Trust Issues? We Don’t Blame You.</h5>
          <Text text="And we don’t expect you to just take our word for it. We’re proud of our “Excellent” rating on TrustPilot, our 4.8-star rating from ShopperApproved and our combined 32,000+ five-star reviews." />
        </div>
      </div>
      {/* 10 */}

      <div className='clients'>
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image10} />
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image10} />
        <ClientsData heading="Ruby B." time="years ago"
          about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image10} />
      </div>


      {/* 11 */}
      <center>
        <h1 className='term-condition-heading '>Don’t Settle for Less. Get More with GYB Firm.
          <Text text="Join the GYB Firm community and ignite your business dreams today. GYB Firm's entire customer support team is fluent
in both English and Spanish."/>
          <MainButton
           path="https://www.order.gybfirm.com/order" text="Get Started " icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="how-it-work-div-e-btn" />
        </h1>

      </center>

    </Container>
  )
}

export default ChooseUs