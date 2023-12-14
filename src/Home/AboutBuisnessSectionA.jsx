import React from 'react'
import Card from '../Components/Card'
import Image1 from "../Images/Icons/PNG/66.png"
import Image2 from "../Images/Icons/PNG/62.png"
import Image3 from "../Images/Icons/PNG/67.png"
import Image4 from "../Images/Icons/PNG/68.png"
import Image5 from "../Images/Icons/PNG/69.png"


function AboutBuisnessSectionA() {
  return (
    <div className='AboutBuisnessSectionA'>
      <div className='AboutBuisnessSectionA-div'>
        <Card image={Image1} text="No hidden costs or subscriptions"/>
        <Card image={Image2} text="$39 for Business Formation"/>
        <Card image={Image3} text="The Fastest Filing Speeds"/>
        <Card image={Image4} text="Cheapest Registered Agent"/>
        <Card image={Image5} text="Free Compliance Reminders"/>

      </div>
    </div>
  )
}

export default AboutBuisnessSectionA