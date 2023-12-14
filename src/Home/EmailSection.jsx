import React from 'react'
import MainButton from "../Components/MainButton"
import Image from "../Images/Image/GYB.png"

function EmailSection() {
  return (
    <div className='email-section'>
      <img src={Image} alt="" className='email-section-image' />
      <div className='email-section-div'>
        <dt>Newsletter Sign-Up
          <span className='ps-2 fw-bolder ranking-companies-text' style={{ color: "rgb(117, 117, 117)" }}>(no spam)</span>
        </dt>
        {/* <input type="email" className='email-section-input' placeholder='Input E-mail' /> */}
        <MainButton text="Subscribe " icon={<i className='fa-solid fa-arrow-right'></i>}
          anotherclass="email-section-btn" path="https://www.order.gybfirm.com/order" />
      </div>
    </div>
  )
}

export default EmailSection