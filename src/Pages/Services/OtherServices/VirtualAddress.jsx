import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../../Home/HeroSection'
import Image1 from "../../../Images/Image/Img-45.png"
import Image2 from "../../../Images/logo/Logo-3.png";
import ThumbNail from "../../../Images/Image/Img-47.png"
import ClientSay from '../../../Home/ClientSay';
import video from "../../../Images/video/Corporation.mp4"
import LargeText from "../../../Components/LargeText"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import AnouncementSection from '../../../Components/AnouncementSection'
import ImageMind from "../../../Components/ImageMind"
import EntityTypeSection from '../../../Components/EntityTypeSection';
import Check from '../../../Components/Check';
import Card3 from '../../../Components/Card3';
import Image5 from "../../../Images/Image/Img-46.png"
import Image6 from "../../../Images/Icons/PNG/37.png"
import Image7 from "../../../Images/Icons/PNG/35.png"
import Image8 from "../../../Images/Icons/PNG/36.png"
import Image9 from "../../../Images/Icons/PNG/39.png"
import Image10 from "../../../Images/Icons/PNG/45.png"
import Image11 from "../../../Images/Icons/PNG/46.png"
import Image12 from "../../../Images/Icons/PNG/44.png"
import Image13 from "../../../Images/Icons/PNG/21.png"


