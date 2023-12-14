import React from 'react'

function Text(props) {
  return (
    <p className={`text-component ${props.anotherclassName}`}>{props.text}</p>
  )
}

export default Text