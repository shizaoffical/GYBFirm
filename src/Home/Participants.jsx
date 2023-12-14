import React from 'react'
import Image1 from "../Images/logo/Partispant-Logo-1.png";
import Image2 from "../Images/logo/Partispant-Logo-2.png";
import Image3 from "../Images/logo/Partispant-Logo-3.png";
import Image4 from "../Images/logo/Partispant-Logo-4.png";
import Image5 from "../Images/logo/Logo-2.png";

function Participants() {
  return (
    <div className='particpants'>
       <img src={Image5} alt="" className='particpants-logo'/>
   <img src={Image1} alt="" className='particpants-logo'/>
   <img src={Image2} alt="" className='particpants-logo'/>
  
   <img src={Image4} alt="" className='particpants-logo'/>
   <img src={Image3} alt="" className='particpants-logo'/>
    </div>
  )
}

export default Participants