import React from 'react'
import { Link } from 'react-router-dom'

function FooterSectionC() {
  return (
    <div className='footer-c'>
      <p>© 2023.Gyb Firm.com All Rights Reserved.</p>
      <div className='Footer-c-div'>
        <Link to="https://www.instagram.com/gybconsultancy.usa/"
         target="_blank"> <i className="footer-c-brand-icon-a fa-brands fa-square-instagram fa-2x  " ></i></Link>
        <Link to="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fgybconsultancy.us%2F%3Fref%3Dpages_you_manage%2B"
         target="_blank"> <i className="footer-c-brand-icon-b fa-brands fa-square-facebook fa-2x  "></i></Link>
        <Link to="https://twitter.com/gybconsultancy"
         target="_blank"> <i className="footer-c-brand-icon-a fa-brands fa-square-twitter fa-2x "></i></Link>
        <Link to="https://www.fiverr.com/categories/business" target="_blank">       <i className="footer-c-brand-icon-b fa-brands fa-fonticons fa-2x"></i></Link>

      
      
      


      </div>
    </div>
  )
}

export default FooterSectionC