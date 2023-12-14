import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../Home/HeroSection'
import Image1 from "../../Images/Image/Img-64.png"
import Image2 from "../../Images/Image/Img-78.png"
import video from "../../Images/video/Corporation.mp4"
import ThumbNail from "../../Images/Image/Img-49.png"
import LargeText from "../../Components/LargeText"
import ClientSay from '../../Home/ClientSay';
import Text from '../../Components/Text'
import MainButton from '../../Components/MainButton'
import BlueTextElement from '../../Header/DropDownElements/BlueTextElement'
import FAQSection from '../../Components/FAQSection'

function BuisnessNameSearchTool() {
  return (
    <div>
      <Container>
        <HeroSection heading="Business Name Search"
          heroImage={Image1} anotherimgclass="hero-section-image-llc"
          text={< >Check if your company name is available using GYB Firm's Business Name Lookup Tool.</>}

        />
        <ClientSay text={<><img src={Image2} alt="" className='registration-agent-left-col-image' /></>} class="ein-section"
          component={<>
            <LargeText
              text={<>Your business should have a special and easy-to-remember name that lets customers know what you do and makes your brand stronger. The question is: How can you choose a unique name for your business that is not already used by any other company in your state?
              </>} />
            <LargeText
              heading="The solution is easy: Use GYB Firm's tool for searching and checking business names."
              text={<>Before you begin a new business, you need to make sure that this new project is suitable for you and for the market.
                We have made it quick and simple to search for LLC and corporation names in popular places in the United States. This tool checks if your desired business name is available for LLC formation in different states. And the great thing is that you can do everything from one location.
                <video controls className="client-say-youtube dissolve-company-video mt-4 mb-0"
                  poster={ThumbNail} >
                  <source src={video} type='video/mp4' />
                </video>
              </>} />
          </>} />
        <center>

          <div className='testimonials-b'>
            <h1 className='faq-heading'>  We Will Handle the Entity Search for You
              <Text text="We will inform you if the name you want for your business is available in your state." />
            </h1>
            <MainButton text="Get Started" path="https://www.order.gybfirm.com/order" anotherclass="testimonials-b-btn" />
          </div>
        </center>
      </Container>
      <center>

        <div className='faq-main faq-llc container-fluid'>
          <h1 className='faq-heading'>Your Questions Answered</h1>



          <FAQSection faqclass="faq-llc-div"
            heading="Do I have to have a unique name for my business?"
            texta="Every company that starts in your state needs to have a different name that no other company has. This name should not be the same as any other business name in the state." />



          <FAQSection faqclass="faq-llc-div"
            heading="Are There Rules on What Makes a Trade Title One of a kind?"
            texta="Ordinarily, the taking after variables cannot be utilized to say your commerce title is distinctive from another trade title:"
            textb="Additions, such as Organization, Company, Joined, Consolidation, Constrained, Corp., Co., Inc., Ltd., LLC, etc."
            textc="Clear articles like “A,” “And,” “An,” “&,” “The,” etc."
            textd="The solitary, plural or possessive shapes of a word"
            texte="Shortened forms, accentuation, images, textual styles, typefaces, etc."


          />
          <FAQSection faqclass="faq-llc-div"
            heading="Are there any guidelines for what I can name my business?"
            texta="These are usually the rules that apply in all states when naming a business: "
            textb="Your company name should be one-of-a-kind and not similar or easily confused with another company name in your state."
            textc="In order to create a certain type of thing, your name needs to have specific words in it."
            textd={<>If your business is an LLC, it must have the words "Limited Liability Company" or an abbreviation in its name.</>}
            texte={<>If your business is a corporation, it needs to have a word in its name such as "Incorporated" or "Corporation.”</>}
            textf="The name cannot suggest any relation to a government organization or group."
            textg="The name you choose should not suggest that you are offering a service or doing business that you are not legally allowed to do."
            texth="Furthermore, each state might also have additional and more detailed regulations about naming. You can find those on the pages where you search for business names in each state or in our guides for each state about LLCs and corporations."
          />
          <FAQSection faqclass="faq-llc-div"
            heading="How can I find out if the name I want for my LLC or corporation is available?"
            texta="It's simple: use the Business Name Search Tool and type in the name you want for your LLC or corporation. We will check the list of business names in your chosen state and inform you if there are any similar names. If not, here's some good news — you can create a business with that name, and we will assist you in getting started." />



          <FAQSection faqclass="faq-llc-div"
            heading="What happens if I don't want to use my official business name?"
            texta="It's simple: use the Business Name Search Tool and type in the name you want for your LLC or corporation. We will check the list of business names in your chosen state and inform you if there are any similar names. If not, here's some good news — you can create a business with that name, and we will assist you in getting started." />



          <FAQSection faqclass="faq-llc-div"
            heading="How do I change the name of my business that is recognized by law?"
            texta="You have the option to change or add to your Articles of Incorporation or Articles of Organization with your state. We can help you take care of changing the name of your LLC or corporation by filing the necessary amendment on your behalf." />
        
          <FAQSection faqclass="faq-llc-div"
          heading="Can I keep my LLC or corporation's name safe?"
            text={<>
            Once you have registered and established your business legally, no one else can start a business with the same name in that state. If you want more safety, you might think about officially registering your [state] business name as a     <BlueTextElement text="trademark." path="/trademark-name-search" /> Filing a fake or "doing business as" (DBA) name will not be enough to keep your business name safe.</>} />
        </div>
      </center>

    </div>
  )
}

export default BuisnessNameSearchTool