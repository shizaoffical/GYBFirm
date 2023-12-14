import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../../Home/HeroSection'
import Image from "../../../Images/logo/Logo-1.png"
import Image1 from "../../../Images/Image/Img-57.png"
import ClientSay from '../../../Home/ClientSay';
import LargeText from "../../../Components/LargeText"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import FAQSection from '../../../Components/FAQSection';
import MainButton from '../../../Components/MainButton';
import RatingCompanies from '../../../Components/RatingCompanies';
import ClientsData from '../../../Components/ClientsData';
import Image3 from "../../../Images/Image/Client-Image.webp"
import Image5 from "../../../Images/logo/Logo-3.png";
import Image6 from "../../../Images/Image/Img-54.png";
import Image4 from "../../../Images/Icons/PNG/43.png";
import BuisnessInformation from '../../../Components/BuisnessInformation'
import EntityTypeSection from '../../../Components/EntityTypeSection'
import ServicesCheckSection from './ServicesCheckSection'

function ChangeRegisterAgent() {
  return (
    <>
      <Container>
        <HeroSection heading="Would You Like to Change Your Registered Agent?"
          heroImage={Image1}
          text={<>
            <dt className='opacity-100 text-black'>It's Easier, Simpler, and Faster to Change Your Registered Agent with GYB Firm</dt>
            Sometimes, situations come up where we need to change the person who is responsible for representing a company. Let GYB Firm help you save time and do the paperwork for you.</>}
          btntext=" Get Started "
          path="https://www.order.gybfirm.com/order"
          joinimage={Image4}
          jointext={<>Join the   <span className='fw-bolder'>1,000,000+</span>  businesses that have chosen GYB Firm.</>}
          trustedimage={Image5}
          trustedheading="More trusted, Verified Reviews"
          trustedrating="51319 rating"
         
        />

        <ClientSay text={<><img src={Image6} alt="" className='registration-agent-left-col-image'/></>}
          component={<>
            <LargeText heading="Why do we sometimes have to Change Who is Our Registered Agent?"
              text={<>Every business must choose a <BlueTextElement text="Registered Agent" />  when they register.<br/>
              A Registered Agent is a person or a company that is chosen to receive important legal papers for a business.
              </>}
            />


            <BuisnessInformation heading="There are several reasons why you might need to change your Registered Agent."
              li1="In the hurry to form a company, you chose to be your own Registered Agent, although we usually advise against it."
              li2="You are opening a new branch of your business in a different state."
              li3="There are problems with your current Registered Agent service."
              li4="The person who is responsible for accepting legal documents on your behalf is moving to a different state."

            />
            <LargeText
              heading="How can I replace or switch my Registered Agent?"
              text={<>
                To choose a new Registered Agent, you must complete a form called "Change of Registered Agent" in your state.<br /><br />

                The papers you need to fill out when you order something, the fee you have to pay, and the information you have to provide may be different depending on which state you are in. It is really important to follow the specific rules given by your Secretary of State.<br /><br />

                You have to complete a specific form for your state (or other forms mentioned, if needed) and send them along with any necessary payment.<br />

                It may be hard and scary, but GYB Firm is here to assist you.
              </>} />



            <LargeText heading="What happens if I don't choose or inform of a new Registered Agent?"
              text={<>Every LLC and corporation must choose a Registered Agent when they register with their state government.<br /><br />
                If you don't do this, the state will not be happy with you and you will have to pay a lot of money.<br /><br />
                If you don't tell the Secretary of State when you switch your Registered Agent, you may have to pay fines. And your business license, the ability to make legal contracts, and access to the state court system could all be taken away.
                <br />
                <BlueTextElement text=" Reinstatement" />proceedings may lead to more financial and legal difficulties.
              </>} />
            <LargeText heading="Need Assistance with Filing Your Request to Change your Registered Agent?"
              text={<>To change <BlueTextElement text="Registered Agents," /> you need to fill out and submit a form to update their information<br /><br />
               This paperwork will let you change the company that represents you legally and choose a different one instead.
                <br /><br />
                Do you want help with changing your Registered Agent. Or would you like someone to handle the change and continue providing Registered Agent service.<nr /><br />
                In any case, GYB Firm can help you save time and reduce stress by handling the paperwork for changing agents.

              </>} />
            <LargeText heading="Can I change my registered agent if I change the type of my business?"
              text={<>
              No, not possible. Any company can choose to replace their Registered Agent.<br />
              If your business is a certain type like a C Corp, S Corp, LLC, or limited liability partnership, GYB Firm can help you with any changes you need to make. This way, you can put your focus on more important tasks.<br />
              </>}
            />
          </>} />


        <center className='my-5'>
          {/* <h1 className='about-us-div-b-heading mb-5'>Change Your Registered Agent</h1> */}
          <EntityTypeSection type state Heading="Change Your Registered Agent"/>
        </center>



        <ServicesCheckSection
          heading="Why Change Your Registered Agent Service Provider to GYB Firm?"
          chechheading1="As it were $119 Every year (Less Than Other Suppliers)"
          chechheading2="Master Dealing with of All of Your Reports"
          chechheading3="Programmed Mail Sending"
          chechheading4="Custom fitted SMS and Mail Notices"
          chechtext1={<>Productive, low-cost Enlisted Operator benefit for as it were $119 yearly. No subtle annually memberships or covered up expenses.</>}
          chechtext2="Always-available Enlisted Operators prepared to get state and IRS mail correspondence, archives and lawful procedures on your business’s sake."
          chechtext3="Basic, intuative and present day. The most excellent client encounter makes enterprise simple"
          chechtext4="Get all your lawful correspondence, documentation and data carefully transferred to your dashboard and consequently sent on to you."
        />

      </Container>

      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Filing a Change of Registered Agent</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does It Cost to File a Change of Agent?"
            texta="Our service fee to change the agent is $49. You'll also need to pay the state fee, which varies based on where your business was formed."
            textb="To review the fee in your state click on the “order now” button and select the state and entity type."

          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Any Hidden Costs?"
            texta="No! We pride ourselves on transparency. There are absolutely no hidden costs associated with you changing your Registered Agent."

          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Specific Rules for My State?"
            texta="You’ll always need to fill out a “Change of Registered Agent” form, but the processing fee and the information needed varies by state - which is why it pays to work with GYB Firm." 
            textb={<> Check out <BlueTextElement text=" everything you need to know about Registered Agents " />and make sure to explore your state’s specific information. </>}/>
         
          <FAQSection faqclass="faq-llc-div"
            heading="How Long Does it Take to File for a Change of Agent?"
            texta={<>In some states, you can complete it in as little as an hour.</>}
          />
          <center>
            <MainButton text="More questions" path="/term&conditions" anotherclass="faq-btn" />
          </center>

        </div>
      </center>


      {/*  */}
      <Container>
        <center>
          <div className='testimonials-b'>
            <RatingCompanies image={Image} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon"
              rating="11,8176 rating" />
            <h1 className='faq-heading'>Loved by 1,000,000+ Entrepreneurs Across All 50 State </h1>
          </div>
        </center>

        <div className='clients'>
          <ClientsData heading="Ruby B." time="years ago" state="MS, UNITED STATES"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image3} />
          <ClientsData heading="Ruby B." time="years ago" state="MS, UNITED STATES"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image3} />
          <ClientsData heading="Ruby B." time="years ago" state="MS, UNITED STATES"
            about="Always easy, always fantastic. Used this company for over 5 years. Thanks for a great company." image={Image3} />

        </div>

        {/* 7 */}
        <center>
      <div className='testimonials-b'>
            <RatingCompanies image={Image} heading="More trusted, Verified Reviews" anotherclass="trust-pilot-excellence-a-icon"
              rating="11,8176 rating" />
          <h1 className='faq-heading'>Change Your Registered Agent Now
        </h1>
          <MainButton text=" Get Started" anotherclass="testimonials-b-btn"
          icon={<i className='fa-solid fa-arrow-right'></i>}/>
      </div>
    </center>

      </Container>
    </>

  )
}

export default ChangeRegisterAgent