import React from 'react'

function SIdeBar(props) {
  return (
   <>
     <div class="wrapper">
    <div class="left">
        <div className='d-flex flex-column gy-3'>  
            {props.buttons}
        </div>
    </div>
    <div class="right">
      <div>{props.content}</div>
    </div>
  </div>
   </>
  )
}

export default SIdeBar