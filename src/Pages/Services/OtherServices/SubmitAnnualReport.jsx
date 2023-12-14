import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../../Home/HeroSection'
import Image from "../../../Images/logo/Logo-1.png"
import Image1 from "../../../Images/Image/Img-58.png"
import Image2 from "../../../Images/Icons/PNG/43.png";
import ClientSay from '../../../Home/ClientSay';
import BuisnessInformation from "../../../Components/BuisnessInformation"
import LargeText from "../../../Components/LargeText"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import FAQSection from '../../../Components/FAQSection';
import MainButton from '../../../Components/MainButton';
import RatingCompanies from '../../../Components/RatingCompanies';
import ClientsData from '../../../Components/ClientsData';
import Image3 from "../../../Images/Image/Client-Image.webp"
import Image6 from "../../../Images/Image/Img-59.png"
import ServicesCheckSection from './ServicesCheckSection'
import EntityTypeSection from '../../../Components/EntityTypeSection'
function SubmitAnnualReport() {
  return (
    <>

      <Container>
        <HeroSection heading="File an Annual Report for Your LLC with GYB Firm"
          heroImage={Image1}
          text={<>
            <dt className='opacity-100 text-black'>Filing an Annual Report Is Required by Your Secretary of State — For All Business Entities</dt>Lighten your workload and ensure your business stays compliant by letting GYB Firm handle your annual report filing.</>}
          btntext="Get Started" path="https://www.order.gybfirm.com/order"
          Gybfirmtext={<>Join the <span className='fw-bold'>1,000,000+ </span> businesses that have chosen
            <span className='fw-bold'> GYB Firm.</span> </>} 
            GybfirmImage={Image2} />

        <ClientSay text={<><img src={Image6} alt="" className='registration-agent-left-col-image'/></>}
          component={<>
            <LargeText heading="What Is an Annual Report?"
              text={<>
                An annual report is a filing that provides details of your company's business activities over the previous year. Some states call annual reports for LLCs “Statements of Information.”<br /><br />

                Annual reports give state governing authorities important information, including the names and addresses of directors or managing members of a corporation or LLC, as well as the company and Registered Agent address.<br /><br />

                As a business manager, director or owner, you’re obliged to follow state regulations and meet certain requirements, one of which is to file an annual report for your LLC or corporation.<br /><br />

                Some states only require you to file a report every two years, called a “biennial report.”<br /><br />
                A formal annual report is required to be filed with your Secretary of State. Learn more about
                <BlueTextElement text=" filing an annual report in our ultimate guide." />  <br />  <br />
                You may also need to create additional yearly reports for your investors, shareholders or stakeholders, but these business or financial reports are not the same as LLC or corporation annual reports.
              </>}
            />
            <LargeText heading="Who Needs to File an Annual Report?"
              text={<>
                If you’ve incorporated a business — as an LLC, LLP, S Corp or C Corp — you must file an annual report (or equivalent report based on your state's schedule), normally with your Secretary of State. This applies no matter how big or small your business is. <br />  <br />

                Annual reports can be daunting and filing incorrectly (or not at all) can cause serious headaches and consequences later, such as late penalties, dissolution and loss of liability protection. <br />  <br />

                Avoid tiresome paperwork and the repercussions of noncompliance by letting GYB Firm take care of the paperwork for you. Free up your time to focus on what matters — your business.
              </>} />
            <LargeText heading="Who Doesn’t Need to File an Annual Report?"
              text={<>
                Generally, sole proprietors and partnerships don’t have to file an annual report because the business is not a separate entity from the business owner.
              </>} />

            <BuisnessInformation heading="What Does an LLC or Corporate Annual Report Contain?"
              li1="The principal business (head office) address of the company."
              li2="The names and addresses of the managers of the business (directors and officers in a corporation, members and managers in an LLC)"
              li3="Important identification numbers for your business"
              li4="The purpose of your business"
              li5="Authorized signatories and Registered Agents"
              li6="The number of shares of stock issued by the business"
            />
            <LargeText heading="What’s the Purpose of an Annual Report?"
              text={<>
                The purpose of an annual report is to keep your state informed of your business’s activities throughout the previous year and declare any changes to the details or ownership of your business — for example, if the business has changed locations or has new directors or managers.<br />  <br />

                Annual reports also provide shareholders and any other interested people with information about your business’s financial performance.<br />  <br />

                Need to make changes to your business outside of the usual annual reporting time? No problem! You can file an
                <BlueTextElement text="   Articles of Amendment form" />  or have GYB Firm take care of it for you
              </>} />
            <LargeText heading="What Happens If I Don't File an Annual Report or Miss the Deadline?"
              text={<>
                If you don’t file your annual report or miss the deadline, you put your business at risk. Your state could impose a late penalty fine and your business could lose its “good standing.”<br />  <br />

                Further delaying filing means your business could be dissolved by your state agency and struck off the register. If this happens, you’ll no longer have liability protection and can’t continue as an LLC or corporation

              </>} />
            <LargeText heading="How to File Your Annual Report"
              text={<>
                If you need to file an annual report for your LLC or corporation, you can normally do so online through your state’s website.<br />  <br />

                In addition to filing your annual report, you’ll also need to pay a fee — these fees vary from state to state and could range between $50 and $400.<br />  <br />

                Some states will also require you to file other business documentation if important details of your business have changed.

              </>} />
            <LargeText heading="When Is Your Annual Report Due?"
              text={<>
                In some states, annual reports need to be filed on a predetermined date for all entities regardless of the date of formation. Other states require the annual report to be filed on the anniversary date of formation.<br />  <br />
                The due dates for LLC and corporation annual reports
                <BlueTextElement text="   Articles of Amendment form" />   vary from state to state. You can find your filing date on your state’s website.
              </>} />
            <LargeText heading="Business and Financial Annual Reports"
              text={<>
                In addition to formally filing a corporate annual report, you may also need to produce business and
                <BlueTextElement text="   financial reports" />  for investors, directors, managers and other stakeholders.

                Although there aren’t any “legal” requirements for what these reports should contain, there are certain conventions for what’s included.

                Businesses exist to make a profit, so finances are usually at the forefront of business annual reports.

              </>} />
            <BuisnessInformation heading="Annual business reports can be presented as:"
              li1="Balance sheets"
              li2="Profit and loss statements "
              li3="Reports on shares and stock issued"
              li4="Financial projections and forecasts"
              heading2="An annual business report can also include several other areas:"
              li7="An executive summary"
              li8="Letter from the chairman or board of directors"
              li9="Assessment of opportunities and risks"
            />
            <LargeText 
              text={<>Whether you’re filing a formal annual report for your LLC, S Corp or C Corp, or you’re creating other business and financial reports, it’s important to ensure that you understand exactly what’s required from you.<br/>
              <br/>
                GYB Firm is the expert at making sure annual reports are perfect. Save yourself the time and effort of preparing and filing your annual report, and let us take care of things.
              </>} />
              <LargeText  heading="Need Help Filing Your LLC Annual Report?"
              text={<>Save the stress and free up time while avoiding missed deadlines, state fines and the risk of dissolution. Let GYB Firm handle your paperwork.<br/><br/>

                Place your order below and an GYB Firm representative will contact you to get the specific information required to complete and file the annual report in your state of formation.
              </>} />
          </>} />

        <ServicesCheckSection
          heading="Benefits of Filing Your Annual LLC Report with GYB Firm"
          chechheading1="Exceptional Value for Your Money, Always"
          chechheading2="Enjoy a Superior and Modern User Experience"
          chechheading3="Personalized, Industry-Leading Support"
          chechtext1="No subscriptions, no recurring fees and no hidden costs. Clear, transparent pricing — every time."
          chechtext2="File your annual report effortlessly. A carefully crafted experience makes entrepreneurship easy."
          chechtext3="24/7 fast and friendly customer service. Talk to a dedicated specialist, not a salesperson, whenever you need to."
        />

      </Container>
      <center>
        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Common Questions About Filing an Annual Report</h1>
          <FAQSection faqclass="faq-llc-div"
            heading="How Much Does It Cost to File an Annual Report?"
            texta="Our service fee to file an annual report is $99."
            textb="The fee is the same whether you need to file an LLC annual report or an annual report for your corporation or nonprofit."
            textc="The state fee will vary. To review the fee in your state, select your entity type and the entity state at the bottom of the page."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Any Hidden Costs?"
            texta="No! We pride ourselves on transparency. There are absolutely no hidden costs associated with filing your annual report."

          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are There Specific Rules for My State?"
            texta="Yes. Some states proceed to immediate dissolution if your annual report is not filed by the deadline. This means that your company will no longer be registered with the state and the legal and tax benefits of being incorporated will no longer be available to you. States that do this are Florida, Wyoming, Georgia and Virginia."
            textb="Other states have 20-90 day grace periods."
            textc={<>Discover everything you need to know about your <BlueTextElement text="state-specific compliance filing requirements. " />  </>}/>
          <FAQSection faqclass="faq-llc-div"
            heading="How Long Does It Take to File an Annual Report?"
            texta={<> <BlueTextElement text=" Business filing deadlines" /> are dependent on the governing state agency and filing times vary by state. It’s important that your business’s annual report is filed well in advance of the due date in order to avoid any potential late filing fees.
            </>} />
          <center>
            <MainButton text="Learn More" path="/privacy-policy" anotherclass="faq-btn" />
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
        <center className='my-5'>
        <LargeText heading="File Your Annual Report Now" />


        <EntityTypeSection Heading="Annual Report" type state/>
      </center>
      </Container>

    </>
  )
}

export default SubmitAnnualReport