function VirtualAddress() {
  return (
    <Container>
      <HeroSection heading="Virtual Address - Virtual Letter box and Mail Checking Benefit from GYB Firm"
        heroImage={Image1}
        text="Obtain a Fixed Residential Address and utilize the Convenience of Accessing and Reviewing your Mail from any place."
        btntext="View Where Available"
        trustedimage={Image2}
        trustedheading="More trusted, Verified Reviews"
        trustedrating="51319 rating" />

      <ClientSay text={<><img src={Image5} alt="" className='registration-agent-left-col-image'/></>} class="virtual-address-section"
        ThumbNail={ThumbNail}
        video={video} anotherclass="register-agent-video-section"
        component={<>
          <LargeText
            text="
            The way we do business is different now. Today, more people are going on trips than ever before, but it's still crucial for us to stay connected. Our suppliers, customers, partners, and others expect to reach out to us and get the information they require. While email, instant messaging, and other technologies make communication easier and faster, sometimes traditional mail is still the best option                 "
          />
          <LargeText heading="Until Now."
            text={<>
              <AnouncementSection boldtext="Welcome to GYB Firm’s Virtual Address Service"
                text="It lets you have a real street address for your business. This means you can have your mail scanned and stored digitally, and access it from anywhere you are." icon={<i className='fa-solid fa-share'></i>} />
            </>}
          />
          <LargeText
            text={<>
              <AnouncementSection boldtext="What You Need to Know"
                text="We explain all the advantages of a Virtual Address below, but it's important to understand that you cannot physically go to this place. Our scanning services make it possible to access and deal with traditional mail using the internet. Virtual addresses can receive regular mail, letters, and checks, but they cannot receive packages."
                icon={<i className='fa-solid fa-share'></i>}
                anotherclass="virtual-address-annountcement" />
            </>}
          />
        </>} />


      <ImageMind heading="States Where Virtual Address Service Is Available"
        text="GYB Firm offers virtual mailboxes in all States, allowing you to easily manage your business from any location that suits you best."
        component={<>
          <div className='virtual-address-avaliable'>
            <div className='virtual-address-avaliable-states'>
              <BlueTextElement text="Alabama" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Arkansas " icon anothername="virtual-address-states-text" />
              <BlueTextElement text="California" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Delaware" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Hawaii" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Indiania" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Kentucky" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Maryland" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Minnesota" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Montana" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="New Hamshire" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="New York" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Ohio" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Oregon " icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Rode island" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Tennessee" icon anothername="virtual-address-states-text" />
            
              <BlueTextElement text="Washington" icon anothername="virtual-address-states-text" />
              
            </div>
            <div className='virtual-address-avaliable-states'>
              <BlueTextElement text="Alaska" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Colorado" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Florida" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Idaho" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="lowa" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Louisiana" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Massachusetts" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Mississippi" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Nebraska" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="New Jersy" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="North Caroline" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Oklahoma" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Sorth Caroline" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Texas  " icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Virginia" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="West Virginia" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Wyoming" icon anothername="virtual-address-states-text" />
            </div>
            <div className='virtual-address-avaliable-states'>
              <BlueTextElement text="Arizona" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="connecticut" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Georgia" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="lllinois" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Kansas" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Maine" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Michigan" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Missouri" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Navada" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="New Mexico" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="North Dakota" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="pennsylvania" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="South Dakota" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Utah" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Vermont" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Wisconsin" icon anothername="virtual-address-states-text" />
              <BlueTextElement text="Washington DC" icon anothername="virtual-address-states-text" />

            </div>
          </div></>} />



      <center>
        <LargeText heading="Get Your Virtual Address Now" text="Set Yourself Up for Success with GYB Firm" />


        <EntityTypeSection state/>
      </center>





      <div className='virtual-address-row'>
        {/* section a */}
        <div className='virtual-address-row-div'>
          <LargeText heading="Benefits of a Virtual Address"
            text="Our Virtual Address service is simple to use and offers many advantages for you and your business:" />
          <div className='virtual-address-row-col'>
            <Check icon heading="One Address for All Correspondence" anotherclass="virtual-address-row-check"
              text="You get one reliable street address that you can share with suppliers, banks, customers, government agencies, and others." />
            <Check icon heading="Review Mail Wherever You Are" anotherclass="virtual-address-row-check"
              text="We scan all paper mail and put it on a safe and private website. You can then read and check your mail whenever you want." />
          </div>
          <div className='virtual-address-row-col'>
            <Check icon anotherclass="virtual-address-row-check"
              heading="A Professional Image for Your Business"
              text="A business address has the ability to create a favorable perception of you and your business among people. It can also help you with advertising and attracting more customers." />
            <Check icon heading="A Low, Fixed Price Regardless of Mail Volume" anotherclass="virtual-address-row-check"
              text="Our Virtual Address service costs only $29 each month." />
          </div>
        </div>
        {/* section a */}
        <div className='virtual-address-row-div'>
          <LargeText heading="A Virtual Address Is Ideal for Entrepreneurs"
            text="Having a virtual address is a good idea, no matter what stage your business is in." />
          <div className='virtual-address-row-col'>
            <Card3 Image={Image6} heading="Keep Your Real Address Private" anotherclass="virtual-address-row-check"
              text="You don't have to share where you live if it's for work." />
            <Card3 Image={Image7} heading="Relocating Your Business" anotherclass="virtual-address-row-check"
              text="Ensure that no items go missing during an office relocation by taking precautions with the mail." />
          </div>
          <div className='virtual-address-row-col'>

            <Card3 Image={Image8} heading="Digital Nomads and Remote work" anotherclass="virtual-address-row-check"  
              text="Traveling and working from different countries is a fantastic experience. Now you don't have to worry about not receiving important mail when you're away." />
            <Card3 Image={Image9} heading="Virtual Mailbox" anotherclass="virtual-address-row-check"  
              text={<>We cannot accept packages in boxes. We only accept letters and big envelopes. We will check and send a message when your mail is added to your dashboard.<br/>
              Any bank checks, credit or debit cards will be sent by mail (using USPS) to the address we have on record for you.</>} />
          </div>
        </div>
      </div>


      <div className='virtual-address-row-b'>
          <LargeText heading="More Information on Virtual Addresses"
            text="Here’s everything else you need to know:" />
          <div className='virtual-address-row-col'>
            <Check heading="Complete Mail Scanning of All Correspondence" anotherclass="virtual-address-row-check"  image={Image11}
              text="We scan and send all letters and other messages digitally to your safe account within a day." />
            <Check heading="Worldwide Access Via Web Browser" anotherclass="virtual-address-row-check"  image={Image12}
              text="You don't need to download any software. You can check your email from any location or web browser using our secure online portal. Just login to access it." />
          </div>
          <div className='virtual-address-row-col'>
            <Check anotherclass="virtual-address-row-check"
              heading="Security and Encryption"  image={Image10}
              text="All your messages are coded so that only you can read them. We keep physical information safe in our secure places." />
            <Check heading="Email Notification"   image={Image13}
            anotherclass="virtual-address-row-check"
              text="We will let you know every time we take a picture of your mail and put it online, so you won't miss important information that has a deadline.
              " />
          </div>
          <div className='virtual-address-row-col'>
            <Check anotherclass="virtual-address-row-check"
              heading="Mobile Compatibility"  image={Image10}
              text="See your messages on your computer, laptop, phone, or tablet.
              " />
            <Check heading="No In-Person Access"   image={Image13}
            anotherclass="virtual-address-row-check"
              text="Although we give you a physical address to receive mail, you cannot pick up mail from that location. We don't offer any help in person." />
          </div>
      </div>



      <center className='my-5'>
        <LargeText heading="Get Your Virtual Address Now" text="Set Yourself Up for Success with GYB Firm" />


        <EntityTypeSection type/>
      </center>

    </Container>
  )
}

export default VirtualAddress