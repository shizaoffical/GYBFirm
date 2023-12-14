import React from 'react'
import HeroSection from '../../../Home/HeroSection';
import Image1 from "../../../Images/Image/Andement Sent.png"
import Image2 from "../../../Images/Icons/PNG/43.png";
import Image3 from "../../../Images/logo/Logo-2.png";
import Image from "../../../Images/logo/Logo-1.png"
import { Container } from 'react-bootstrap';
import ImageMind from '../../../Components/ImageMind';
import Image4 from "../../../Images/Image/Img-41.png"
import Image5 from "../../../Images/Image/Img-63.png"
import Image6 from "../../../Images/Image/Img-2.jpg"
import BlueTextElement from '../../../Header/DropDownElements/BlueTextElement';
import TickSection from '../../../Components/TickSection';
import Check from '../../../Components/Check';
import Heading from "../../../Components/Heading"
import EntityTypeSection from '../../../Components/EntityTypeSection';
import FAQSection from '../../../Components/FAQSection';
import RatingCompanies from '../../../Components/RatingCompanies';
import Text from '../../../Components/Text';
import MainButton from '../../../Components/MainButton';

function CompanyNameChange() {
  return (
    <>

      <Container>
        <HeroSection heading="File Articles of Company Name Change"
          heroImage={Image1}
          text="This is how you can change your LLC's name, address or information about its members."
          btntext="File Articles of Amendment"
          Gybfirmtext={<>Join the <span className='fw-bold'>1,000,000+ </span> businesses that have chosen
            <span className='fw-bold'> GYB Firm.</span> </>}

          GybfirmImage={Image2}
          trustedimage={Image3}
          trustedheading="US Fastest-Raising Companies"
          trustedrating="51319 rating"
          ratingclass="d-none"
        />
        {/* 1 */}
        <ImageMind heading="What in meant by Articles of Amendment?"
          text={<>When a business makes a big change to the rules they first made when starting, they must file Articles of Amendment.
            As a group, you are always changing, moving and getting better. This means you will need to adjust some important parts of your business. That's where changes to legal documents (Articles of Amendment) come in.</>} Image={Image4}
          anotherImgClass="andement-row-a-image" anotherClass="andement-row-a" colclass="andement-row-col" />
        {/* 2 */}
        <ImageMind heading="When Should I file Articles of Amendment?"
          text={<>If you make changes to your  
          <BlueTextElement text=" LLC, " path="/llc"/>
          <BlueTextElement text="C Corp, " path="/form-c-corporation"/>
          <BlueTextElement text="S Corp, " path="/form-s-corporation" />
          <BlueTextElement text="Nonprofit " path="/start-a-nonprofit" />
            you need to tell the Secretary of State by filing Articles of Amendment
            <div>
              <TickSection text="Buisness Address" />
              <TickSection text="Business Name" />
              <TickSection text="Stated business activities" />
              <TickSection text="Registered Agent" />
              <TickSection text="Member information" />
              <TickSection text="Number of authorized shares" />
            </div></>} Image={Image5}
          anotherImgClass="andement-row-a-image" anotherClass="andement-row-b" colclass="andement-row-col" />
        {/* 3 */}

        <ImageMind heading="Why is it necessary to tell SOS?"
          text={<>If you don't update your business information, you may have to pay fines or penalties.<br /><br />
            You should tell the government if anything has changed, so that you are still considered good. Not fulfilling this responsibility may be interpreted as apathy, which has the potential to damage the positive reputation established by the Articles of Organization at the business's commencement.<br /><br />

            The government needs to have a way to know who to send important letters to. It's important to keep your information, like your Registered Agent, up to date.</>} Image={Image6}
          anotherImgClass="andement-row-c-image" anotherClass="andement-row-a" colclass="andement-row-col" />
        {/* 4 */}
        <div className='andement-number'>
          <Heading heading="How to File Articles of Amendment" />
          <div className='andement-number-div'>
            <Check number="1" heading="Figure out the Right Form Required"
              text="Usually, your state will give you this. Check that you don't have a form that is easier or less expensive to file. In some places, there's a different form just for changing your Registered Agent. It usually costs less than changing other important information about your company. Before you start, find out what your state needs."
               iconclass="llc-check-icon"/>
            <Check number="2" heading="Complete the Form of Amendment"
              text="A standard form is a document that has information about your business, such as its name, where it is located, and the date. It also has a section where you can change or update certain parts of the document, but the rest of it stays the same. You will also need people's names written by their own hands. If you don't give all the required information, your change request might not be accepted."  iconclass="llc-check-icon" />
            <Check number="3" heading="Submit the form and pay the necessary filing fee to the State"
              text="It depends on the state whether you can do it online or have to go in person. It usually costs $100-$200, but if you're a nonprofit company, you may pay less." iconclass="llc-check-icon"/>
            <Check number="4" heading="File Repeated Articles of Organization or Consolidation  "
              text="After you submit the changes, you might need to create new papers that show the updated information. Although it's not necessary, grouping your documents together can make everything more organized and simple."  iconclass="llc-check-icon"/>
          </div>
        </div>

        {/* 5 */}
        <ImageMind heading="We Make it Simple to File" anotherClass="andement-row-d" colclass="andement-row-col"
          text={<>We get it. Running a business takes time, cash and parts of mental vitality.<br />
            GYB Firm provides speedy and reasonably-priced assistance with filling out and submitting documents, so that you don't have to worry about your Articles of Amendment anymore. Life is limited, so why waste it on filling out paperwork.<br />
            Fill out our form with your business type and state, and order what you need. We are responsible for the rest.</>}
          component={<EntityTypeSection Heading="Amendment" state type />} />

        {/* 6 */}
      </Container>

      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Filing Articles of Amendment</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How Long Does It Take to Alter a Company Title?"
            texta="The filing time for Articles of Amendment typically takes four to six weeks, depending on the governing state agency. For example, in California, the process takes over eight weeks. In Texas, it may take just three to five business days. Many states offer expedited service for an additional fee."
            textb="For the purpose of federal taxes, the IRS typically takes about six to eight weeks to register a change of business name."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Do I File Out-of-State Articles of Amendment?"
            texta="If you’re filing an amendment for a business that’s not in your home state, you’ll need to file a Foreign Amendment. These will require additional documentation by your state, including a Certificate of Good Standing."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does It Cost to File Articles of Amendment?"
            texta="Our service fee to file Articles of Amendment is $39, so your cost will be $39 + the fee in your state. State feels typically are around $100-$200, but if you're a nonprofit. "
            textb="To review the fee in your state, select the state and entity type above. "
            textc="Some states also offer expedited filing, which is an additional fee. " />
          <FAQSection faqclass="faq-llc-div"
            heading="Do I Need to Consult a Lawyer When Filing?"
            texta="An attorney isn’t necessary to file an amendment. That said, if you’re ever faced with a confusing business situation, it’s never a bad idea to consult a trusted legal professional to ensure you’re making the most educated decision you can."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="What Will I Receive When the Articles Are Filed?"
            texta="You’ll receive a copy of the articles once they’re filed. If you file with us, the governing state agency will return a copy to us. Then we’ll mail it to you for your records."
          />
        </div>
      </center>
      <Container>


        {/* 7 */}
        <center>
          <div className='testimonials-b'>
            <RatingCompanies image={Image} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon"
              rating="11,8176 rating" />
            <h1 className='faq-heading'>Ready to Make a Change?
              <Text text="Save the hassle. Let us file your LLC’s Articles of Amendment on your behalf." />
            </h1>
            <MainButton text=" Files Articles on Amendment" anotherclass="testimonials-b-btn"
              icon={<i className='fa-solid fa-arrow-right'></i>} />
          </div>
        </center>

      </Container>
    </>
  )
}

export default CompanyNameChange