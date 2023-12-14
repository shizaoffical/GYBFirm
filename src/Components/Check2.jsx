import React from 'react'

function Check2(props) {
  return (
    <div className={`check-2 ${props.anotherclass}`}>
        <i className='fa-solid fa-check check-2-icon rounded-circle'></i>
        <p className='check-2-text'>{props.text}</p>
    </div>
  )
}

export default Check2