import React from 'react'
import { Link } from 'react-router-dom'

function BuisnessElement(props) {
  return (
    <Link to={props.path} className='buisness-element'>
      <i className='fa-solid fa-arrow-right buisness-element-icon' ></i>
      <p className='buisness-element-text'>{props.text}</p>
    </Link>
  )
}

export default BuisnessElement