
import React from 'react'

function Check(props) {
  return (
    <div className={`check-section ${props.anotherclass}`}>
      {props.image && <img src={props.image} alt="" className='check-section-image rounded-circle' />}
      {props.icon && <i className={`fa-solid fa-check check-section-icon ${props.iconclass}`}></i>}
      {props.icon2 && <i className={`check-section-icon ${props.iconclass}`}></i>}
      {props.number && <p className={` check-section-number  ${props.iconclass} }`}>{props.number}</p>}
        
        <div>
          {props.heading &&   <h1 className={`check-section-heading ${props.headingclass}`}>{props.heading}</h1>}
          {props.text &&  <p className={`check-section-text ${props.textclass}`}>{props.text}</p>}
         
        </div>
        
    </div>
  )
}

export default Check