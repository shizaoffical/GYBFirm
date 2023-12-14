import React from 'react'
import Image1 from "../Images/logo/Logo-3.png"
import Image2 from "../Images/logo/Logo-2.png"
import Image3 from "../Images/logo/Logo-1.png"
import RatingCompanies from '../Components/RatingCompanies'
import SimpleCompanies from '../Components/SimpleCompanies'

function FooterSectionA() {
  return (
    <div className='footer-section-a'>
      <RatingCompanies image={Image3} rating="51319 rating" heading=" More trusted, verified reviews"  />
       <SimpleCompanies image={Image2} heading="GYB Firm. 60000" text="US Fastest-Raising Companies" />
       <RatingCompanies image={Image1} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon" rating="11,8176 rating"/>

    </div>
  )
}

export default FooterSectionA