import React from 'react'
import { Link } from 'react-router-dom'

function SimpleCompanies(props) {
  return (
    <>
      <Link to={props.path}>
        <div className='Simple-Companies'>
          <img src={props.image} alt="" className='Simple-Companies-logo' />
          <div className='Simple-Companies-div'>
            {props.heading && <dt className='Simple-Companies-heading'>{props.heading}</dt>}
             <p className='Simple-Companies-text'>{props.text}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SimpleCompanies