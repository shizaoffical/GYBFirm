import React from 'react'
import { Container } from 'react-bootstrap'
import ClientSay from '../../../Home/ClientSay';
import LargeText from "../../../Components/LargeText"
import AnouncementSection from '../../../Components/AnouncementSection'
import EntityTypeSection from '../../../Components/EntityTypeSection';
import ImageMind from '../../../Components/ImageMind'
import FAQSection from '../../../Components/FAQSection'
import AboutCompany from './AboutCompany'
import Image2 from "../../../Images/Image/Img-73.png"
import Image4 from "../../../Images/Icons/PNG/67.png";
import Image6 from "../../../Images/Icons/PNG/66.png";
import Image7 from "../../../Images/Icons/PNG/8.png";
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
import Text from "../../../Components/Text"
import MainButton from '../../../Components/MainButton'



import Check from '../../../Components/Check';
import VSB from '../../../Components/VSB';
function GetTradeMark() {
  return (
    <>
      <Container>
      <center >
          <div className='testimonials-b'>
            <h1 className='faq-heading'>Register a Trademark
              <Text text="Only $39 + Filing Fee*" />
              <center>
                 <MainButton text="Get Started" path="https://www.order.gybfirm.com/order" anotherclass="testimonials-b-btn" icon={<i className='fa-solid fa-arrow-right'></i>}/>
              </center>     
            </h1>
          </div>
        </center>

        <ClientSay text={<><img src={Image2} alt="" className='registration-agent-left-col-image'/></>} 
          component={<>
            <LargeText
              heading="Protect your business name with a trademark"
              text="Protecting your trademark can really pay dividends. Not only is it a valuable property asset, but it’s also your brand, your reputation. The reputation you have established is associated with these different brand elements - your name, logo, and tagline - and the reason why people buy from you." />
            <AnouncementSection
              text="It’s important to take steps to protect these company assets. Our partnered attorneys will do the research to make sure the mark isn't already taken, ensure the filing gets accepted by the government office, and provide sound legal advice throughout the entire process."
              icon={<i className='fa-solid fa-share'></i>}
              anotherclass="virtual-address-annountcement" />
          </>} />

      </Container>

      <Container>
        <ImageMind heading="Help with trademark registration" anotherClass="andement-row-d" colclass="foreign-qualification-check-col"
          text={<>
            <dt className='fw-bold text-black mb-2 fs-5'>What’s included in the package?</dt>
            <div className='foreign-qualification-check-div'>
              <Check anotherclass="foreign-qualification-check" icon textclass="foreign-qualification-check-text"
                iconclass="foriegn-qualification-check-icon"
                text="Legal counsel from an experienced trademark attorney" />

              <Check anotherclass="foreign-qualification-check" icon textclass="foreign-qualification-check-text"
                iconclass="foriegn-qualification-check-icon"
                text="Legal counsel from an experienced trademark attorney" />
            </div>
            <Check anotherclass="foreign-qualification-check" icon textclass="foreign-qualification-check-text"
              iconclass="foriegn-qualification-check-icon"
              text="The preparing and filing of a trademark application" />
          </>}
          component={<EntityTypeSection Heading="Register a Trademark" />} />
      </Container>




      <VSB
        Image1={Image4}
        Image2={Image6}
        Image3={Image7}
        heading="Trademark Searches & Registration: How it works?"
        heading1="Tell us what you need"
        heading3="We get to work"
        heading2="We will file your trademark with the Patent and Trademark office"
        text1="A trademark attorney will follow up with you to get a better understanding of your needs and provide guidance on how the process works."
        text2="The trademark attorney will conduct a trademark search to ensure the availability, then provide the search results along with a plan of action."
        text3="The attorney will file the trademark with the US Patent and Trademark office and deliver the approved trademark documentation." />


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
      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common questions about Registering a Trademark</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How broad is my trademark protection?"
            texta="This includes filing the trademark in one series and one class. Additional legal fees and filing fees will apply if you decide to file a trademark in more than one class."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="Can I cancel my order?"
            texta="You will be contacted within 5 business days by our agents. You can request a refund before this contact, or before substantive work on your application has begun, whichever is later."

          />
          <FAQSection faqclass="faq-llc-div"
            heading="How long will it take for my trademark to be filed?"
            texta="The preparation and filing of a Trademark Application take anywhere from 3-7 days once all information, logos, and specimens are received by our agents and you sign off on the application. In some instances, the process may take longer given the complexity of the mark." />
          <FAQSection faqclass="faq-llc-div"
            heading="What level of support can I expect through this process?"
            texta="Once you have submitted your business name or logo, an attorney will conduct the initial search and discuss the results via email or phone. The attorney will then prepare the filing application and submit to the United States Patent and Trademark Office. You will be able to track the approval status and contact us with any questions you may have while awaiting for the approval"
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How long will the Trademark process take?"
            texta="The Trademark approval times can vary based on a variety of factors. The USPTO is likely to repond in 3 - 4 months from the filing of the application. Despite the delayed approval time, you will be able to monitor the status of the trademark online as it's going through the approval process."
          />
        </div>
      </center>

<Container>
  <div className='get-trade-mark-announcement'>
  <AnouncementSection
              text="*For new trademark applications, GYB Firm.com charges a flat “Filing Fee” of $350 per class in addition to other fees. Government filing fees for filing a trademark application range from $250 to $350 per class. The $250 application type requires more precision and effort than the $350 application type, so in situations where your attorney uses the $250 application type, the remaining $100 is used to cover the additional labor for that application type."
              icon={<i className='fa-solid fa-share'></i>}
              anotherclass="virtual-address-annountcement" />

  </div>

</Container>
    </>
  )
}

export default GetTradeMark