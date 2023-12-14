import React from 'react'
import HeroSection from '../../../Home/HeroSection'
import ImageMind from '../../../Components/ImageMind'
import { Container } from 'react-bootstrap'
import Image1 from "../../../Images/Image/Img-74.png"
import Image2 from "../../../Images/Icons/PNG/43.png";
import Image3 from "../../../Images/logo/Logo-3.png";
import Image5 from "../../../Images/Image/Img-15.png";
import Image6 from "../../../Images/Image/Img-16.png";
import Image7 from "../../../Images/Image/Img-14.png";
import Image8 from "../../../Images/Image/Img-61.png";
import Image9 from "../../../Images/Image/Img-37.png";
import Image10 from "../../../Images/Image/Img-28.png";

import BlueTextElement from '../../../Header/DropDownElements/BlueTextElement'
import LLCCheckSection from '../StartBusiness/LLCCheckSection'
import ThreeStepsSection from '../StartBusiness/ThreeStepsSection'
import MainButton from '../../../Components/MainButton'
import RatingCompanies from '../../../Components/RatingCompanies'
import Text from '../../../Components/Text'
import FAQSection from '../../../Components/FAQSection'

function OrderCorporateLLCKit() {
  return (
    <div>
      <Container>
        <HeroSection heading="Get Established with GYB Firm's Corporate Kit"
          heroImage={Image1} anotherimgclass="hero-section-image-llc"
          text={< >Easily create and manage your business. Keep your documents neat and organized using GYB Firm's business formation kit.</>}
          btntext="Order Your LLC Kit Now"
          path="https://www.order.gybfirm.com/order"
          Gybfirmtext={<p className='w-100' >Join the <span className='fw-bolder'>1,000,000+ </span> businesses that have chosen <span className='fw-bolder'>GYB Firm </span></p>}
          GybfirmImage={Image2}
          trustedimage={Image3}
          trustedheading="More trusted, Verified Reviews"
          trustedrating="51319 rating"
        />
        <ImageMind heading="Starting and Managing a Business Involves a Lot of Paperwork"
          text={<>
          When you run your own business, there are so many things to do that paperwork often gets pushed down to the bottom of the to-do list. But as a business owner, you're legally obliged to keep complete and accurate records.
          <br/><br/>
          Your records must contain formation paperwork, shareholder information, resolutions, meeting minutes and licenses, as well as other important and formal documents.
          <br/><br/>
          It's vital to keep these documents safe and well organized to avoid risking legal problems, fines or compliance issues.
          </>} Image={Image10} />
        <ImageMind anotherClass="flex-md-row-reverse my-5" heading="Make Your Life Easier with GYB Firm’s LLC Corporate Kit"
          text="GYB Firm's LLC corporate kit is made up of a binder of forms, certificates, papers and other items beautifully produced and personalized for your business." Image={Image8} />
        <ImageMind heading="Discover the Benefits of GYB Firm’s Business Formation Kit"
          text="Our business formation kit frees up your valuable time, so you can focus on what matters." Image={Image9} anotherImgClass="llc-mind-image" />
        <LLCCheckSection
          headone="Get Your Own Personalized Corporate Binder"
          paraone="A handcrafted kit you can display in your office while keeping your important documents together." headtwo="Certificates to Formalize Business Ownership"
          paratwo="Get 20 security certificates for LLC members or corporate stockholders to formalize your business ownership."
          headthree="Safeguard Your Corporate Forms and Documents"
          parathree="Get printed minutes for record keeping plus corporate forms, bylaws and operating agreements."
          headseven="Keep Accurate Records with a Transfer Ledger"
          paraseven="Record corporation stock transactions, including anything that’s purchased, issued, sold or transferred."
          headeight="Get Your Customized Company Seal & Embosser"
          paraeight="Seal important business documents with a custom embosser of your company name, state and date of formation."
          headnine="Always Find the Information You Need"
          paranine="Find what you need fast with tabbed separators, to stay organized throughout the life of your business." />

        <ThreeStepsSection head="How to Get Your Corporate Kit and Seal in Three Easy Steps" image={Image5} imagetwo={Image6} imagethree={Image7}
          numberone="1" headingone="Discover the Right Entity for You"
          textone="Choose your entity type and your state of formation. Supply us with your contact details and company information."
          numbertwo="2"
          headingtwo="Complete the Online Order Form"
          texttwo="Fill in our simple, short online order form and pay the $99 business kit fee quickly and securely."
          numberthree="3"
          headingthree="Your Corporate Kit and Seal Arrives"
          textthree="Your documents are delivered in a professional kit, complete with your company name stamped on the spine of the book."
        />

      </Container>

      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Corporate Kits</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does Your Corporate Kit Service Cost?"
            texta="Our corporate kit service costs $99. It is the best value LLC business starter kit and it's delivered to you for free."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Any Hidden Costs?"
            texta="Absolutely not! We take pride in our complete transparency. There are no hidden costs involved in getting your corporate kit."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Long Will It Take to Receive My Kit?"
            texta="We mail all kits the next day using FedEx ground shipping and kits destined for the continental United States usually arrive within 3 to 4 business days." />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Any Guides or Resources?"
            texta={<>Learn all about our  <BlueTextElement text=" customized corporate/LLC kit " path="/" />
              and find out more about <BlueTextElement text="  how to use GYB Firm's Corporate kit. " and path="/" />
            </>}
            textb={<>Check out the complete <BlueTextElement text="start your business checklist" path="/" />
           to learn how to start your business the right way or get the resources you need to <BlueTextElement text="  manage your company.. " and path="/" />
          </>}
          />
        </div>
      </center>

      <Container>
        <center>
          <div className='testimonials-b'>
            <div className="d-flex align-items-center justify-content-center">
              <RatingCompanies image={Image3} rating="54953 ratings" heading="More trusted, Verified Reviews" />
            </div>
            <h1 className='faq-heading'>Get Your Business Formation Kit Today
              <Text text="Get established and stay organized with GYB Firm's Corporate Kit." />
            </h1>
            <MainButton
             path="https://www.order.gybfirm.com/order" text="Order Now" anotherclass="testimonials-b-btn" icon={<i className='fa-solid fa-arrow-right'></i>} />
          </div>
        </center>



      </Container>


    </div>
  )
}

export default OrderCorporateLLCKit