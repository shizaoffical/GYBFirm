import React from 'react'
import HeroSection from './HeroSection'
import Participants from './Participants'
import BusinessStart from './BusinessStart'
import YoutubeVideo from './YoutubeVideo'
import Fees from './Fees'
import AboutBuisnessSectionA from './AboutBuisnessSectionA'
import Tools from './Tools'
import AboutBuisnessSectionB from './AboutBuisnessSectionB'
import GetAccess from './GetAccess'
import Asthetics from './Asthetics'
import TrustPilotExcellenceA from './TrustPilotExcellenceA'
import { Container } from 'react-bootstrap'
import ClientSay from './ClientSay'
import Clients from './Clients'
import FAQ from './FAQ'
import TrustPilotExcellenceB from './TrustPilotExcellenceB'
import UserNeed from './UserNeed'
import video from "../Images/video/Corporation.mp4"
import ThumbNail from "../Images/Image/Thumbnail-1.png"
import Image1 from "../Images/Image/Img-4.png"
import Image2 from "../Images/logo/Logo-2.png";
import Image3 from "../Images/logo/Logo-3.png";
// import Image4 from "../Images/Image/Logo-1.png";
function Home() {
  return (
    <div>
      <Container>
      
        <HeroSection heading="Quick, Free Top Ranking Company Registration"
          heroImage={Image1}
          text={<>Join Over <span className='fw-bolder'>1,000,000 </span> Businesses Owners with GYB Firm Since
            <span className='fw-bolder'> 2004</span></>}
          btntext="Start My Business" path="/how-it-start"
          Gybfirmtext="US Fastest-Raising Companies"
          Gybfirmheading="GYB Firm. 60000"
          GybfirmImage={Image2}
          trustedimage={Image3}
          trustedheading="More trusted, Verified Reviews"
          trustedrating="51319 rating"
        // joinimage={Image4}
        // jointext={<>Join the   <span className='fw-bolder'>1,000,000+</span>  businesses that have chosen Gyb Firm.</>}
        />
        <Participants />
        <BusinessStart />
        <YoutubeVideo />
        <Fees />
        <AboutBuisnessSectionA />
        <Tools />
        <AboutBuisnessSectionB />
        {/* <GetAccess /> */}
        {/* <Asthetics /> */}
        <TrustPilotExcellenceA />
        <ClientSay heading="See What Our Clients Have to Say"
          smtext="Delivery Depot LLC"
          text="One of the things I truly acknowledged with GYB Firm is that it took care of everything for me."
          video={video}
          ThumbNail={ThumbNail} />
        <Clients />
      </Container>
      <FAQ />
      <Container>
        <TrustPilotExcellenceB />
        <UserNeed />
      </Container>

    </div>
  )
}

export default Home