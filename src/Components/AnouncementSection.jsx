import React from 'react'

function AnouncementSection(props) {
  return (
    <div className={`anouncement-section ${props.anotherclass}`}>
       <div className={`anouncement-section-icon ${props.iconclass}`}>{props.icon}</div>
       <div className='anouncement-section-div' >
        {props.boldtext && <dt className='anouncement-section-div-text '>{props.boldtext}</dt>}
        
        <p className='anouncement-section-div-text-2'>{props.text}</p>
       </div>
    </div>
  )
}

export default AnouncementSection