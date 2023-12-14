import React from 'react'
import Text from "../Components/Text"
import MainButton from '../Components/MainButton'
import SimpleCompanies from '../Components/SimpleCompanies'
import Image from "../Images/logo/Logo-3.png"

function Fees() {
  return (
    <center>
      <div className='fees d-flex align-content-center flex-wrap justify-content-center flex-column text-center'>
        <h1 className='image-mind-heading'>$39 + State Fee of Business Formation With No Hidden Fees</h1>
        <Text text="You’ll pay a $39 plus state fee to register your business, and GYB Firm doesn’t charge any hidden fees on best of it. Registration through GYB Firm is only $39 — continuously — and you'll be able select to include on extra services with our Premium Bundles."/>
        <center>
          <MainButton text="view GYB Firm Packages" icon={<><i class="fa-solid fa-arrow-right"></i></>  }
            anotherclass="fees-button" />
          <SimpleCompanies image={Image} text={ <>Join the   <span className='fw-bolder'>1,000,000+</span>  businesses that have chosen GYB Firm.</>} />
        </center>
      </div>
    </center>

  )
}

export default Fees