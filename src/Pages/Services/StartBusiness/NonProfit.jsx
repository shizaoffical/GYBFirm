import React from 'react'
import HeroSection from '../../../Home/HeroSection'
import ImageMind from '../../../Components/ImageMind'
import { Container } from 'react-bootstrap'
import ClientsData from "../../../Components/ClientsData"
import Clientimage from "../../../Images/Image/Client-Image.webp"
import ClientSay from '../../../Home/ClientSay'
import video from "../../../Images/video/Corporation.mp4"
import ThumbNail from "../../../Images/Image/HomePage-Video-ThumbNail-B.jpg"
import Image1 from "../../../Images/Image/Img-31.jpg"
import Image2 from "../../../Images/Icons/PNG/43.png";
import Image3 from "../../../Images/logo/Logo-3.png";
import Image4 from "../../../Images/logo/Logo-1.png";
import Image5 from "../../../Images/Image/Img-24.png";
import Image6 from "../../../Images/Image/Img-23.png";
import Image7 from "../../../Images/Image/Img-25.png";
import Image8 from "../../../Images/Image/Img-26.png";
import Image9 from "../../../Images/Image/Img-34.png";
import Image10 from "../../../Images/Image/Img-38.png";
import Placeicon from "../../../Images/Icons/PNG/16.png";
import Placeicon2 from "../../../Images/Icons/PNG/27.png";
import BlueTextElement from '../../../Header/DropDownElements/BlueTextElement'
import LLCCheckSection from './LLCCheckSection'
import ThreeStepsSection from './ThreeStepsSection'
import PlaceOrder from './PlaceOrder'
import MainButton from '../../../Components/MainButton'
import RatingCompanies from '../../../Components/RatingCompanies'
import Text from '../../../Components/Text'
import FAQSection from '../../../Components/FAQSection'
function NonProfit() {
  return (
    <div>
      <Container>
        <HeroSection heading="Start a charity organization and work with GYB Firm to improve the world"
          heroImage={Image1} anotherimgclass="hero-section-image-llc"
          text={< >We make it easy for people who want to help others to start a nonprofit group without any stress and with individual attention.

          </>}
          btntext="Start Now"
          path="https://www.order.gybfirm.com/order"
          Gybfirmtext={<p className='w-100' >Join the <span className='fw-bolder'>1,000,000+ </span> businesses that have chosen <span className='fw-bolder'>GYB Firm </span></p>}
          GybfirmImage={Image2}
          trustedimage={Image3}
          trustedheading="More trusted, Verified Reviews"
          trustedrating="51319 rating"
          trustedimage2={Image4}
          trustedheading2="Trustpilot Excellent"
          trustedrating2="12,033 reviews"
        />
        <ImageMind heading="Forming a Nonprofit organization can make you feel scared, take up a lot of your time, and be expensive" text={<>It's tough to file for nonprofits. Every nonprofit organization has its own unique aims, rules, and guidelines that must be adhered to. This can make it tough to obtain tax-exempt status under section 501(c)(3).</>} Image={Image8} />
        <ImageMind anotherClass="flex-md-row-reverse"
          heading="GYB Firm can help you save time, money, and stress by setting up a nonprofit organization for only $39." text={<>Other companies charge $99 or more, but we don't. We provide a service to set up a not-for-profit organization for only $39. We have made things simpler so you don't have to spend too much money. Create a charitable group for $39 with our assistance and have more time to concentrate on important things.</>} Image={Image9} />
        <ImageMind heading="Explore the benefits of establishing a nonprofit organization with GYB Firm." text={<>We have helped more than 1 million people start and grow their own businesses since 2004. Get the best help and other great things to start your business confidently.</>} Image={Image10} anotherImgClass="llc-mind-image" />
        <LLCCheckSection headone="Obtain your EIN tax number for your business quickly"
          paraone="You can choose to buy either the Gold or Platinum package to help you form a company. You can get your EIN in just one day."
          headtwo="Get approved for tax-exemption status 501(c)(3) of the IRS"
          paratwo="Discuss with a tax specialist for your business, given at no extra cost in our Gold and Platinum setup deals." headthree="Create and submit documents to officially form a corporation"
          parathree="When you use the services of GYB Firm to create your business, they will help you write, get ready and file the legal documents required to formally start your business."
          headfour="Business is now easier with Entrepreneurship Made Easy"
          parafour="You can quickly get a bank account for your business, a website name, and an email for your business by choosing the Platinum package." headfive="Make your business bigger by using our Services"
          parafive="Get more services easily through your business dashboard, available when you want them." headsix="Don't forget important deadlines"
          parasix="Get alerts like text messages and emails about your orders and other important updates through your dashboard." headseven="You only have to pay the fee charged by the state plus $39."
          paraseven="We help you start a business without spending too much money and make it tailored. When you begin a business, it’s important to save every dollar that you can."
          headeight="Business rules in a simple way to grow your Business"
          paraeight="You don't have to pay a lawyer. Use our nonprofit incorporation kit to make the rules for your business, called corporation bylaws."
          headnine="Get a Cheapest Registered Agent for the First Year"
          paranine="One year of being a registered agent through our service is Cheapest, but subsequent years require yearly payment of $119. It is user-friendly and comprehensive."
          headten="No Secret Fees, No Agreement            "
          paraten="Get a really good experience and a lot of value for what you pay. No one offers you more things for less money than us.."
          headeleven="24/7 Quick and Neighborly Client Benefit             "
          paraeleven="Conversation to a committed consolidation pro, not a sales representative and get lifetime client back.             "
          headtwelve="Modern Dashboard, easy to use, and customized"
          paratwelve="Get everything you need for your business in one place. Get everything you need anytime you want it.              "
          headthirteen="Editable contract templates for businesses"
          parathirteen="Make sure all your papers are really good without having to pay for a lawyer."
          headfourteen="Get a free one-Hour Meeting"
          parafourteen="Talk to a professional about filing taxes for nonprofit organizations. This service is included for free with our Gold & Platinum formation packages"
        />
        <ThreeStepsSection head="How to Form a Nonprofit with GYB Firm" para="3 Simple Steps" image={Image5} imagetwo={Image6} imagethree={Image7}
          numberone="1" headingone="Choose the Right Type of Nonprofit Organization" textone={<>There are four main kinds of organizations that don't make profits. There are different kinds of non-profit companies, and they do not have to pay taxes. These include groups that help people, promote certain causes, give money to charity, and help people in certain professions.</>} numbertwo="2" headingtwo="Select the Bundle that Meets Your Needs" texttwo={<>To order, fill out our easy online form and tell us about your nonprofit organization and what services you need. We will then prepare and file your paperwork for you..</>} numberthree="3" headingthree="Discuss Regarding Your Nonprofit" textthree={<>To order, fill out our easy online form and tell us about your nonprofit organization and what services you need. We will then prepare and file your paperwork for you. </>}
        />
        <PlaceOrder placeclass="place-order-nonprofit-color" placehead="You’ve Placed Your Order, Now What?" placeicon={Placeicon} placeheadtwo="Check the information about your Project" placepara="You can see your order information on a dashboard that is easy to understand and use. This will help you make sure that everything is fine." placeheadthree="Get Your Papers Back in Your Dashboard" placeparatwo="Accessing your customized business dashboard provides you with all necessary documents, including written work and supplementary materials. You will be told when they are ready." placeicon2={Placeicon2} placehead4="Want to Know More About Starting a Nonprofit?"
          placeblue={<><BlueTextElement text={<>  <p className='palce-para2'>  <i class="fa-solid fa-arrow-right me-1 fw-bold"></i>Download our complete nonprofit guide now.</p> </>} /> </>} trustedimage={Image3} trustedheading="More trusted, Verified Reviews" trustedrating="54953 ratings" placehead2="Loved by 1,000,000+ Entrepreneurs Across All 50 States" />
        <ClientSay heading="Hear from our customers and see what they have to say"
          text="Everything was taken care of by GYB Firm and I really appreciated that."
          smtext="Delivery Depot LLC"
          video={video}
          ThumbNail={ThumbNail} />
        <div className='clients llc-clients m-0 '>
          <ClientsData heading="Ruby B." time="years ago"
            about="“Amazing fast service. Super helpful.”" image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="“Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company.”" image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="“Wonderful service! Easy, reliable, cost efficient!”" image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="“Amazing fast service. Super helpful.”" image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="“Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company.”" image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="“Wonderful service! Easy, reliable, cost efficient!”" image={Clientimage} />
        </div>

      </Container>

      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Forming a Nonprofit Organization</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="Can I Form a Nonprofit with Low Cost?"
            texta="Yes! With our $39 S Corp formation package, you only pay the fees required by your state. GYB Firm’s filing services are free."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does Your Service Cost?"
            texta="Since 2004 we’ve been honing & perfecting our service. Our tech-enabled process efficiencies mean that we can keep the costs down and pass this incredible value on to you. The result is low-cost yet personalized business formation with friendly and fast service."
            textb="The Silver Package costs $39 + state fee and includes the basics needed to start a  Nonprofit Organization"
            textc="The Gold Package is $149 + state fee. It’s the option most clients choose and boasts a comprehensive feature set to get your business started. Your EIN Business Tax number is included (whilst most other incorporation services charge an extra fee on top of their equivalent package price for this). The Gold package also includes IRS Form 2553, Corporation Bylaws, Operating Agreement, Banking Resolution, Lifetime Company Alerts, Online Access Dashboard, Unlimited Phone and Email Support, Business Banking Account & Business Tax Consultation."
            textd="The Platinum Package is our best value package at $299 + state fee and it offers a full suite of features. Platinum includes all of the Gold benefits plus Business Contract Templates, Expedited Filing and Domain Name plus Business Email"
            texte="
         When you form your Nonprofit with us, our Registered Agent service is free for the first year and is only $119 per year after that."
            textf={<>For more information on our services and prices, visit our <BlueTextElement text=" how it works"
              path="/how-it-start" /> page.</>}


          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Specific Rules For My State?"
            texta={<>Every state has its own set of rules for registering businesses, appointing registered agents, filing annual reports, and fulfilling other obligations. GYB Firm will assist you in finding out what you must do to follow the rules in your state when starting a Nonprofit organization.</>} />
          <FAQSection faqclass="faq-llc-div"
            heading="What kind of Nonprofit organization should I choose?"
            texta={<>Public Charities/501(c)(3) Organizations:<br />
              Charities, too known as 501(c)(3) organizations, as a rule give low-cost or free administrations to the open utilizing stores gotten through gifts. This may be through private gifts or gathering pledges occasions particularly planned to secure subsidizing from individuals or advocates. Illustrations of open charities incorporate nourishment banks and creature welfare organizations.</>}
            textb={<>Social Advocacy Organizations:<br />
              This sort of Nonprofit is member-based and points to attain particular objectives with respect to political alter without accomplishing a benefit. Social backing organizations, classified by the IRS as 501(c)(4), utilize gifts and part contribution to send out data that advances a specific social plan. The NAACP and the ACLU are social backing organizations you can be recognizable with.</>}
            textc={<>Foundations:<br />
              Like charities, establishments are moreover classified as 501(c)(3) organizations. They work to superior the community, whether contributing monetarily to neighborhood, littler charities/nonprofits or holding occasions that advantage communities. Establishments are supported by and contribute on sake of an related for-profit enterprise. Establishments must give a certain sum of pay to other organizations each year. The Charge and Melinda Entryways Establishment is one of the foremost well-known.</>}
            textd={<>Trade and Professional Organizations: <br />
              These sorts of organizations are classified as 501(c)(6). They more often than not work to advantage and advance members’ trade interface and are supported basically through enrollment levy. Common exchange and proficient organizations incorporate chambers of commerce and genuine bequest sheets.
            </>}
          />
          <center>
            <MainButton text="More questions" anotherclass="faq-btn" path="/term&conditions"/>
          </center>
        </div>
      </center>

      <Container>
        <center>
          <div className='testimonials-b'>
            <div className="d-flex align-items-center justify-content-center">
              <RatingCompanies image={Image3} rating="54953 ratings" heading="More trusted, Verified Reviews" />
            </div>
            <h1 className='faq-heading'>Form Your Nonprofit Now
              <Text text="Help Make the World a Better Place with GYB Firm" />
            </h1>
            <MainButton path="https://www.order.gybfirm.com/order" text="Start Now" anotherclass="testimonials-b-btn" />
          </div>
        </center>



      </Container>


    </div>
  )
}

export default NonProfit