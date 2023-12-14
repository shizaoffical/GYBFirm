import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../../Home/HeroSection'
import Image1 from "../../../Images/Image/Img-76.png"
import ClientSay from '../../../Home/ClientSay';
import LargeText from "../../../Components/LargeText"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import AnouncementSection from '../../../Components/AnouncementSection'
import EntityTypeSection from '../../../Components/EntityTypeSection';
import ImageMind from '../../../Components/ImageMind'
import FAQSection from '../../../Components/FAQSection'
import Image4 from "../../../Images/logo/Logo-3.png";
import Check from '../../../Components/Check';
import Heading from '../../../Components/Heading';
import Image2 from "../../../Images/Image/Img-56.png"
import video from "../../../Images/video/Corporation.mp4"
import ThumbNail from "../../../Images/Image/HomePage-Video-ThumbNail-B.jpg"
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


import AboutCompany from './AboutCompany'

function DissolveCompany() {
    return (
        <>

            <Container>
                <HeroSection heading="Filing Articles of Dissolution"
                    heroImage={Image1}
                    btntext="Order Now" path="https://www.order.gybfirm.com/order"
                    trustedimage={Image4}
                    trustedheading="More trusted, Verified Reviews"
                    trustedrating="51319 rating" />

                <ClientSay text={<><img src={Image2} alt="" className='registration-agent-left-col-image' /></>} class="ein-section"
                    component={<>
                        <LargeText
                            text={<>

                                A corporation or LLC can come to a place of dissolution for several reasons. It can simply be a decision you've made for your company because it is no longer successful, you are moving on to a new adventure or your shareholders wish to dissolve its assets. This will, fortunately, stop the necessary tax filings and other requirements that come with having a record of operation on file with the secretary of state. But, the emotional decision to dissolve your company can be tough at times, if you put your heart and sweat into building your own business.<br /><br />
                                Allow GYB Firm.com to ease the burden by doing the
                                <BlueTextElement text=" dissolution paperwork for you." /></>} />
                        <LargeText heading="How to Close an LLC or Corporation"
                            text="A company begins with Articles of Incorporation when it is formed, therefore it makes sense that Articles must be filed to dissolve a company that has been in operation. Without filing the proper paperwork, the business owner will continue to be liable for taxes and other state requirements. Fortunately, closing a company is really a matter of paperwork." />
                        <AnouncementSection
                            text="In order to properly close a corporation or LLC that is no longer transacting business, the company must file Articles of Dissolution with the state of incorporation. Neglecting to file Articles of Dissolution for a company that is no longer active may expose the corporation or LLC to unnecessary recurring fees or taxes."
                            icon={<i className='fa-solid fa-share'></i>}
                            anotherclass="virtual-address-annountcement" />
                        <LargeText
                            text="Business dissolution is primarily an act of filing Articles of Dissolution with your secretary of state. However, if a business is not in a sound position with the state to dissolve, other legal matters may complicate the process."
                        />
                        <LargeText heading="Steps to Dissolving Your LLC or Corporation"
                            text={<>
                                <video controls className="client-say-youtube dissolve-company-video " poster={ThumbNail} >
                                    <source src={video} type='video/mp4' />
                                </video><br/>
                                There are three key steps to dissolving a company. GYB Firm completes these steps in a timely manner on your behalf, making an otherwise cumbersome process simple and stress-free.
                            </>}
                        />

                    </>} />





                <div className='andement-number'>
                    <Heading heading="Steps to Dissolving Your LLC or Corporation" />
                    <div className='andement-number-div'>
                        <Check number="1" heading="Hold a meeting with the Board of Directors"
                            text="In this case, you want the minutes of your meeting to reflect that a vote was taken and appropriate majority (as outlined in your incorporation papers) was achieved. Those companies with shareholders will want a written documentation of this decision signed by all company owners. Some companies, such as single-member LLCs will not need to complete this step." numberclass="andement-number-component-number" />
                        <Check number="2" heading="File the Articles of Dissolution"
                            text={<>The paperwork must be completed and signed by
                             <BlueTextElement text=" Registered Agent" path="/"/> the  of your company. You will be issued a Certificate of Dissolution that formalizes the termination of business activity in your state. Once dissolution is properly documented, all branches in other states will automatically be dissolved as well. The dissolution of a company must take place in the state where incorporation took place.</>} numberclass="andement-number-component-number" />
                        <Check number="3" heading="Notify the IRS"
                            text={<>
                                This step is important because it will provide you with a "consent to dissolution" or "tax clearance" that makes the process a smooth one. It will be necessary to pay all federal and state taxes due at this time to receive this consent. This document(s) will be required by the secretary of state to achieve a formal dissolution. While we'll help you file your Articles of Dissolution, you will be responsible for contacting the IRS to receive any tax clearances, etc.</>} numberclass="andement-number-component-number" />
                                <LargeText text="An additional step often recommended at this point is the closing of all credit lines and accounts that pertain to your business. Letting your creditors know that you have dissolved a company will set you up for more favorable circumstances should debt still be present. Finally, if you have any fictitious names in other states, you'll want to cancel those as well."/>
                    </div>
                    
                </div>










                <ImageMind heading="Save your time. We'll handle the paperwork." anotherClass="andement-row-d" colclass="andement-row-col"
                    text={<><dt className='fw-bold text-black mb-2 fs-5'>Requirements to file Articles of Dissolution:</dt>
                        The company must be in <BlueTextElement text="good standing"/>  with the state of incorporation and cannot be in arrears of franchise taxes or annual reporting requirements. In the event that the entity is not in good standing <BlueTextElement text="reinstatement"/>  would be required in order to proceed with the dissolution.</>}
                    component={<EntityTypeSection Heading="Dissolution" type state />} />
            </Container>
            <center>
                <div className='faq-main faq-llc container-fluid'>
                    <h1 className='faq-heading'>Common questions on filing Dissolution</h1>
                    <FAQSection faqclass="faq-llc-div"
                        heading="What are Articles of Dissolution exactly?"
                        texta="Yes, under most circumstances business entities other than DBA's must present an EIN along with the filed Articles of Organization or Incorporation in order for an account to be opened."
                    />
                    <FAQSection faqclass="faq-llc-div"
                        heading="How long will it take to have the Articles of Dissolution filed?"
                        texta="The filing time is dependent on the governing state agency and varies by state."


                    />
                    <FAQSection faqclass="faq-llc-div"
                        heading="How much will it cost to file Articles of Dissolution?"
                        texta="The state fee varies by state our service fee to file Articles of Dissolution is $149. To review the fee in your state click on the “order now” button and select the state and entity type." />
                    <FAQSection faqclass="faq-llc-div"
                        heading="What contingencies would prohibit me from filing a dissolution?"
                        texta="The only stipulation that would prohibit the owners of an entity from filing a dissolution is if the company owes outstanding taxes or has annual reports outstanding. In this event the company would need to bring the itself to good standing with the state before filing the dissolution."
                    />
                    <FAQSection faqclass="faq-llc-div"
                        heading="What will I receive when the Articles of Dissolution are filed?"
                        texta="The governing state agency will return a copy of the filed articles which are then mailed to the client."
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

export default DissolveCompany