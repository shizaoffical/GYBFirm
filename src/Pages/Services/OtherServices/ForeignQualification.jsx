import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../../Home/HeroSection'
import Image1 from "../../../Images/Image/Img-55.png"
import ClientSay from '../../../Home/ClientSay';
import LargeText from "../../../Components/LargeText"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import AnouncementSection from '../../../Components/AnouncementSection'
import EntityTypeSection from '../../../Components/EntityTypeSection';
import ImageMind from '../../../Components/ImageMind'
import FAQSection from '../../../Components/FAQSection'
import Image2 from "../../../Images/Image/Img-56.png"
import AboutCompany from './AboutCompany'
import Image5 from "../../../Images/logo/Logo-3.png";
import Check from '../../../Components/Check';
import Image8 from "../../../Images/Icons/PNG/48.png";
import Image9 from "../../../Images/Icons/PNG/15.png";
import Image10 from "../../../Images/Icons/PNG/32.png";
import Image11 from "../../../Images/Icons/PNG/17.png";
import Image12 from "../../../Images/Icons/PNG/65.png";
import Image13 from "../../../Images/Icons/PNG/66.png";
import Image14 from "../../../Images/Icons/PNG/67.png";
import Image15 from "../../../Images/Icons/PNG/21.png";
import Image16 from "../../../Images/Icons/PNG/25.png";
import Image17 from "../../../Images/Icons/PNG/19.png";
import Image18 from "../../../Images/Icons/PNG/6.png";
import Image19 from "../../../Images/Icons/PNG/71.png";


