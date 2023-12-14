import React from 'react'
import NeedComponent from '../Components/NeedComponent'
import Image1 from "../Images/Icons/PNG/3.png"
import Image2 from "../Images/Icons/PNG/4.png"
import Image3 from "../Images/Icons/PNG/5.png"
import Image4 from "../Images/Icons/PNG/1.png"


function UserNeed() {
  return (
    <div className='d-flex align-content-center flex-wrap justify-content-center flex-column '>
       <div className='user-need'>
      <NeedComponent text="I’m ready to start, but need help understanding the right structure for my new company." 
      heading="I need the right structure for my company." image={Image2} />
       <NeedComponent text="I ready to register my company and make it offical ." 
      heading="I’m ready to start, my new company." image={Image1}
       anothericonclass="user-need-icon" 
      anotherclass="user-need-section"/> 
      <NeedComponent text="I would like to learn more about registered agents and why I need one." 
      heading="I need Registered Agent Service in US." image={Image4} /> 
      <NeedComponent text="I already have an official business (LLC, etc.), but need help managing my state compliance." 
      heading="I need help managing my state compliance." image={Image3}
       anothericonclass="user-need-icon" 
      anotherclass="user-need-section"/>
    </div>
    </div>
   
  )
}

export default UserNeed