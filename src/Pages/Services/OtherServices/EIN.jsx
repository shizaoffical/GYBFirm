import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../../Home/HeroSection'
import Image1 from "../../../Images/Image/Img-50-1.png"
import Image2 from "../../../Images/Image/About-Buisness-Section-B-Img-3.png"
import ThumbNail from "../../../Images/Image/Img-49.png"
import ClientSay from '../../../Home/ClientSay';
import video from "../../../Images/video/Corporation.mp4"
import LargeText from "../../../Components/LargeText"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import AnouncementSection from '../../../Components/AnouncementSection'
import EntityTypeSection from '../../../Components/EntityTypeSection';
import ImageMind from '../../../Components/ImageMind'
import BuisnessInformation from '../../../Components/BuisnessInformation'
import FAQSection from '../../../Components/FAQSection'
import AboutCompany from './AboutCompany'
import Image4 from "../../../Images/Image/Img-48-1.png"
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


function EIN() {

  return (
    <>

      <Container>
        <HeroSection heading="Federal Employer Identification Number (EIN) / Tax ID Number"
          heroImage={Image1}
          text="Understanding What, Where, When & Hows of Your Business EIN "
          btntext="Order Now" path="https://www.order.gybfirm.com/order" />

        <ClientSay text={<><img src={Image4} alt="" className='registration-agent-left-col-image' /></>} class="ein-section"
          component={<>
            <LargeText
              text={<>The SS4 form is needed to get an EIN (Employer Identification Number) from the IRS. This number is often called a Tax ID number. The EIN/Tax ID number is like a Social Security Number for your business. Usually, you need to open a bank account using the name of your business. You also need to correctly pay and keep track of the money given to your company's employees. GYB Firm will get your federal EIN number for you and send it to you by email within one work day.
                <video controls className="client-say-youtube dissolve-company-video mt-4 mb-0"
                 poster={ThumbNail} >
                  <source src={video} type='video/mp4' />
                </video>
              </>} />
            <AnouncementSection boldtext="What is an Employer Identification Number (EIN)?"
              text={<>
              The EIN, also called a "Tax ID number," is a special number for your business that is similar to a Social Security Number. It is used for federal taxes. Your EIN is a number that helps you with taxes for your business. It is usually needed to open a bank account for your business. It also helps you pay your employees correctly and keep track of their wages. Additionally, it helps your business build credit and maintain its legal status.
              </>}
              icon={<i className='fa-solid fa-share'></i>}
              anotherclass="virtual-address-annountcement" />
            <LargeText heading="Do You Need a Federal EIN for Your Business Entity?"
              text="Usually, unless you run a business by yourself without any employees or a separate legal entity for your business, you will need to obtain an EIN. Sometimes, if you have a single-owner LLC and its accounting is not complicated, you can use your own Social Security Number for taxes and to get paid by clients. Even small businesses can benefit from having an EIN. It acts as a tax ID for your company or organization. If your business isn't just you with no employees, you should get an EIN. If you have a single-member LLC and use basic accounting, you may be able to use your personal Social Security Number for taxes and getting paid by clients. However, even small businesses can usually gain advantages from using an Employer Identification Number (EIN) - the EIN acts as a tax identification number for your Limited Liability Company (LLC) or other company."
            />
            <BuisnessInformation heading="The following types of businesses should get an EIN:"
              li1="Partnerships: You need an EIN for both general partnerships and limited partnerships."
              li2="Multiple-member LLCs: are a kind of business entity that must have an EIN, even if they don't have any employees."
              li3="Single-member LLCs: If you want to hire people in the next year and have a business with only one owner, you need to get an EIN. Even if your small business doesn't have any employees and you can use your own Social Security Number for taxes, it's still a good idea to get an EIN (Employer Identification Number). This is because banks and lenders usually prefer using an EIN to work with you"
              li4="LLC taxed as a Corporation: If your LLC wants to be taxed like a Corporation, you will need to get an EIN if you choose to be treated as an S-Corporation for tax purposes."
              li5="Sole proprietorship with employees: If you have employees or plan to hire employees in the next year, you need to get an EIN even if you don't have an LLC or any other legal business entity."
            />
            <LargeText heading="Where & When You'll Use an EIN"
              text="You need your EIN for many things when running your business. You must use your EIN number for some tax forms. For example, when you file your business tax returns or fill out W9 forms for your clients (if you have a service business). You will also need it for managing payroll for your employees. You need your EIN to open a business bank account and request business loans. The reasons why you need a Social Security Number in your personal life are also the same reasons you need to use an EIN in managing your business."
            />
            <LargeText heading="How Do You Get an EIN? Apply for an EIN Online"
              text="Business owners can obtain an EIN by completing and submitting IRS Form SS-4. GYB Firm provides an easy way to apply for an EIN online, so you can get your EIN number fast and without any hassle. If you need to get an EIN (Employee Identification Number) in any state of the United States, like Texas, Florida, or Michigan, GYB Firm can get it for you within a day. You can easily apply for an EIN online through GYB Firm. We will get your federal tax ID electronically and send it to you by email within one day."
            />
            <BlueTextElement icon text="Apply for an EIN online to obtain your EIN number quickly" />

          </>} />
        <ImageMind heading="Help Obtain a EIN / Tax ID Number" anotherClass="andement-row-d" colclass="andement-row-col"
          text={<><dt className='fw-bold text-black mb-2 fs-5'>Don't waste time We will take care of the paperwork.</dt>If you want our help with applying for your Tax ID / EIN, just place an order. A person from GYB Firm will reach out to you to get the necessary details and complete the filing in your state of formation.</>}
          component={<EntityTypeSection Heading="TAX ID / EIN" text="$39" image={Image2} />} />
      </Container>
      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common questions about obtaining an EIN / Tax ID Number</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="Do I need an EIN to get a business account with a bank?"
            texta="Yes! In most cases, businesses other than DBA's need to provide an EIN along with the filed Articles of Organization or Incorporation to open an account."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="When do I need to change my EIN?"
            texta="If you have an EIN and something about your business changes, you may have to apply for a new number. Here are some situations in which a new number is needed:"
            textb="A person buys or inherits a business and runs it by themselves."
            textc="A business that is owned by one person can become a different type of business entity, such as a Limited Liability Company (LLC), Corporation, or Partnership."
            textd="A business that is working together turns into a different type of business like a limited liability company, corporation, or owned by one person only."
            texte="A company becomes a different type of business: either a limited liability company, a partnership, or a business with a single owner."
            textf="An LLC can become a corporation, partnership, or sole proprietorship."
            textg="When the person who owns a business dies, their belongings and control of the business are passed on to someone else."

          />
          <FAQSection faqclass="faq-llc-div"
            heading="When will I receive my Federal Employer Identification Number?"
            texta="If someone wants to order an EIN for an existing business, we can get it and send it by email within one business day." />
          <FAQSection faqclass="faq-llc-div"
            heading="What is the SS4/EIN/Tax ID Number?"
            texta="The SS4 form is a document you need to fill out in order to get a special number from the IRS called an EIN or Tax ID number. The EIN/Tax ID number is like a Social Security Number for your business. It is usually necessary to open a bank account for the business and properly handle payments for employees' wages."
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

export default EIN