import React from 'react'
import HeroSection from '../../../Home/HeroSection'
import ImageMind from '../../../Components/ImageMind'
import { Container } from 'react-bootstrap'
import ClientSay from '../../../Home/ClientSay'
import ClientsData from "../../../Components/ClientsData"
import video from "../../../Images/video/Corporation.mp4"
import ThumbNail from "../../../Images/Image/HomePage-Video-ThumbNail-B.jpg"
import Clientimage from "../../../Images/Image/Client-Image.webp"
import Image1 from "../../../Images/Image/Img-66.png"
import Image2 from "../../../Images/Icons/PNG/43.png";
import Image3 from "../../../Images/logo/Logo-3.png";
import Image5 from "../../../Images/Image/Img-70.png";
import Image6 from "../../../Images/Image/Img-19.png";
import Image7 from "../../../Images/Image/Img-68.png";
import Image8 from "../../../Images/Image/Img-64.png"
import Image10 from "../../../Images/Image/Img-67.png"
import Image9 from "../../../Images/Image/Img-63.png"
import BlueTextElement from '../../../Header/DropDownElements/BlueTextElement'
import LLCCheckSection from '../StartBusiness/LLCCheckSection'
import ThreeStepsSection from '../StartBusiness/ThreeStepsSection'
import MainButton from '../../../Components/MainButton'
import RatingCompanies from '../../../Components/RatingCompanies'
import Text from '../../../Components/Text'
import FAQSection from '../../../Components/FAQSection'

