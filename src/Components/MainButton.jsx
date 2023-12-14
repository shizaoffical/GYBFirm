import React from 'react'
import { Link } from 'react-router-dom'

function MainButton(props) {
  return (
    <>
    <Link to={props.path} onClick={props.onClick}>
    <div className={`main-button rounded-pill ${props.anotherclass}`}>
    <dt className=''>{props.text}</dt>
      {props.icon && <i className='main-button-arrow'>{props.icon}</i>}
    </div></Link>
    
    
    </>
   
  )
}

export default MainButton