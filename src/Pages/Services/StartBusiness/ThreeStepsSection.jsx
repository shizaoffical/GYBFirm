import React from 'react'
import Check from '../../../Components/Check'

function ThreeStepsSection(props) {
  return (
    <>
    <div className="three-step-section">
        <h1 className="three-step-head px-md-5">{props.head}</h1>
        {props.para &&  <p className="three-step-para mt-3">{props.para}</p>}
       
        <div className="three-step-flex">
            <div className="three-step-flex2">
            <Check anotherclass="llc-checkbox three-step-checkbox d-flex align-items-start justify-content-start"   numberclass="three-step-number" iconclass="three-step-icon" headingclass="three-step-head2" textclass="three-step-para2" heading={props.headingone} number={props.numberone} text={props.textone}
          />
          <img src={props.image} alt="" className='three-step-img' />
            </div>
            <div className="three-step-flex2">
            <Check anotherclass="llc-checkbox three-step-checkbox d-flex align-items-start justify-content-start"   numberclass="three-step-number" iconclass="three-step-icon" headingclass="three-step-head2" textclass="three-step-para2" heading={props.headingtwo} number={props.numbertwo} text={props.texttwo}
          />
          <img src={props.imagetwo} alt="" className='three-step-img' />
            </div>
            <div className="three-step-flex2">
            <Check anotherclass="llc-checkbox three-step-checkbox d-flex align-items-start justify-content-start"   numberclass="three-step-number" iconclass="three-step-icon" headingclass="three-step-head2" textclass="three-step-para2" heading={props.headingthree} number={props.numberthree} text={props.textthree}
          />
          <img src={props.imagethree} alt="" className='three-step-img' />
            </div>
        </div>

    </div>
    </>
  )
}

export default ThreeStepsSection