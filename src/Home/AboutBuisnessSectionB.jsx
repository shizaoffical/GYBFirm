import React from 'react'
import Card from '../Components/Card'
import Image1 from "../Images/Icons/PNG/1.png"
import Image2 from "../Images/Icons/PNG/62.png"
import Image3 from "../Images/Icons/PNG/5.png"
import Image4 from "../Images/Icons/PNG/6.png"
import Image5 from "../Images/Icons/PNG/65.png"
function AboutBuisnessSectionB() {
  return (
  
        <div className='AboutBuisnessSectionA'>
          <div className='AboutBuisnessSectionA-div'>
            <Card image={Image1} text="Annual Reports"/>
            <Card image={Image2} text="Registered Agent"/>
            <Card image={Image3} text="Virtual Address"/>
            <Card image={Image4} text="EIN Number"/>
            <Card image={Image5} text="And a lot more..."/>
    
          </div>
        </div>
  )
}

export default AboutBuisnessSectionB