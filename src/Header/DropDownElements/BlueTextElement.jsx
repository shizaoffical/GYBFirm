import React from 'react'
import { Link } from 'react-router-dom'
function BlueTextElement(props) {
  return (
    <Link to={props.path} className={`blue-text-element ${props.anothername}`}>
      {props.icon && <i className='fa-solid fa-arrow-right me-2'></i>}
      
      {props.text}</Link>
  )
}

export default BlueTextElement