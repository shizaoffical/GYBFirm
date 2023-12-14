import React from 'react'
import Text from './Text'

function VS(props) {
    return (
        <div className='vs-section'>
            <div className='vs-section-main'>
                {props.heading && <h1 className='about-us-div-b-heading'>{props.heading}</h1>}
                <Text text={props.text} />
                <div className='vs-section-row'>
                    <div className='vs-section-col vs-section-col-1'>
                        <h1 className='vs-section-heading'>{props.heading1}</h1>
                        <p className='vs-section-text '>{props.text1}</p>
                    </div>
                    <p className='vs-section-vs rounded-circle'>VS</p>
                    <div className='vs-section-col vs-section-col-2'>
                        <h1 className='vs-section-heading'>{props.heading2}</h1>
                        <p className='vs-section-text'>{props.text2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VS