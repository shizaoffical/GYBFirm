import React from 'react'
import Text from '../Components/Text'


function ClientSay(props) {
  return (
    <div className={`client-say ${props.class}`}>
      <div className='client-say-col'>
        {props.heading &&  <h1 className='image-mind-heading'>{props.heading}</h1>}
       {props.text && <Text text={props.text} 
        anotherclassName="client-say-paragraph"/>}
        {props.smtext &&  <sm className="client-say-text fw-bold">{props.smtext}</sm>}
       
      </div>
      <div >
        {props.video && 
        <video controls className={`client-say-youtube ${props.anotherclass}`} poster={props.ThumbNail} >
          <source src={props.video} type='video/mp4' />
        </video>
        }
       
        {props.component && <div>{props.component}</div>}
      </div>
    </div>
  )
}

export default ClientSay