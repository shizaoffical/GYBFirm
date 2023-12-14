import React from 'react'
import BlueTextElement from '../Header/DropDownElements/BlueTextElement'

function Card3(props) {
  return (
    <div className={`card-3 ${props.anotherclass}`}>
      <div className={`card-3-col-a ${props.bgcolor} `}>
        <img src={props.Image} alt="" className='card-3-col-a-image' />
      </div>
      <div className='card-3-col-b ' >
        <BlueTextElement text={props.heading} path={props.path} />
        <p className='card-3-col-b-text'>{props.text}</p>         
      </div>
      {props.more && <BlueTextElement text={props.more} icon anothername="card-3-last-more" />}

    </div>
  )
}

export default Card3