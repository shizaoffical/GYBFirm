import React from 'react'
import Text from '../Components/Text'
import MainButton from '../Components/MainButton'

function GetAccess() {
  return (
    <> <center>
    <div className='fees d-flex align-content-center flex-wrap justify-content-center flex-column text-center'>
      <h1 className='image-mind-heading'>Get Access to GYB Firm`s Business Development Dashboard</h1>
      <Text text="Your business fundamentals all in one site. Get updates and order cautions. Develop your business with extra services after you require them."
      anotherclassName="fees-text"/>
      <center>
        <MainButton text="Get Started" path="https://www.order.gybfirm.com/order" anotherclass="fees-button" />
      </center>
    </div>
  </center></>
  )
}

export default GetAccess