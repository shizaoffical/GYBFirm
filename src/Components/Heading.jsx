import React from 'react'

function Heading(props) {
  return (
    <div>
          <h2 className={`image-mind-heading ${props.anotherclass}`}>{props.heading}</h2>
    </div>
  )
}

export default Heading