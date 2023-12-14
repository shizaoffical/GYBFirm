import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../../Home/HeroSection'
import Image1 from "../../../Images/Image/Img-2.jpg"
import ThumbNail from "../../../Images/Image/Img-53.png"
import ClientSay from '../../../Home/ClientSay';
import video from "../../../Images/video/Corporation.mp4"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import FAQSection from '../../../Components/FAQSection';
import Image5 from "../../../Images/logo/Logo-3.png";
import Image4 from "../../../Images/Icons/PNG/43.png";
import ImageMind from '../../../Components/ImageMind'
import Image2 from "../../../Images/Image/Img-54.png"
import LargeText from "../../../Components/LargeText"
import Image3 from "../../../Images/Icons/PNG/16.png"
import Image6 from "../../../Images/Image/Img-6.png"
import Check from "../../../Components/Check"
import VS from '../../../Components/VS'
import Text from "../../../Components/Text"
import MainButton from '../../../Components/MainButton'
function DoingBuisness() {
  return (
    <>

      <Container>
        <HeroSection heading="File a DBA or Fictitious Business Name"
          heroImage={Image1}
          text="If you want to do business using a name different from your own, you will most likely need a DBA. Luckily, GYB Firm can provide assistance."
          btntext="File DBA Today"
          trustedimage={Image5}
          trustedheading="More Trusted, Verified Reviews"
          trustedrating="51319 rating"
          joinimage={Image4}
          jointext={<>Join the   <span className='fw-bolder'>1,000,000+</span>  businesses that have chosen GYB Firm.</>}
        />

        <ClientSay heading="What Is a DBA?" text={<>
          A DBA is a name you register for your business that's not the same as its legal name.<br />
          DBAs are usually submitted to the office responsible for business registration in your state, such as the Secretary of State. If your business works in many states, you will probably have to file a DBA in each state. Do you want to make things easier for yourself? You can quickly file a DBA online with GYB Firm (more information below).
        </>}
          ThumbNail={ThumbNail}
          video={video} anotherclass="register-agent-video-section" />

        <ImageMind anotherClass="doing-buisness-image-mind" colclass="doing-buisness-image-mind-col" text={<>

          If you own a business by yourself or with someone else, you will probably need a DBA. That's because you haven't officially created a business or chosen a name for it yet. Unless you file a DBA, your business name will be your legal name.<br /><br />

          S and C corporations, LLCs, and limited partnerships usually do not require a DBA if they are satisfied with their official <BlueTextElement text="  business name" />. However, franchise owners sometimes choose to file a DBA to show that they are running a business within the franchise.<br /><br />

          Regardless of the type of business you are starting, it's important to <BlueTextElement text=" check with your state" />  for the correct procedures. Alternatively, you can opt for our DBA package and we'll take care of everything for you.</>} heading="Who Needs a DBA?" Image={Image2} />




          <LargeText heading="Other Terms for a DBA" 
            text={<>In case you decide to file a DBA on your own or in conjunction with us, it is possible to encounter alternative terms for DBA, including:
              <div className='doing-buisness-check'>
                <Check icon
                  anotherclass="doing-buisness-checkbox d-flex align-items-start justify-content-start"
                  iconclass="llc-check-icon"
                  headingclass="llc-check-head"
                  textclass="llc-check-para"
                  heading="Fictitious Business Name"
                /> <Check icon
                  anotherclass="doing-buisness-checkbox d-flex align-items-start justify-content-start"
                  iconclass="llc-check-icon"
                  headingclass="llc-check-head"
                  textclass="llc-check-para"
                  heading="Assumed Business Name"
                /> <Check icon
                  anotherclass="doing-buisness-checkbox d-flex align-items-start justify-content-start"
                  iconclass="llc-check-icon"
                  headingclass="llc-check-head"
                  textclass="llc-check-para"
                  heading="Trade Name"
                />
              </div>
            </>} />
 

        <ImageMind colclass="doing-buisness-image-mind-col" anotherClass="doing-buisness-image-mind-2" image={Image3}
          text={<><dt className='text-black '>Our DBA package gives business owners four important advantages that they should pay attention to.</dt></>} heading="Why File a DBA with GYB Firm?" Image={Image6} />





        <div className='doing-buisness-checkbox-section-2'>
          {/* <div className='doing-buisness-checkbox-section-2-row'> */}
            <Check icon
              anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
              iconclass="llc-check-icon"
              headingclass="llc-check-head"
              textclass="llc-check-para"
              heading="Location-Specific Branding"
              text={<>Having a separate DBA for each of your business locations allows you to use different names for each location, even though they are all part of the same company. For instance, you can have "Cassidy's Cookies New York" and "Cassidy's Cookies L" as two distinct names.</>}
            />
            <Check icon
              anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
              iconclass="llc-check-icon"
              headingclass="llc-check-head"
              textclass="llc-check-para"
              heading="Product Flexibility"
              text={<>Imagine you are a person who does many different jobs and owns several businesses, all of which are identified by your name. Use different names for your products to make it clear what they are (like "Cassidy's Cookies" and "Cassidy's Cakes").</>}
            />
          {/* </div> */}
          {/* <div className='doing-buisness-checkbox-section-2-row'> */}
            <Check icon
              anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
              iconclass="llc-check-icon"
              headingclass="llc-check-head"
              textclass="llc-check-para"
              heading="Streamlined Rebranding"
              text={<>Perhaps you registered your LLC with a name that doesn't really match your style anymore. To reach your audience more effectively, create a DBA (Doing Business As) that matches your new branding as your company grows, instead of starting a whole new company.</>}
            />
            <Check icon
              anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
              iconclass="llc-check-icon"
              headingclass="llc-check-head"
              textclass="llc-check-para"
              heading="Privacy"
              text={<>When you start a business, it usually adopts the name of the person who owns it, unless you register it as a different type of legal organization such as an LLC or Corporation. A DBA lets you legally have a different name for your business so that you can keep your personal information private.</>}
            />
          {/* </div> */}
        </div>






        <div className='andement-number'>
          <center className='get-trade-mark-announcement m-0'>
            <LargeText heading="How to File a DBA"
              text={<>Filing a DBA involves several steps. Why not avoid adding more work for yourself and try to solve the following task.<br />

                Let GYB Firm handle DBA filing for total peace of mind.</>} />
          </center>
          <div className='andement-number-div'>
            <Check number="1" heading="Find Out What Entity Controls Business Formation"
              text={<>Typically, this is the person who is in charge of a country's affairs. Sometimes, this is done in the county. If that is true, be sure to officially register your "Doing Business As" name in every county where you conduct business.</>}  iconclass="llc-check-icon" />
            <Check number="2" heading="Download, Fill Out and Send the Online Form"
              text={<>Go to the right website and look for the part about DBA, trade, fake, or assumed names. Hopefully, you can do this online. However, some old systems might still need you to send a fax or mail something.</>}
              iconclass="llc-check-icon"/>
            <Check number="3" heading="Pay the Filing Fee"
              text={<>The cost to file paperwork differs depending on where you live and what kind of business entity you are registering (such as LLC or corporation).</>} iconclass="llc-check-icon"/>
            <Check number="4" heading="Ensure Your Business Name Is Protected  "
              text={<>
               A DBA alone cannot ensure the protection of your business name. Creating an LLC or corporation is a great way to protect your business name legally, but if you want to go a step further, it might be a good idea to trademark your business name. We can assist with that.
                <br />
                Our low-cost <BlueTextElement text="Trademark Search and Registration service" />makes it easy to protect your DBA.</>}  iconclass="llc-check-icon"/>
            <Check number="5" heading="File Your Taxes  "
              text="If you have a DBA or not, you still have to pay taxes. The way and how often you do this depends on how your business is set up."  iconclass="llc-check-icon"/>
          </div>
        </div>






        <VS heading="DBA vs. LLC" text="The biggest difference between a DBA and an LLC is that an LLC is a legally registered business, while a DBA is more like a nickname for a business that already exists." heading1="Why Use an LLC?"
          heading2="Why Use a DBA?" text1={<> We discuss <BlueTextElement text="LLCs." /> LLCs often. They offer legal safeguards for the business owner by keeping their personal belongings separate from the business's belongings. LLC owners don't have to submit a DBA.</>}
          text2="A DBA is just a nickname for your business and it doesn't offer the same legal protections as an LLC. You are not safe just by having a DBA (Doing Business As). You have to create a business entity first to be protected." />
      </Container>


      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Filing a DBA</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does a DBA Cost?"
            texta="It typically costs $39-$100 to file a DBA. This depends on your state — for example, it costs $15-$25 in Texas and $55-$65 in Florida. You can find this information online when you go to file or by using the state search feature above."

          />
          <FAQSection faqclass="faq-llc-div"
            heading="Can a DBA Become an LLC?"
            texta="If you got a DBA as a sole proprietor, you can convert to an LLC to enjoy more legal protections. You’ll first need to make sure your DBA can be used for your LLC name, as it may already be in use by a legally registered business."

          />
          <FAQSection faqclass="faq-llc-div"
            heading="Can I Have Multiple DBAs Under One LLC?"
            texta="Yes — this is the beauty of DBAs! If you have multiple locations or branches of your business that all operate under the same LLC, you can file multiple DBAs to help distinguish them." />
          <FAQSection faqclass="faq-llc-div"
            heading="Can Two Businesses Have the Same DBA?"
            texta="Typically, states won’t allow two businesses to have the same DBA — even if you own them both. Your DBA application may be denied to avoid confusion, especially if they’re in the same industry. However, your DBA could be used if you haven’t registered your business as a legal entity."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="Do I Need an EIN for a DBA?"
            texta="Since a DBA acts as a nickname, you won’t need a separate EIN for it. You do, however, need an EIN for your registered business entity for tax purposes."
          />

        </div>
      </center>
      <Container>
        <center >
          <div className='testimonials-b'>
            <h1 className='faq-heading'>Need a DBA ASAP?
              <Text text="We’ll save you time by doing the paperwork for you. Just place an order and presto — you’ll have an assumed business name in no time." />
              <center>
                <MainButton text="File DBA Today" anotherclass="testimonials-b-btn" icon={<i className='fa-solid fa-arrow-right'></i>} />
              </center>

            </h1>
          </div>
        </center>

      </Container>
    </>
  )
}

export default DoingBuisness