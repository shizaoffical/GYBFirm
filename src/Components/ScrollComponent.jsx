import React from 'react'

function ScrollComponent(props) {
  return (
    <div className='scroll-component'>
      <div className='scroll-component-row-a'>
        <div className='scroll-component-icon-div'>
          {props.ratingstar1 && <i className='fa-solid fa-star'></i>}
          {props.ratingstar2 && <i className='fa-solid fa-star'></i>}
          {props.ratingstar3 && <i className='fa-solid fa-star'></i>}
          {props.ratingstar4 && <i className='fa-solid fa-star'></i>}
          {props.ratingstar5 && <i className='fa-solid fa-star'></i>}
        </div>
        <p className='ps-2 fw-bolder ranking-companies-text' style={{ color: "rgb(117, 117, 117)" }} >{props.verified}</p>
      </div>
      {props.heading && <dt className='scroll-component-heading pb-1'>{props.heading}</dt>}
{props.text && <p className='scroll-component-text'>{props.text}</p>}
    </div>
  )
}

export default ScrollComponent