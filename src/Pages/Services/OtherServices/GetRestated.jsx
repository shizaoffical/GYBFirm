import React from 'react'
import HeroSection from '../../../Home/HeroSection'
import ImageMind from '../../../Components/ImageMind'
import { Container } from 'react-bootstrap'
import ClientSay from '../../../Home/ClientSay'
import video from "../../../Images/video/Corporation.mp4"
import ThumbNail from "../../../Images/Image/HomePage-Video-ThumbNail-B.jpg"
import Image1 from "../../../Images/Image/Img-77.png"
import Image2 from "../../../Images/Image/Space-Rocket.png";
import Image4 from "../../../Images/logo/Logo-1.png";
import Image5 from "../../../Images/Icons/PNG/27.png";
import Image6 from "../../../Images/Image/Img-78.png";
import AnouncementSection from '../../../Components/AnouncementSection'
import BlueTextElement from '../../../Header/DropDownElements/BlueTextElement'
import MainButton from '../../../Components/MainButton'
import FAQSection from '../../../Components/FAQSection'
import LargeText from '../../../Components/LargeText'
import Check from '../../../Components/Check'

function  GetRestated() {
  return (
    <div>
      <Container>
        <HeroSection heading="File an Order of Reinstatement Quickly and Easily"
          heroImage={Image1} anotherimgclass="hero-section-image-llc"
          text={< >GYB Firm can help you restore your Good Standing status with your state and restart operations in a fraction of the time (and money!) it takes to start a new company.</>}
          btntext="    File Your Reinstatement"
          trustedimage2={Image4}
          trustedheading2="Trustpilot Excellent"
          trustedrating2="12,033 reviews"
        />
        <ImageMind heading="Need to Reinstate a Business Back to Good Standing?" text=" Sometimes life and business get complicated. Meeting the business requirements of your state means keeping on top of fees, annual reports and taxes — and if things fall through the cracks, your company can be dissolved." Image={Image6} />
        <ImageMind anotherClass="flex-md-row-reverse"
          heading="GYB Firm’s Reinstatement Service Is Here to Help"
          text="If your business has been dissolved because of non-compliance, you can restore your Good Standing and restart operations by filing an order of reinstatement with your state of formation. GYB Firm’s Reinstatement service takes care of the paperwork for you, making sure you follow the reinstatement procedures of your state." Image={Image5} />




        <div className='virtual-address-row-b'>
          <LargeText heading="Why Choose Reinstatement?"
            text="In addition to costing significantly less, there are many advantages to choosing Reinstatement over forming a completely new company." />
          <div className='virtual-address-row-col'>
            <Check heading="Get back in business faster" iconclass="llc-check-icon"
              anotherclass="virtual-address-row-check" number="1"
              text="In many states, reinstatement procedures can be completed in less time than forming a new company, meaning you can restart operations sooner." />
            <Check heading="Keep your company name" number="2"
              anotherclass="virtual-address-row-check"  iconclass="llc-check-icon"
              text="You put a lot of effort into choosing the perfect business name — don’t throw it away! Reinstatement allows you to continue to use your original brand." />
          </div>
          <div className='virtual-address-row-col'>
            <Check anotherclass="virtual-address-row-check"  iconclass="llc-check-icon"
              heading="Recover historical company information  " number="3"
              text="With reinstatement, you can keep your original records and maintain your historical background. No starting from scratch!" />
          </div>
        </div>









        <div className='virtual-address-row s-crop-election-row'>
          <div className='virtual-address-row-div'>
            <LargeText heading="What Does the Reinstatement Procedure Look Like?  "
              text="To get your business reinstated, you first need to look at what went wrong. If you failed to submit the proper paperwork to the state or failed to pay a fee, you need to do that ASAP. Once you’ve taken care of these compliance issues, the reinstatement process typically goes like this:" />
            <Check number="3" anotherclass="s-crop-election"  iconclass="llc-check-icon"
              text="Fill out any reinstatement forms required by your state." />
            <Check number="4"  iconclass="llc-check-icon" anotherclass="s-crop-election"
              text="File reinstatement forms with the proper state offices like the Secretary of State or the Department of Revenue or Taxation." />
            <Check number="5" anotherclass="s-crop-election"   iconclass="llc-check-icon"
              text="Pay any required fees." />
            <Check number="6"  iconclass="llc-check-icon"anotherclass="s-crop-election"
              text="
              Wait to hear back from your state about your reinstatement status." />

            <AnouncementSection
              text="This is a process you want to get right the first time in order to get back to doing business as soon as possible. GYB Firm provides reinstatement services in most states to get your business entity active again."
              icon={<i className='fa-solid fa-share'></i>}
              anotherclass="virtual-address-annountcement-2" />
            <MainButton text=" File Your Reinstatement" anotherclass="testimonials-b-btn" />
          </div>
        </div>






        <ClientSay heading="What is a Certificate of Good Standing?"
          text={<>In certain situations, you may be required to prove that your business exists and complies with relevant state laws and regulations. A <BlueTextElement text="Certificate of Good Standing" path="/" />  from your state serves as this proof, and you can’t get one if you’re in bad standing.</>}
          video={video}
          ThumbNail={ThumbNail} />
      </Container>







      <div className='virtual-address-row'>
        {/* section a */}
        <div className='virtual-address-row-div'>
          <LargeText heading={<>Four Risks of Being in "Bad Standing"</>}
          />
          <div className='virtual-address-row-col'>
            <Check number="1" heading="You can’t obtain financing."
               iconclass="llc-check-icon"anotherclass="virtual-address-row-check"
              text="Typically, lenders or banks want proof of your business’s existence and business history to evaluate creditworthiness for a loan or certain types of transactions. Plus, if you're seeking investment from investors or other partners, they’ll want to make sure your business is legitimate and in compliance with local laws and regulations." />
            <Check number="2" heading="There‘s no way to do business in other states."
               iconclass="llc-check-icon" anotherclass="virtual-address-row-check"
              text={<>To do business in states other than your home state, your business will need to apply for <BlueTextElement text="Foreign Qualification" />  in the new state. To do this, you must be in good standing with your current state.</>} />
          </div>
          <div className='virtual-address-row-col'>
            <Check number="3"
              iconclass="llc-check-icon" anotherclass="virtual-address-row-check"
              heading="You have no proof for licensing agencies and regulators."
              text="In order to renew or obtain certain permits and licenses, you may need to provide a Certificate of Good Standing to licensing agencies and regulators in your state." />
            <Check number="4" heading="You can’t sell your business."
               iconclass="llc-check-icon" anotherclass="virtual-address-row-check"
              text="If the day comes when you want to sell your business, you’ll need to show proof of its existence, history and compliance to interested business brokers and buyers." />
          </div>
        </div>
      </div>








      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Business Reinstatement</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="When is reinstatement required?"
            texta="If your business has lost its good standing with the state and been dissolved, you need to file for reinstatement if you’d like to keep doing business. If you do the process correctly and meet all necessary requirements, your business will be reinstated and you’ll get back all the advantages that come with being an official, legal entity."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How much does it cost to reinstate a business?"
            texta={<>The cost to reinstate a business depends on which state you’re in. For example, in Texas, the filing fee for reinstatement after involuntary dissolution is $75, and the <BlueTextElement text="filing fee for reinstatement" />   following a voluntary dissolution is $15. <BlueTextElement text="In Massachusetts," />   the fee for filing a reinstatement application is $100. Check with your Secretary of State to learn what your fee will be. You will need to pay these filing fees on top of any past-due taxes, penalties, fees and/or interest to get back into good standing.</>}
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How do I reinstate a business back to good standing?"
            texta={<>To keep your small business in good standing, you typically need to be up-to-date on fees, file annual or biennial reports with the Secretary of State, keep your business records up to date by filing
              <BlueTextElement text=" Articles of Amendment" path="/" /> after major events and pay any other necessary business fees or franchise taxes to state regulators every year. However, that doesn’t always happen. Things can sometimes slip through the cracks, and if your business fails to complete these tasks, it can lose its good standing. Then, your state can file to  <BlueTextElement text=" dissolve your business " path="/" />  and completely revoke its LLC status. It’s not an ideal situation, but your business isn’t gone forever if this happens. Filing a reinstatement order helps restore your business back to good standing.</>} />
          <FAQSection faqclass="faq-llc-div"
            heading="How long does it take to reinstate a company?"
            texta={<>How long it takes to reinstate your company depends on which state you live in. The  <BlueTextElement text="Minnesota Secretary of State claims " path="/" /> that most business filings are returned within 3-5 days.<BlueTextElement text=" Nebraska asks " path="/" />  that business owners wait about a week for their reinstatements to be processed. Some states, like Nevada, allow business owners to pay extra for an expedited filing. Check with your Secretary of State to determine how long filing for reinstatement typically takes.</>}
          />
          <FAQSection faqclass="faq-llc-div"
            heading="What does “restored to good standing” mean?"
            texta={<> Being in good standing means that your business is up-to-date on filing your annual report, biennial report, other required forms, compliance paperwork and any other requirements from your <BlueTextElement text="company’s home state" path="/" />. To get an official Certificate of Good Standing, you’ll need to file the appropriate form with your state, or you can have GYB Firm file for you. The Certificate of Good Standing helps you prove that your business exists and complies with the rules. It helps you appear trustworthy and credible to potential partners, investors and lenders..</>}
          />
          <center>
            <MainButton text="Load More" anotherclass="faq-btn" />
          </center>
        </div>
      </center>

      <Container>

        <ImageMind heading="Ready to Get Reinstated?" text={<>GYB Firm can help you reinstate your dissolved business and get back in good standing.
          <MainButton text="File Your Reinstatement Order " icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="faq-btn" /></>}
          Image={Image2} anotherClass="flex-md-row-reverse" />
      </Container>


    </div>
  )
}

export default GetRestated