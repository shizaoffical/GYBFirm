import React from 'react'
import MainButton from './MainButton'
import { Link } from 'react-router-dom'

function JoinBuisness(props) {
  return (
    <Link to={props.path}>
    <div className={`join-buisness  ${props.anotherclass}`}>
     <img src={props.image} alt="" className='join-buisness-image' />
     <p className={`join-buisness-text ${props.anothertextclass}`}>{props.text}</p>
     <MainButton path={props.btnpath} text={props.btntext} icon={props.icon} anotherclass="join-buisness-btn"/>
    </div>
    </Link>
    
  )
}

export default JoinBuisness