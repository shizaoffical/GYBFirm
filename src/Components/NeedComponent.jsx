import React from 'react'
import { Link } from 'react-router-dom'

function NeedComponent(props) {
  return (
    <Link to={props.path}>
      <div className={`need-component  ${props.anotherclass}`}>
        <div className={`need-component-div  ${props.anotherdivclass}`}>
          {props.image && <>  <img src={props.image} alt="" className='need-component-image' /></>}
            {props.number && <><h1 className='px-2' style={{background:"#c6c7fd91"}}>{props.number}</h1></>}
          <div className='text-start'>
            {props.heading &&     <h2 className={`need-component-heading ${props.anotherheading}`}>{props.heading}</h2>}
        
            {props.text && <p className='need-component-text'>{props.text}</p>}
          </div>
        </div>

        <div className={`need-component-icon-div ${props.anotherdiviconclass}`}>
          <i className={`fa-solid fa-arrow-right need-component-icon ${props.anothericonclass}`}></i>
        </div>
      </div>
    </Link>
  )
}

export default NeedComponent