import React from 'react'
import Text from './Text'

function VSB(props) {
    return (
        <div className='vsb-section'>
            <div className='vsb-section-main'>
                {props.heading && <h1 className='about-us-div-b-heading'>{props.heading}</h1>}
                <Text text={props.text} />
                <div className='vsb-section-row'>
                    <div className='vsb-section-col vs-section-col-1'>
                        <img src={props.Image1} alt="" className='vsb-section-col-image' />
                        <h1 className='vsb-section-heading'>{props.heading1}</h1>
                        <p className='vsb-section-text '>{props.text1}</p>
                    </div>
                    <p className='vsb-section-vs-1 rounded-circle'><i className='fa-solid fa-arrow-right'></i></p>
                    <div className='vsb-section-col vs-section-col-2'>
                        <img src={props.Image2} alt="" className='vsb-section-col-image'  />
                        <h1 className='vsb-section-heading'>{props.heading2}</h1>
                        <p className='vsb-section-text'>{props.text2}</p>
                    </div>
                    <p className='vsb-section-vs-2 rounded-circle'><i className='fa-solid fa-arrow-right'></i></p>

                    <div className='vsb-section-col vs-section-col-3'>
                        <img src={props.Image3} alt="" className='vsb-section-col-image' />
                        <h1 className='vsb-section-heading'>{props.heading3}</h1>
                        <p className='vsb-section-text'>{props.text3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VSB