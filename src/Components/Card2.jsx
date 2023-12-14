import React from 'react'

function Card2(props) {
  return (
    <div className='card-2'>
        <div className='card-2-div-a'>
            <img src={props.image} alt="" className='card-2-image'/>
        </div>
        <div className='card-2-div-b' >
          <p className='card-2-text'>{props.text}</p>  
        </div>
        
    </div>
  )
}

export default Card2