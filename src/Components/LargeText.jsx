import React from 'react'
 import Text from './Text'
function LargeText(props) {
  return (
         <div className={ `term-condition-div ${props.anotherclass} `}>
          {props.heading && <h1 className='about-us-div-b-heading'>{props.heading}</h1>}
                <Text text={props.text} />
            </div>
  )
}

export default LargeText