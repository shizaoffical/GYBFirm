import React from 'react'
import { Link } from 'react-router-dom'
import Text from '../../Components/Text'

function Step(props) {
  return (
    <div className={`steps-main-div ${props.anotherclass}`}>
        <div className='steps-main-div-a'>
            <div className='steps-main-div-a-number-div rounded-circle'>
                <p className='steps-main-div-a-number rounded-circle'>{props.number}</p>
            </div>
            <h1 className='steps-main-div-a-heading'>{props.heading}</h1>
            <Text 
            text={<>{props.text}
             {props.link && <Link to="/llc" className='fw-bolder about-us-main-div-text'>{props.link}</Link> } </>}>
            </Text>
        </div>
        <div className='steps-main-div-b'>
            <img src={props.image} alt="" className='steps-image' />
        </div>
    </div>
  )
}

export default Step