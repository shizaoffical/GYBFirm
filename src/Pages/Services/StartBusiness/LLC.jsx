import React from 'react'
import HeroSection from '../../../Home/HeroSection'
import ImageMind from '../../../Components/ImageMind'
import { Container } from 'react-bootstrap'
import ClientSay from '../../../Home/ClientSay'
import ClientsData from "../../../Components/ClientsData"
import video from "../../../Images/video/Corporation.mp4"
import ThumbNail from "../../../Images/Image/HomePage-Video-ThumbNail-B.jpg"
import Clientimage from "../../../Images/Image/Client-Image.webp"
import Image1 from "../../../Images/Image/Img-10.png"
import Image2 from "../../../Images/Icons/PNG/43.png";
import Image3 from "../../../Images/logo/Logo-3.png";
import Image4 from "../../../Images/logo/Logo-1.png";
import Image5 from "../../../Images/Image/Img-15.png";
import Image7 from "../../../Images/Image/Img-14.png";
import Image6 from "../../../Images/Image/Img-16.png";
import Image8 from "../../../Images/Image/Img-28.png";
import Image9 from "../../../Images/Image/Img-12.png";
import Image10 from "../../../Images/Image/Img-37.png";
import Placeicon from "../../../Images/Icons/PNG/16.png";
import Placeicon2 from "../../../Images/Icons/PNG/28.png";
import BlueTextElement from '../../../Header/DropDownElements/BlueTextElement'
import LLCCheckSection from './LLCCheckSection'
import ThreeStepsSection from './ThreeStepsSection'
import PlaceOrder from './PlaceOrder'
import MainButton from '../../../Components/MainButton'
import RatingCompanies from '../../../Components/RatingCompanies'
import Text from '../../../Components/Text'
import FAQSection from '../../../Components/FAQSection'
function LLC() {
  return (
    <div>
      <Container>
        <HeroSection heading="Register Your LLC and Get Start Your Ideal Business with GYB Firm"
          heroImage={Image1} anotherimgclass="hero-section-image-llc"
          text={< >Simple, stress-free and personalized business formation for intelligent people with great thoughts.</>}
          btntext="Form Your Free LLC Now"
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
        <ImageMind heading="Registering an LLC Can Be Overwhelming and Costly" text={<>There's a lot that goes into filing an <BlueTextElement text="LLC" path="/" />. There's a lot that goes into registering an LLC. With different state prerequisites, different steps and a lot of imperative documentation, indeed the littlest mistake can conclusion up costing you. That's where we come in.</>} Image={Image8} />
        <ImageMind anotherClass="flex-md-row-reverse" heading="Spare Cash and Time with GYB Firm’s $39 (+ state charge) LLC Formation" text={<> <span className='fw-bold text-black'>A few suppliers charge $150+ </span>
        for LLC registration, but our streamlined forms keep costs down so you get the foremost blast for your buck. Enroll your LLC for $39 (+ the state charge) and free up time to establish other great things</>} Image={Image9} />
        <ImageMind heading="Find the Benefits of Registering Your LLC with GYB Firm" text={<>Since 2004, we’ve made a difference 1,000,000+ business people and little business proprietors form and develop their businesses. Get industry driving back (and a host of other astonishing benefits!) to begin your business with certainty.</>} Image={Image10} anotherImgClass="llc-mind-image" />
        <LLCCheckSection headone="Get Your EIN Business Tax Number Quick"
          paraone="Included without any cost in our Gold and Platinum registration bundles; Get your EIN within one working day." headtwo="Get ready & process Your Articles of Organization"
          paratwo="Each GYB Firm registration bundle incorporates help drafting, planning and filing Articles of Organization"
          headthree="Business enterprise Made Simple"
          parathree="Get a bank account for your business, domain name under your business name and business e-mail quick with the Platinum bundle."
          headfour="Develop Your Business with Custom-made Services"
          parafour="Get set up with extra business administrations from inside your business dashboard, once you require them. "
          headfive="Never Forget an Vital Due Date"
          parafive="Get alert and e-mail notices, project updates and compliance cautions from inside your dashboard. "
          headsix="Adjustable Business Contract Formats"
          parasix="Accessible in our Platinum bundle, these layouts offer assistance guarantee that all your records are watertight without contracting an attorney"
          headseven=" Only $39, as it were Pay the State Charge"
          paraseven="Less-cost, personalized business registration. Since when you’re taking a startup of a business, each dollar have worth for you."
          headeight="Cheap Registered Agent for the first Year"
          paraeight="Get your full and easy-to-use Registered Agent benefit in just $60 for the Office address of Registered Agent and $100 additional if you need mailing address as well."
          headnine="No Covered up Expenses, No Contracts"
          paranine="Get the finest client involvement and unparalleled esteem for cash. No one gives you more for less." headten="24/7 Quick and Neighborly Client Benefit"
          paraten="Conversation to a devoted consolidation master, not a sales representative, and get lifetime client bolster." 
          headeleven="Advanced, Straightforward, Personalized Dashboard"
          paraeleven="Your business fundamentals all in one place. Get to everything you would, like at whatever point you wish it." headtwelve="Save Cash on Charges with IRS Form 2553"
          paratwelve="Select S Corp election so that your LLC is treated as an S Corp for tax filing scenario." 
          />
        <ThreeStepsSection head="How to File Your Free LLC Online With GYB Firm" para="3 Simple Steps" image={Image5} imagetwo={Image6} imagethree={Image7}
          numberone="1" headingone="Select a Business Name" textone={<>Your business name says many things regarding you and makes a difference build up your presence within the commercial center. Make beyond any doubt to choose a name that's important and special. Get offer assistance finding the idealize name with our  <BlueTextElement text="Business Name Generator" path="/" />. </>} 
          numbertwo="2" 
          headingtwo="Select the Bundle That Complete Your Needs" texttwo={<>Whether you simply require the essentials or need more vigorous business bolster, GYB Firm has the ideal business registration bundle to assist you begin and develop your business </>}
           numberthree="3"
            headingthree="Tell Us Regarding Your Business" textthree={<>Fill within the basic online order forms and give us with the subtle elements of your business and the services that you simply require. </>}
        />
        <PlaceOrder placehead="You’ve Placed Your Order, Now What?" placeicon={Placeicon}
         placeheadtwo="Review Your Project Details"
          placepara="You'll get access to your own basic and instinctive business dashboard where you'll survey your project details and check everything is correct."
           placeheadthree="Get Your Filed Reports in Your Dashboard" 
           placeparatwo="You’re filed articles and any extra reports and services are effortlessly available from inside your custom business dashboard. You’ll get notices once they’re prepared" placeicon2={Placeicon2} 
           placehead4="Want to Know More About Starting an LLC?"
          placeblue={<><BlueTextElement text={<>  <p className='palce-para2'>  <i class="fa-solid fa-arrow-right me-1 fw-bold"></i>Download our complete LLC guide now</p> </>} /> </>} trustedimage={Image3} trustedheading="More trusted, Verified Reviews" trustedrating="54953 ratings" placehead2="Loved by 1,000,000+ Entrepreneurs Across All 50 States" />
        <ClientSay heading="See What Our Clients Have to Say…"
          text="One of the things I truly acknowledged with GYB Firm is that it took care of everything for me. All complex and messy projects handled professionally"
          smtext="Delivery Depot LLC"
          video={video}
          ThumbNail={ThumbNail} />
        <div className='clients llc-clients '>
          <ClientsData heading="Ruby B." time="years ago"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Clientimage} />
          <ClientsData heading="Ruby B." time="years ago"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Clientimage} />
        </div>

      </Container>

      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Starting an LLC</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How much the service fee of LLC?"
            texta="Yes! With our $39 LLC bundle, you simply pay the expenses required by your state. GYB Firm’s formation services are only $39. "
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does Your Service Cost?"
            texta="Since 2004, we’ve been perfecting our service. Our tech-enabled process efficiencies mean we’re able to keep the costs down and pass this incredible value on to you. The result is low-cost, personalized business formation with fast and friendly service."
            textb="The Silver Package is $39 + state fee and includes the basics needed to form your LLC."
            textc="The Gold Package is $199 + state fee. It’s our most popular option with a comprehensive feature set to get your business started. Your EIN Business Tax number is included (whereas most incorporation services charge an extra fee on top of their equivalent package price for this). Also included in the Gold package are IRS Form 2553, Operating Agreement, Banking Resolution, Lifetime Company Alerts, Online Access Dashboard, Unlimited Phone & Email Support, Business Banking Account and Business Tax Consultation."
            textd="The Platinum Package is $299 + state fee. It’s our best value package offering a full suite of features. It includes all of the Gold benefits plus Business Contract Templates, Expedited Filing and Domain Name + Business Email."
            texte="When you register your LLC with us, our Registered Agent service is free for the first year and is only $119 per year after that."
            textf={<>For more information on our services and prices, visit our <BlueTextElement text=" how it works" 
            path="/how-it-start" /> page.</>}


          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Specific Rules for My State?"
            texta={<>Each state has specific requirements regarding registered agents, naming rules, business licenses etc. Learn more about LLCs in your state and read our free LLC state guides <BlueTextElement text="here" path="/" />.</>} />
          <FAQSection faqclass="faq-llc-div"
            heading="What's My State's Filing Fee for LLCs?"
            texta={<>Filing costs to form an LLC can vary from state to state. Use our <BlueTextElement text="free filing fees tool " path="/" />to easily compare state fees before you start your business.</>}
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
            <h1 className='faq-heading'>Form Your LLC for $39
              <Text text="Kickstart Your Dream Business with GYB Firm Now" />
            </h1>
            <MainButton path="https://www.order.gybfirm.com/order" text=" Start Now" anotherclass="testimonials-b-btn" />
          </div>
        </center>



      </Container>


    </div>
  )
}

export default LLC