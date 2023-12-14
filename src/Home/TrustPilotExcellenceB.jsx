import React from 'react'
import MainButton from '../Components/MainButton'
import RatingCompanies from '../Components/RatingCompanies'
import Image from "../Images/logo/Logo-1.png"

function TrustPilotExcellenceB() {
  return (
    <div>
        <div className='trust-pilot-excellence-a'>
      <div className='trust-pilot-excellence-a-row'>
      <RatingCompanies image={Image} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon"
       rating="11,8176 rating"/>
      <h1 className='trust-pilot-excellence-a-heading'>
      Bring Your Business to Life It’s Free, It’s Easy and It’s Stress-Free
      </h1>
      <MainButton text="Get Started Now" path="https://www.order.gybfirm.com/order" icon={<><i class="fa-solid fa-arrow-right"></i></>}
       anotherclass="trust-pilot-excellence-b-btn"/>
       </div>
    </div>
    </div>
  )
}

export default TrustPilotExcellenceB