import React from 'react'
import HeroSection from '../../../Home/HeroSection'
import ImageMind from '../../../Components/ImageMind'
import { Container } from 'react-bootstrap'
import ClientsData from "../../../Components/ClientsData"
import Clientimage from "../../../Images/Image/Client-Image.webp"
import Image1 from "../../../Images/Image/Img-30.png"
import Image2 from "../../../Images/Icons/PNG/43.png";
import Image3 from "../../../Images/logo/Logo-3.png";
import Image4 from "../../../Images/logo/Logo-1.png";
import Image5 from "../../../Images/Image/Img-20.png";
import Image7 from "../../../Images/Image/Img-21.png";
import Image6 from "../../../Images/Image/Img-22.png";
import Image8 from "../../../Images/Image/Img-33.png";
import video from "../../../Images/video/Corporation.mp4"
import ThumbNail from "../../../Images/Image/Img-29.png"
import Image10 from "../../../Images/Image/Img-39.png";
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
function SCorporation() {
  return (
    <div>
      <Container>
        <HeroSection heading="Register an S Corp and Get Start Your Business with GYB Firm" 
        heroImage={Image1} anotherimgclass="hero-section-image-llc"
        text={< >Tension-free S Corp registration to save cash on your charges as your business develops.</>}
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
      <ImageMind heading="Registering an S Corp Can Be Complex and Costly"  text={<><BlueTextElement path="/" text={<span className='fs-5'>S Corp </span>} /> formation may be a complicated prepare as federal and state governments want you to meet different circumstances, rules and directions. And all it takes is one basic botch for your request to be rejected.</>}
       component={<>
       <video controls className="client-say-youtube dissolve-company-video s-corporation-video"  poster={ThumbNail} >
          <source src={video} type='video/mp4' />
        </video>
      </>}/>
      <ImageMind anotherClass="flex-md-row-reverse"
       heading="Save Cash & Time with GYB Firm’s For S Corp Registration
       "  text={<> <span className='fw-bold text-black'>Whereas a few suppliers charge $149+, </span>we don’t charge huge amount. Streamlined forms keep our costs down, so ready to pass the reserve funds back to you. Register your S Corp with us for complimentary and spend your profitable time and cash on what truly things — developing your business.</>} 
      Image={Image8}
      />
      <ImageMind heading="Get the Advantages of Registering Your S Corp with GYB Firm"  text={<> Connect the 1,000,000+ business visionaries and small business proprietors who've registered and developed their businesses with GYB Firm since 2004. Get industry-leading bolster and a host of other astounding benefits to get start your business with certainty.</>} Image={Image10} anotherImgClass="llc-mind-image" />
      <LLCCheckSection headone="Get Your EIN Business Tax Number Quick"
       paraone="Included without any cost in our Gold and Platinum registration bundles; Get your EIN within one working day" 
       headtwo="Avail Free Tax Consultation of 1-Hour"
       paratwo="Conversation to a business tax master, included for complimentary in our Gold and Platinum registration bundles" headthree="Get ready & process Your Articles of Organization" 
       parathree="Each GYB Firm registration bundle incorporates help drafting, planning and filing Articles of Organization."
        headfour="Business enterprise Made Simple" 
       parafour="Get a bank account for your business, domain name under your business name and business e-mail quick with the Platinum bundle." headfive="Develop Your Business with Custom-made Services" 
       parafive="Get set up with extra business administrations from inside your business dashboard, once you require them." headsix="Remain on Top of Vital Due Dates" 
       parasix="Get e-mail and text notices, order upgrades and free lifetime compliance cautions inside your dashboard" headseven=" Only $39 S Corp Filing Fee, Plus the State Fee"
        paraseven="Less-cost, personalized business registration. Since when you’re taking a startup of a business, each dollar have worth for you." 
        headeight="Essentially Grow Your Organization Bylaws"
         paraeight="No have to be compelled to contract a lawyer. Make your organization bylaws utilizing our   S Corporation. incorporation pack."
          headnine=" Cheap Registered Agent for the first Year"
          paranine="Get your full and easy-to-use Registered Agent benefit in just $60 for the Office address of Registered Agent and $100 additional if you need mailing address as well" 
          headten="No Covered up Expenses, No Contracts" 
        paraten="Get the finest client involvement and unparalleled esteem for cash. No one gives you more for less." headeleven="24/7 Quick and Neighborly Client Benefit"
         paraeleven="Conversation to a devoted consolidation master, not a sales representative, and get lifetime client bolster." 
         headtwelve="Advanced, Straightforward, Personalized Dashboard" 
         paratwelve="Your business fundamentals all in one place. Get to everything you would, like at whatever point you wish it."
         headthirteen="Adjustable Business Contract Formats"
         parathirteen="Guarantee that all your contracts, reports and forms are watertight without the cost of enlisting a legal counselor."
         headfourteen="Save Cash on Charges with IRS Form 2553"
         parafourteen="Select S Corp election so that your LLC is treated as an S Corp for tax filing scenario."/>
      <ThreeStepsSection head="How to Form a S Corporation with GYB Firm" para="3 Simple Steps" image={Image5} imagetwo={Image6} imagethree={Image7}
      numberone="1" 
      headingone="Select Your Registration State" 
      textone={<>Rules and directions change by state, so beyond any doubt you know what state you need your business to be in to suit your needs. You don’t have to be compelled to select the state you live in, either!</>} 
      numbertwo="2" 
      headingtwo="Select Perfect Bundle for Your Circumstance" 
      texttwo={<>Whether you merely require the essentials or need more broad business bolster, GYB Firm has the ideal business registration bundle to assist you begin and develop your organization.</>} 
      numberthree="3" 
      headingthree="Tell us more, Regarding Your S Corp      "
       textthree={<>Process the online project forms and give us with the subtle elements of your S Corp. S Corporation prerequisites mean you’ll have to be compelled to supply information on the number of executives, stock knowledge, the worth of shares and number of shareholders. </>}
      />
      <PlaceOrder placeclass="place-order-other-color" placehead="You’ve Placed Your Order, Now What?" placeicon={Placeicon} placeheadtwo="Review Your Project Details" 
      placepara="You'll get access to your own basic and instinctive business dashboard where you'll survey your project details and check everything is correct." placeheadthree="Get Your Filed Reports in Your Dashboard

      " placeparatwo="You’re filed articles and any extra reports and services are effortlessly available from inside your custom business dashboard. You’ll get notices once they’re prepared." placeicon2={Placeicon2}  placehead4="Want to Know More About Starting an S Crop?"
      placeblue={<><BlueTextElement text={<>  <p className='palce-para2'>  <i class="fa-solid fa-arrow-right me-1 fw-bold"></i>Download our Why Form An S Corp Guide now.</p> </>}  /> </>} trustedimage={Image3} trustedheading="More trusted, Verified Reviews" trustedrating="54953 ratings" placehead2="Loved by 1,000,000+ Entrepreneurs Across All 50 States"/>
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
        <h1 className='faq-heading'>Common Questions About Forming an S Corp</h1>
        <FAQSection faqclass="faq-llc-div"
        heading="Can I Form aS Corp with Low Cost?"
        texta="Yes! With our $39 S Corp formation package, you only pay the fees required by your state. GYB Firm’s filing services are free."
     />
        <FAQSection faqclass="faq-llc-div"
         heading="How Much Does Your Service Cost?"
        texta="Since 2004 we’ve been honing & perfecting our service. Our tech-enabled process efficiencies mean that we can keep the costs down and pass this incredible value on to you. The result is low-cost yet personalized business formation with friendly and fast service."
         textb="The Silver Package costs $39 + state fee and includes the basics needed to start a  S Corporation."
         textc="The Gold Package is $149 + state fee. It’s the option most clients choose and boasts a comprehensive feature set to get your business started. Your EIN Business Tax number is included (whilst most other incorporation services charge an extra fee on top of their equivalent package price for this). The Gold package also includes IRS Form 2553, Corporation Bylaws, Operating Agreement, Banking Resolution, Lifetime Company Alerts, Online Access Dashboard, Unlimited Phone and Email Support, Business Banking Account & Business Tax Consultation."
         textd="The Platinum Package is our best value package at $299 + state fee and it offers a full suite of features. Platinum includes all of the Gold benefits plus Business Contract Templates, Expedited Filing and Domain Name plus Business Email"
         texte="
         When you form your   S Corporation. with us, our Registered Agent service is free for the first year and is only $119 per year after that."
         textf={<>For more information on our services and prices, visit our <BlueTextElement text=" how it works" path="/"/> page.</>}
    

         />
        <FAQSection faqclass="faq-llc-div"
         heading="Are There Specific Rules For My State?"
        texta={<>Each state has specific rules and requirements regarding registered Agents, naming rules, business licenses etc. Learn more about S Corporations in your state and read our free S Corporation state guides <BlueTextElement text="here" path="/"/>.</>}/>
        <FAQSection  faqclass="faq-llc-div"
         heading="What's My State's Filing Fee for S Corporations?"
        texta={<>Filing costs to form a S Corporation can vary from state to state. Use our <BlueTextElement text="free filing fees tool " path="/"/>to easily compare state fees before you start your business.</>}
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
      <RatingCompanies  image={Image3} rating="54953 ratings"  heading="More trusted, Verified Reviews"/>
      </div>
          <h1 className='faq-heading'>Form Your S Corp for $39
        <Text text="Kickstart Your Dream Business with GYB Firm Now"/>
        </h1>
          <MainButton path="https://www.order.gybfirm.com/order" text="Start Now" anotherclass="testimonials-b-btn"/>
      </div>
    </center>

    

      </Container>
    

    </div>
  )
}

export default SCorporation