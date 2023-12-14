import React from 'react'
import RatingCompanies from '../Components/RatingCompanies'
import Image from "../Images/logo/Logo-1.png"
import JoinBuisness from '../Components/JoinBuisness'
import Icon from "../Images/Icons/PNG/2.png"

function TrustPilotExcellenceA() {
  return (
    <div className='trust-pilot-excellence-a'>
      <div className='trust-pilot-excellence-a-row'>
      <RatingCompanies image={Image} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon" rating="11,8176 rating"/>
      <h1 className='trust-pilot-excellence-a-heading'>
      Loved by 1,000,000+ Entrepreneurs Across All 50 States
      </h1>
      <JoinBuisness image={Icon} text="Join the 1,000,000+ businesses that trust GYB Firm to start, manage and grow their business."
      btntext="Get Started" path="https://www.order.gybfirm.com/order" btnpath="https://www.order.gybfirm.com/order" icon={<><i class="fa-solid fa-arrow-right"></i></>} anotherclass="trust-pilot-excellence-a-join-buisness" 
      anothertextclass="trust-pilot-excellence-a-text"/>
       </div>
    </div>
  )
}

export default TrustPilotExcellenceA