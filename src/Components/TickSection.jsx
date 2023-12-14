import React from 'react'

function TickSection(props) {
  return (
    <div className='tick-section'>
        <i className='fa-solid fa-check tick-section-icon'></i>
    <p className='tick-section-text'>{props.text}</p>
    </div>
  )
}

export default TickSection