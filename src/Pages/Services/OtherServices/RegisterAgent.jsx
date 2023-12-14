import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../../Home/HeroSection'
import Image from "../../../Images/logo/Logo-1.png"
import Image1 from "../../../Images/Image/Img-44.png"
import Image2 from "../../../Images/Icons/PNG/43.png";
import ThumbNail from "../../../Images/Image/Img-42.png"
import ClientSay from '../../../Home/ClientSay';
import video from "../../../Images/video/Corporation.mp4"
import LargeText from "../../../Components/LargeText"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import FAQSection from '../../../Components/FAQSection';
import MainButton from '../../../Components/MainButton';
import RatingCompanies from '../../../Components/RatingCompanies';
import Text from '../../../Components/Text';
import ClientsData from '../../../Components/ClientsData';
import Image3 from "../../../Images/Image/Client-Image.webp"
import Image5 from "../../../Images/Image/Img-2.jpg"
import ServicesCheckSection from './ServicesCheckSection'


function RegisterAgent() {
  return (
    <>
      <Container>
        <HeroSection heading="Get a Cheapest Registered Agent Service for the First Year"
          heroImage={Image1}
          text={<>
            <dt className='opacity-100 text-black'>When You Start Your Business with GYB Firm</dt>Don't stress about handling your business's paperwork by yourself. Instead, hire a reliable and affordable Registered Agent to do it for you.</>}
          btntext="Start My Business" path="https://www.order.gybfirm.com/order"
          Gybfirmtext={<>Join the <span className='fw-bold'>1,000,000+ </span> businesses that have chosen
            <span className='fw-bold'> GYB Firm.</span> </>}
          GybfirmImage={Image2} />
        <ClientSay 
        text={<><img src={Image5} alt="" className='registration-agent-left-col-image' /></>}
          ThumbNail={ThumbNail}
          video={video} anotherclass="register-agent-video-section"
          component={<>
            <LargeText heading="Do I Need a Registered Agent for my Business?"
              text={<>
                Yes Every company or organization must have an official person called a Registered Agent in every state where it operates. This person can also be referred to as a statutory agent, resident agent, or agent for service of process.<br />
                A Registered Agent is like a permanent address for you in the state. It's where the state government can send you important legal and tax information, such as forms for taxes and lawsuits, as well as annual report forms that you are required to submit. Find out more about   <BlueTextElement text="Registered Agents"
                  path='/registered-agent' />
                and why you should have one by reading this information.

              </>}
            />

            <LargeText heading="Why should You Use a Registered Agent Service?"
              text={<>
                Registered Agent services provided by GYB Firm help you avoid the trouble and inconvenience of handling all your own paperwork from the state.<br />
                They also help protect your privacy by creating a separate public address for your business, which is different from your home address.<br />
                When you use a Registered Agent service, any important legal or tax letters will be sent to your personal and private contact address. GYB Firm's Registered Agent service can assist you in meeting important deadlines, like submitting annual reports, to ensure your business remains in good standing.<br />
                A reliable Registered Agent service can assist you in promptly taking action if you are sued, prevent you from missing important deadlines, facing fines or penalties for not following rules, and handle the paperwork details while you concentrate on running your business.<br />
              </>} />
            <LargeText heading="Why does GYB Firm give a Cheap Registered Agent Service?"
              text={<>
                When you start a business with GYB Firm, they will provide you with Cheapest LLC and other business formation services. Furthermore, a Cheap Registered Agent will be included in their offer for the first year.Our approach differs from that of other companies specializing in business startups, as we don't attempt to find methods to force you to purchase additional products and services.<br />
                We think that people like you who start businesses are the reason our economy gets bigger. Entrepreneurs make new and useful things to improve and create positive change, and we support them.<br />
                We have special deals like our $39 business formation for Registered Agent with incorporation because our clients are loyal to us. Loyalty helps us expand our business and improve our technology processes, so that we can provide you with the best value.<br />
              </>} />
            <LargeText heading="Diminish Your Workload Employing a Enlisted Operator Benefit"
              text={<>
                You can save time and avoid stress by having GYB Firm handle your paperwork. They charge less than other providers.<br />
                Prevent late deadlines, burdensome paperwork, failure to meet rules, and the resulting financial punishments. Prepare yourself for success and create more time to concentrate on what is important to you — your business.

              </>}
            />
          </>}
        />


        <ServicesCheckSection
          heading="Why Should You Choose GYB Firm's Registered Agent Service?"
          chechheading1="Cheap Registered Agent for the First Year"
          chechheading2="Expert Effectively Managing all your Paperwork"
          chechheading3="Automatic Mail Forwarding"
          chechheading4="Custom-Made E-mail and SMS Notices"
          chechheading5="Advanced, Basic and Personalized Dashboard"
          chechheading6="Never Any Covered up Expenses or Contracts"
          chechtext1="Get a cheap Registered Agent service for your LLC, nonprofit, or corporation when you start it with GYB Firm. You will need to pay $119 annually after the first year."
          chechtext2="We have reliable Registered Agents who are always there to receive important mail and legal documents from the state and IRS for your LLC or corporation."
          chechtext3="Receive all your legal letters, documents, and information on your digital dashboard and get them sent to you directly."
          chechtext4="You will get text and email alerts whenever we receive documents for your business. You can access these alerts from your dashboard."
          chechtext5="Get everything you need for your business in one convenient place when you start your business with GYB Firm. You can easily access, save, and find the information we have received for your business whenever you want."
          chechtext6="Advantage from the finest client involvement coupled with unequaled esteem for your cash. No other joining master gives you more for less."

        />

      </Container>
      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Registered Agent Services</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does a Registered Agent Cost?"
            texta="Cheap Registered Agent is free for the first year when you sign up with GYB Firm, regardless of what package you choose."
            textb={<> <BlueTextElement text="after the first year is $119 annually (with no obligation and no contract)." />   after the first year is $119 annually (with no obligation and no contract).</>}
          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Any Hidden Costs?"
            texta="No, we like to be open and honest. GYB Firm’s Registered Agent Service does not have any extra or hidden fees."

          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Time Does it Take to Hire a Registered Agent?"
            texta={<>It hardly takes any time. To set up a Registered Agent, just select GYB Firm as your Registered Agent and fill out our  <BlueTextElement text="easy online order form." />  </>}
             />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There any Rules that Only Apply to Certain States?"
            texta="The rules for Registered Agents are the same in all states and include:"
            textb="A Registered Agent must be at least 18 years old or older."
            textc="They need to have a real address in the right state where they can get mail, packages, and legal documents during regular business hours. PO boxes and virtual offices don't count."
            textd="Usually, you need to choose a Registered Agent in any state where you want to do business."
            texte="Many states allow businesses to serve as Registered Agents for other businesses."
            textf={<>But, there are only a few rules that apply to specific states. Learn more about the  <BlueTextElement text=" specifics of Registered Agents in New York" /></>} />
          <center>
            <MainButton text=" More questions" anotherclass="faq-btn" path="/term&conditions"/>
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
            <RatingCompanies image={Image} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon"
              rating="11,8176 rating" />
            <h1 className='faq-heading'>Get Your Registered Agent Now
              <Text text="Set Yourself Up for Success with GYB Firm" />
            </h1>
            <MainButton text=" Get Started" anotherclass="testimonials-b-btn"
              icon={<i className='fa-solid fa-arrow-right'></i>} />
          </div>
        </center>
      </Container>

    </>


  )
}

export default RegisterAgent