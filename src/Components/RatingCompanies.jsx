import React from 'react'
import { Link } from 'react-router-dom'
function RatingCompanies(props) {
  return (
    <>
    <Link to={props.path} className={`${props.ratingclass} `}>
       <div className='ranking-companies'>
          <img src={props.image} alt="" className='ranking-companies-image'/>
          <div>
          <dt className='ranking-companies-heading'>{props.heading}</dt>
            <div className='d-flex align-items-center pt-1'>
              <i className={`fa-solid fa-star ranking-companies-icon pe-1 ${props.anotherclass} `}></i>
              <i className={`fa-solid fa-star ranking-companies-icon pe-1 ${props.anotherclass} `}></i>
              <i className={`fa-solid fa-star ranking-companies-icon pe-1 ${props.anotherclass} `}></i>
              <i className={`fa-solid fa-star ranking-companies-icon pe-1 ${props.anotherclass} `}></i>
              <i className={`fa-solid fa-star ranking-companies-icon ${props.anotherclass} `}></i>
              <p className='ps-2 fw-bolder ranking-companies-text' style={{color:"rgb(117, 117, 117)"}} >{props.rating}</p>
            </div>
          </div>
        </div>
        </Link>
    </>
  )
}

export default RatingCompanies