function FreeTaxConsultation() {
  return (
    <div>
      <Container>
        <HeroSection heading="Stress-Free Accounting and Bookkeeping"
          heroImage={Image1} anotherimgclass="hero-section-image-llc"
          text={< >Business accounting and bookkeeping services at a low monthly cost so you can focus on what matters.</>}
          btntext="Book Your Free Consult"
          path="https://www.order.gybfirm.com/order"
          Gybfirmtext={<p className='w-100' >Join the <span className='fw-bolder'>1,000,000+ </span> businesses that have chosen <span className='fw-bolder'>GYB Firm </span></p>}
          GybfirmImage={Image2}
          trustedimage={Image3}
          trustedheading="More trusted, Verified Reviews"
          trustedrating="51319 rating"
        />
        <ImageMind heading="Keeping on Top of Your Finances Takes a Lot of Effort"
          text="Understanding the tax requirements of your business entity is complex and requires a lot of dedicated time. Trying to do everything yourself can be mentally draining — and financially draining, too when it comes to taxes and bookkeeping!" Image={Image8} />
        <ImageMind anotherClass="flex-md-row-reverse" heading="Take the Hassle Out of Bookkeeping and Accounting"
          text="Get accountant services and solutions tailored to suit your business's needs. With GYB Firm, there are no high fees, mountains of paperwork, or administrative headaches. Get expert knowledge, hands-on support, and peace of mind to make your life easier." Image={Image9} />
        <ImageMind heading="The Benefits of GYB Firm's Accounting & Bookkeeping Services"
          text={<>Our business bookkeeping and accounting service take the worry out of managing your tax and finances while saving you up to <BlueTextElement text=" 50 hours and $2,500+ per year!"/> Check out the host of other great benefits below."</>}
          Image={Image10} anotherImgClass="llc-mind-image" />
        <LLCCheckSection
          headone="Stress-Free Tax Filing — Yes, It Is Possible!"
          paraone="Get your business and personal taxes filed for you and get advice on enhancing your potential yearly savings." headtwo="Financial Reporting, Online Tools, & Resources"
          paratwo="Access your mobile-friendly financial reports and tools or easily contact your accountant or bookkeeper anytime, anywhere."
          headthree="Link Up to Four Bank Accounts"
          parathree="Upload receipts to your dashboard to unlock essential business insights and visual profit and loss statements."
          headseven="Compliance Assistance Keeps the IRS at Bay"
          paraseven="Entrust your bookkeeping, taxes, and accounting to dedicated specialists. Minimize chances of IRS audits and fees."
          headeight="Monthly or Quarterly Bookkeeping"
          paraeight="Monitor business performance. Turn accounting figures into actionable information via your modern, intuitive dashboard."
          headnine="Get Advice from Bookkeeping & Tax Pros"
          paranine="Get advice or one-on-one support from dedicated specialists via email, phone, or online chat in your personalized dashboard." />

        <ThreeStepsSection head="How to Get Access to Affordable Accounting & Bookkeeping" image={Image5} imagetwo={Image6} imagethree={Image7}
          numberone="1" headingone="Book Your Free, No Obligation Tax Consultation"
          textone="In your free 30-minute consult, a specialist accountant will review your finances with you to highlight where you can save money and offer practical advice."
          numbertwo="2"
          headingtwo="Choose the Package That Suits Your Needs"
          texttwo="During your consultation, your accountant will help you determine which package (Starter or Plus) best meets your business's needs."
          numberthree="3"
          headingthree="Start Setting Up Your Dashboard"
          textthree="Your accountant will then guide you through the initial stages of populating your dashboard. Then you'll receive your login details so you can complete the setup."
        />
        <div className="d-flex align-items-center justify-content-center">
          <RatingCompanies ratingclass="place-rating" image={Image2} rating="55558 rating" heading="More trusted, Verified Reviews" />
        </div>
        <h1 className="three-step-head place-head fs-1 place-head4">
          Loved by 1,000,000+ Entrepreneurs Across All 50 States
        </h1>

        <ClientSay heading="See What Our Clients Have to Say…"
          text="“One of the things I really appreciated with GYB Firm is that it took care of everything for me.”"
          smtext="Khadijah Suleman, Aloaye Clothing LLC"
          video={video}
          ThumbNail={ThumbNail} />
        <div className='clients llc-clients '>
          <ClientsData heading="Ruby B." time="years ago"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company."
             image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." 
            image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company."
             image={Clientimage} />
        </div>

      </Container>

      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Loved by 1,000,000+ Entrepreneurs Across All 50 States</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does Your Service Cost?"
            texta={<dt className='text-black'>The Starter Package costs $90 per month and includes: </dt>}
            textb={<>
              1. Quarterly bookkeeping<br />
             2. Business tax return<br />
              3. Personal taxes (for sole proprietorships and single-member LLCs only)<br />
              4.  Compliance assistance<br />
              5.Financial reporting<br />
              6. Online tools and resources<br />
              7.  Link up to two bank accounts<br />
              8. Accounting advice from our team of experts<br />
            </>}
            textc={<dt className='text-black'>The Plus package costs $180 per month. It's a more personalized service and includes the following: Monthly bookkeeping</dt>}
            textd={<>1.  Business tax return<br />
              2. Personal taxes (any entity type)<br />
              3.  Accounting advice from a dedicated bookkeeper and tax pro<br />
              4.  Compliance assistance<br />
              5.  Financial reporting<br />
              6.  Online tools and resources<br />
              7.  Link up to four bank accounts<br />
              8. Tax planning sessions with an expert

            </>}
          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Any Hidden Costs?"
            texta="Never! We're all about transparency, and there are no hidden costs associated with our business accounting and bookkeeping service."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Long Does It Take To Get Setup?"
            texta="Your free 30-minute tax consultation will help you choose the right package and get set up within your dashboard. After the consult, you're ready to go as soon as you receive your username and password via email." />
          <FAQSection faqclass="faq-llc-div"
            heading="Do You Have Any Guides or Resources for Getting Started?"
            texta={<>Yes! Get detailed information on <BlueTextElement text=" filing your business taxes " and path="/" />
              and <BlueTextElement text="  finding the right small business accountant. " and path="/" /> Learn all about the
              <BlueTextElement text="   differences between bookkeeping and accounting " and path="/" /> and what
              <BlueTextElement text="    forms you need for LLC taxes. " and path="/" />
            </>}
          />
          <center>
            <MainButton text="Load More" anotherclass="faq-btn" />
          </center>
        </div>
      </center>

      <Container>
        <center>
          <div className='testimonials-b'>
            <div className="d-flex align-items-center justify-content-center">
              <RatingCompanies image={Image3} rating="54953 ratings" heading="More trusted, Verified Reviews" />
            </div>
            <p className="p-para p-para2 pb-2">
            Please note: This post contains affiliate links and we may receive a commission if you make a purchase using these links.
                </p>
            <h1 className='faq-heading'>Stress-Free Accounting and Bookkeeping
              <Text text="For a low monthly cost so you can focus on what matters." />
            </h1>
            <MainButton  path="https://www.order.gybfirm.com/order" text=" Book You Free Consultant"  path="https://www.order.gybfirm.com/order" anotherclass="testimonials-b-btn" />
          </div>
        </center>



      </Container>


    </div>
  )
}

export default FreeTaxConsultation