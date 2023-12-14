import React from 'react'
import HeroSection from '../../../Home/HeroSection'
import { Container } from 'react-bootstrap'
import Image1 from "../../../Images/Image/Img-69.png"
import Image2 from "../../../Images/Image/Img-71.png"
import Image4 from "../../../Images/Image/Img-65.png"
import Image6 from "../../../Images/Icons/PNG/5.png"
import Image7 from "../../../Images/Icons/PNG/6.png"
import Image8 from "../../../Images/Icons/PNG/3.png"
import ImageMind from '../../../Components/ImageMind'
import BlueTextElement from '../../../Header/DropDownElements/BlueTextElement'
import MainButton from '../../../Components/MainButton'
import Text from '../../../Components/Text'
import FAQSection from '../../../Components/FAQSection'
import ClientSay from '../../../Home/ClientSay'
import ThumbNail from "../../../Images/Image/Img-72.png"
import video from "../../../Images/video/Corporation.mp4"
import Card3 from '../../../Components/Card3'
import BuisnessInformation from '../../../Components/BuisnessInformation'
import Check from '../../../Components/Check';
import LargeText from '../../../Components/LargeText'

function SCropElection() {
  return (
    <div>
      <Container>
        <HeroSection heading="Prepare and File an S Corporation Tax Election with Form 2553"
          heroImage={Image1} anotherimgclass="hero-section-image-llc"
          text="Reduce the Tax You Pay by Having Your LLC Treated as an S Corp for Tax Purposes"
          btntext="File S Crop Election"
          path="/form-s-corporation"
        />




        <ClientSay text={<><img src={Image2} alt="" className='registration-agent-left-col-image' /></>}
          component={<>
            <LargeText
              text={<>
                If you want to reduce the amount of tax you pay on your LLC earnings, <BlueTextElement text=" an S Corporation Tax Election (form 2553)" /> is a necessity. This tax election tells the Internal Revenue Service to tax your LLC business as an S Corporation, which could reduce the amount of income on which you need to pay self-employment tax (including Social Security, Medicare and FICA). This can substantially reduce your tax bill with only a slight increase in administrative overhead for you and your accountant.
                <video controls className="client-say-youtube dissolve-company-video mt-4 mb-0" poster={ThumbNail} >
                  <source src={video} type='video/mp4' />
                </video>
              </>}
            />
            <MainButton text="File With GYB Firm" anotherclass="testimonials-b-btn" icon={<i className='fa-solid fa-arrow-right' />} />
          </>} />


        <ImageMind heading="How LLCs Are Normally Taxed" anotherClass="andement-row-d" colclass="andement-row-col"
          text="When it comes to the amount of tax you owe the federal and state government, your income from an LLC is normally taxed similarly to that of sole proprietorship businesses. For a small, one-person LLC, this typically works as follows."
          component={<><BuisnessInformation
            li1="Your business earns revenue"
            li2="You deduct any allowable business expenses"
            li3="The amount remaining is your business profit, which you pay to yourself"
            li4="You pay self-employment tax of around 15 percent on any profits"
            li5="You pay federal tax at various income bands on any profits"
            li6="You pay state tax on any profits"

          />
            <Check icon2 text="An S Corporation Tax Election reduces the amount of tax you pay in step 4, self-employment tax. It has no impact on any other taxes."
              iconclass='fa-solid fa-xmark ' anotherclass="d-flex align-items-center gap-2" />
            <br />
            <BlueTextElement text="Go To Our S Corporation Tax Calculator" icon />
          </>
          }
        />


        <ImageMind heading="Assigning a Fair Salary" text=" One important part of the S Corporation Tax Election is that you must pay yourself a fair salary, which the IRS defines as “reasonable compensation.” If you do not, the IRS could audit you and levy taxes and penalties. For example, you cannot pay yourself a salary of $10,000 and take $80,000 in distributions. When it comes to setting a fair salary, look at what full-time roles similar to yours are paying someone with similar expertise and experience, and use that as a baseline. Speak with your accountant or attorney for more information" Image={Image4} />







        <div className='virtual-address-row'>
          {/* section a */}

          <div className='virtual-address-row-div'>
            <LargeText heading="Administrative Overhead Of the S Corporation Election"
              text="Because it can reduce your tax burden by such a substantial amount, the S Corporation Tax Election is a good idea for most LLC owners. But it’s important to understand the additional overhead this might create for you, your business and your accountant." />
            <div className='s-crop-election-col'>
              <Card3 Image={Image6} heading="Setting up monthly payroll" anotherclass="virtual-address-row-check"
                text="You will need to set up a monthly payroll where you  pay yourself and also submit your payroll taxes" />
              <Card3 Image={Image7} heading="Additional accounting fees" anotherclass="virtual-address-row-check"
                text="Your accountant will need to file your taxes in a slightly different way, which may increase your accounting fees" />
            </div>
            This will likely be more than counterbalanced by the money you save in tax payments.
          </div>
          {/* section b */}
          <div className='virtual-address-row-div'>
            <LargeText heading="How to File Your S Corp Tax Election"
              text={<>are a couple of ways you can file form 2553
                <dt className='text-black'>File Form 2553, S Corporation Tax Election Yourself</dt>
                If you want to complete the filing process yourself here are the steps you need to follow
              </>} />
            <Check number="1" anotherclass="s-crop-election" numberclass="andement-number-component-number"
              text="Go to the Internal Revenue Service website" />
            <Check number="2" numberclass="andement-number-component-number" anotherclass="s-crop-election"
              text="All paper mail is scanned and uploaded to a secure, private portal where you can read and review correspondence at your convenience." />
            <Check number="3" anotherclass="s-crop-election" numberclass="andement-number-component-number"
              text="Download form 2553" />
            <Check number="4" numberclass="andement-number-component-number" anotherclass="s-crop-election"
              text="Gather the required information for form 2553 and fill it in" />
            <Check number="5" anotherclass="s-crop-election" numberclass="andement-number-component-number"
              text="Send the form back to the IRS, typically by mail or fax" />
            <Check number="6" numberclass="andement-number-component-number" anotherclass="s-crop-election"
              text="Wait for notification of acceptance of your tax election" />

          </div>

        </div>



        <center>
          <div className='testimonials-b'>
            <h1 className='faq-heading'>Have GYB Firm File on Your Behalf
              <Text text="Alternatively, GYB Firm can take care of your S Corporation Tax Election for you. Just order the service below and we’ll collect all the information we need. We deal with all the forms and filing on your behalf. It’s fast, simple and hassle-free." />
            </h1>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <Card3 Image={Image8} heading="Use anytime" anotherclass="virtual-address-row-check"
                text={<>You can take advantage of our service when you first
                  <BlueTextElement text=" incorporate your business" />  or at certain times after that.</>} />
            </div>
            <MainButton
              path="/form-s-corporation" text="File S Crop Election" icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="testimonials-b-btn" />
          </div>
        </center>


      </Container>

      <center>

        <div className='faq-main faq-llc container-fluid'>
          <center className='text-center'>
            <LargeText heading="Help File My LLC S Corporation Tax Election"
              text={<>
                <dt className='text-black'>Save your time, we’ll handle the paperwork</dt>
                We provide a complete S Corporation Tax Election service to register and file your LLC tax status with the IRS on your behalf. Just place an order and we’ll collect the right information to guide you through the process, and the IRS will notify you of your updated tax status.
              </>} />
              <center>
                 <MainButton
                   path="https://www.order.gybfirm.com/order" text="File Now! " anotherclass="testimonials-b-btn" icon={<i className='fa-solid fa-arrow-right'></i>}/>
              </center>
          </center>

          <h1 className='faq-heading'>Common Questions About Filing Your S Corporation Tax Electionp</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="Does filing form 2553 remove any LLC protections?"
            texta="Yes! With our $39 S Corp formation package, you only pay the fees required by your state. GYB Firm’s filing services are free."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How much could I save by being treated as an S Corporation for tax purposes?"
            texta={<>You could save yourself thousands of dollars a year. We’ve got a
              <BlueTextElement path="/" text=" handy calculator " />that shows you exactly how much you could reduce your self-employment tax burden.</>}
          />
          <FAQSection faqclass="faq-llc-div"
            heading="Do I have to file my S Corporation Tax Election at a certain time?"
            texta={<>Yes. There are certain limitations on when you can file form 2553.
              <BlueTextElement path="/" text="  This article " /> gives you all the details you need.</>} />
          <FAQSection faqclass="faq-llc-div"
            heading="Can I file an S Corporation Tax Election if there are more owners in the business?"
            texta="Yes. S Corporation Tax Elections are available to most LLCs. For more information, speak to your accountant or attorney."
          />
        </div>
      </center>
    </div>
  )
}

export default SCropElection