function ForeignQualification() {
  return (
    <>
      <Container>
        <HeroSection heading="Filing a Foreign Qualification to Do Business Out of State"
          heroImage={Image1}
          btntext="Order Now" path="https://www.order.gybfirm.com/order"
          trustedimage={Image5}
          trustedheading="More Trusted, Verified Reviews"
          trustedrating="51319 rating" />

        <ClientSay text={<><img src={Image2} alt="" className='registration-agent-left-col-image'/></>} class="ein-section"
          component={<>
            <LargeText
              text="Your business is expanding beyond your local region. Or perhaps you are an Internet business with fulfillment centers in multiple locations. This may mean you are doing business in a “foreign” state. What do you do? We have the answers to all your questions regarding what constitutes doing business in another state and how to get the proper paperwork done to be legitimate." />
            <AnouncementSection
              text={<>Many confuse foreign qualification with the idea of operating outside the United States. This really has to do with how you perform within the borders of the United States. “Foreign,” in this case, refers to the fact that <BlueTextElement text="each state has operating rules that are different from one another;" />  and, in turn, must insist on proper registration to do business in that locale.</>}
              icon={<i className='fa-solid fa-share'></i>}
              anotherclass="virtual-address-annountcement" />
            <LargeText
              text="Therefore, it is important that when your company is located in or operates within a state other than the place of original incorporation, you are given the proper rights to conduct business there. This actually means you need to obtain a Certificate of Authority"
            />
            <LargeText text={<> <span className='text-black fw-bolder'> We can take care of the details.</span>
              <BlueTextElement text=" Let GYB Firm help you file your Foreign Qualification today!" /></>} />
          </>} />

      </Container>



      <center>
        <div className='faq-main faq-llc  container-fluid'>
          <h1 className='faq-heading'>Foreign Qualification Basics</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="What Is a ”Foreign Qualification”?"
            texta="Yes, under most circumstances business entities other than DBA's must present an EIN along with the filed Articles of Organization or Incorporation in order for an account to be opened."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="What circumstances require me to change my EIN?"
            texta={<>A Foreign Qualification refers to the process by which you register your company to do business in another state. An LLC or corporation is considered "domestic" in the state in which is was formed, and “foreign” in any other state in which it wants to do business. When you file a Foreign Qualification, you get a Certificate of Authority, which gives you legitimate rights to do business in the state. A Foreign Qualification must be completed in each state in which a corporation or LLC intends to conduct business.</>}
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Businesses Are Classified as Foreign?"
            texta="What does it mean to “do business” in a state? Let’s discuss the activities that determine you are conducting business in another state. Essentially, if your actions go beyond minor transactions in a state, such as making management decisions, you will likely be seen as a “foreign” entity that needs to register. However, there are some simple rules that help weed out the minor from the major “doing business” stature."
            textb="First, the company would have a physical presence in the state. This refers to the existence of an office, store or warehouse that services or solicits residents of that state in any form. It could also refer to having employees or even bank accounts in a state."
            textc="Second, if your company has to pay state taxes in a particular locale, they are going to be tagged as “doing business” in a state. Taxes are assessed when a company sells directly from a state or upholds a significant number of contracts in a state."
            textd="If your business fits any of these criteria, you could benefit from filing a Foreign Qualification with us." />
          <FAQSection faqclass="faq-llc-div"
            heading="What Is a Certificate of Authority?"
            texta={<>A Certificate of Authority is an official document that gives you permission to operate your business in a state other than the one in which your corporation was formed. If a company neglects to file a Foreign Qualification and receive a Certificate of Authority, then it does not have legal standing or authority to transact business within that state. <BlueTextElement text="Every state has different rules" />  regarding what constitutes transacting business. Not following the rules could affect your business's <BlueTextElement text=" Certificate of Good Standing" />  which you need to get a business loan, renew your business license or file your business taxes. It can be cumbersome and time consuming to file a Certificate of Authority in every state in which you want to do business, which is why GYB Firm has simplified the process. Simply complete our online <BlueTextElement text=" Foreign Qualifications" />  form, and we’ll do the paperwork for you.</>}
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Does the Foreign Qualification Process Work?"
            texta="Every process has paperwork and proper steps to follow. To give you an understanding of what we’ll be doing on your behalf, let’s review the process below:"
            textb={<>Name Search: Your corporation’s name will be compared to the database in each state to ensure no other company is using it. Hopefully, there will be no contradiction, but if there is then you’ll be asked to operate under a fictitious or assumed name. If you'd like to conduct your own name search for your LLC, we've created <BlueTextElement text="How to Search & Choose Your Business Entity Name in all 50 States." />  .</>}
          />
        </div>
      </center>


      <Container>


        <ImageMind heading="Help File My Foreign Qualification" anotherClass="andement-row-d" colclass="foreign-qualification-check-col"
          text={<>
            <dt className='fw-bold text-black mb-2 fs-5'>Save your time. We'll handle the paperwork.</dt>
            Typical criteria include but are not limited to:
            <div className='foreign-qualification-check-div'>
              <Check anotherclass="foreign-qualification-check" icon textclass="foreign-qualification-check-text"
                iconclass="foriegn-qualification-check-icon"
                text="Does the company have a physical presence in the state?" />

              <Check anotherclass="foreign-qualification-check" icon textclass="foreign-qualification-check-text"
                iconclass="foriegn-qualification-check-icon"
                text="Does the entity have employees working within the state?" />
            </div>
            <Check anotherclass="foreign-qualification-check" icon textclass="foreign-qualification-check-text"
              iconclass="foriegn-qualification-check-icon"
              text="Does the company conduct banking within state?" />
              Requirements to obtain or a Foreign Qualification / Certificate of Authority:
            <div className='foreign-qualification-check-div'>
              <Check anotherclass="foreign-qualification-check" icon textclass="foreign-qualification-check-text"
                iconclass="foriegn-qualification-check-icon"
                text="Must file appropriate state document and pay the corresponding state fee." />

              <Check anotherclass="foreign-qualification-check" icon textclass="foreign-qualification-check-text"
                iconclass="foriegn-qualification-check-icon"
                text="Must obtain a Certificate of Good Standing from state of origin to verify status of business formation." />
            </div>
          </>}
          component={<EntityTypeSection type state Heading="Tax Exemption of US Marketplace" 
          stateOrign/>} />
      </Container>


      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Filing Your Foreign Qualification</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="When Should I File for My Certificate of Authority?"
            texta="You must submit a registration in a state at least 20 days before conducting any business. This allows time for paperwork to be completed and the Certificate to be issued by state authorities."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="What Do I Need To Provide in Order To File?"
            texta="Many states require a copy of your formation documents and a Certificate of Good Standing from your home (domestic) state where you incorporated. You’ll also be asked to pay fees required by each state you are seeking the right to conduct business. Keep in mind that once you “do business” in a state, you become responsible for meeting their requirements, such as the need to file annual information reports with the state."
           
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does It Cost To File a Foreign Qualification?"
            texta="The cost depends on the fee to obtain a Certificate of Good Standing and the filing fee that the inbound state assesses. Our service fee to prepare and file a Foreign Qualification is $149. To review the fee in your state click on the “order now” button and select the state and entity type." />
          <FAQSection faqclass="faq-llc-div"
            heading="How Long Does It Take To File a Foreign Qualification?"
            texta="The filing time is dependent on the governing state agency and varies by state. Multiple steps are involved in filing, so your timely response to needed documentation is helpful. Most of the states will expedite the filing for an additional fee."
          />
           <FAQSection faqclass="faq-llc-div"
            heading="How Do I Obtain a Certificate of Good Standing?"
            texta="This document is obtained by contacting the Secretary of State. GYB Firm will complete this request when you file with our service. It is provided to verify that you are in compliance with tax and government requirements in that state."
          /> <FAQSection faqclass="faq-llc-div"
          heading="What Will I Receive When the Foreign Qualification Is Filed?"
          texta="The governing state agency will typically return a copy of the filed articles which are then mailed to you immediately."
        />
        </div>
      </center>
      <Container>

      <AboutCompany
          changeimage1={Image8}
          changeheading1="Amendment"
          changetext1="Filed if a company requires changes to membership, addresses or company name."
          changemore1="Learn More"
          changeimage2={Image9}
          changeheading2="Dissolution"
          changetext2="Used to formally terminate the existence of a entity."
          changemore2="Learn More"
          changeimage3={Image10}
          changeheading3="Foreign Qualification"
          changetext3="Filed when you need to expand your entity to new states."
          changemore3="Learn More"
          changeimage4={Image11}
          changeheading4="Foreign Qualification"
          changetext4="Filed when you need to expand your entity to new states."
          changemore4="Learn More"
          complianceimage1={Image12}
          complianceheading1="File Annual Report"
          compliancetext1="The majority of states require that companies file periodic reports that affirm the current information of the companies members, directors, and business address."
          compliancemore1="Learn More"
          complianceimage2={Image13}
          complianceheading2="Certificate of Good Standing"
          compliancetext2="Required by governmental and private agencies to validate a companies status in order to facilitate specified transactions. "
          compliancemore2="Learn More"
          complianceimage3={Image14}
          complianceheading3="Business License Search"
          compliancetext3="Determine all business licenses and permits required at the federal, state, county, and municipal level."
          compliancemore3="Learn More"
          agentimage1={Image15}
          agentheading1="Order Registered Agent"
          agenttext1="Order registered agent service and receive your new registered agent information immediately."
          agentmore1="Learn More"
          agentimage2={Image16}
          agentheading2="Renew Registered Agent"
          agenttext2="Click here if you have existing registered agent service and would like to renew it. "
          agentmore2="Learn More"
          agentimage3={Image17}
          agentheading3="Business License Search"
          agenttext3="Use to update the registered agent on file with the state of formation."
          agentmore3="Learn More"
          fillingimage1={Image18}
          fillingheading1="File Business Taxes"
          fillingtext1="Order registered agent service and receive your new registered agent information immediately."
          fillingmore1="Learn More"
          fillingimage2={Image19}
          fillingheading2="Renew Registered Agent"
          fillingtext2="Click here if you have existing registered agent service and would like to renew it. "
          fillingmore2="Learn More"

        />

      </Container>
    </>
  )
}

export default ForeignQualification