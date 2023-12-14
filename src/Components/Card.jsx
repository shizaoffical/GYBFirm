import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <>
        <div>
            <div className={`card ${props.anotherClassName}`}>
                <div className={`${props.anotherimageclass}`}>
                  <img src={props.image} alt=""  className='card-image'/>  
                </div>
                
                <h1 className={`card-heading fw-bold`} >{props.text}</h1>
                {props.para && <sm>{props.para}</sm>}
        </div>
        </div>
       
         
    
        </>
        
       
    )
}

export default Card