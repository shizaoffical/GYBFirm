import React from 'react'
import Check from '../../../Components/Check'
import Heading from "../../../Components/Heading"

function ServicesCheckSection(props) {
  return (
    <div className='d-flex align-items-center justify-content-center'>
    <div className='register-agent-checkbox'>
      <center><Heading heading={props.heading}/></center>
      {props.chechheading1 && <Check icon
        anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
        iconclass="llc-check-icon"
        headingclass="llc-check-head"
        textclass="llc-check-para"
        heading={props.chechheading1}
     text={props.chechtext1}
      />}
       {props.chechheading2 && 
      <Check icon
        anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
        iconclass="llc-check-icon"
        headingclass="llc-check-head"
        textclass="llc-check-para"
        heading={props.chechheading2}
        text={props.chechtext2}

      /> }
       {props.chechheading3 && 
      <Check icon
        anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
        iconclass="llc-check-icon"
        headingclass="llc-check-head"
        textclass="llc-check-para"
        heading={props.chechheading3}
        text={props.chechtext3}

      />}
       {props.chechheading4 && 
       <Check icon
        anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
        iconclass="llc-check-icon"
        headingclass="llc-check-head"
        textclass="llc-check-para"
        heading={props.chechheading4}
        text={props.chechtext4}

      />}
 {props.chechheading5 && 
      <Check icon
        anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
        iconclass="llc-check-icon"
        headingclass="llc-check-head"
        textclass="llc-check-para"
        heading={props.chechheading5}
        text={props.chechtext5}

      />}
       {props.chechheading6 && 
      <Check icon
      anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
      iconclass="llc-check-icon"
      headingclass="llc-check-head"
      textclass="llc-check-para"
      heading={props.chechheading6}
      text={props.chechtext6}

    />
       }
        {props.chechheading7 && 
    <Check icon
      anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
      iconclass="llc-check-icon"
      headingclass="llc-check-head"
      textclass="llc-check-para"
      heading={props.chechheading7}
      text={props.chechtext7}

    />}
     {props.chechheading8 && 
    <Check icon
    anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
    iconclass="llc-check-icon"
    headingclass="llc-check-head"
    textclass="llc-check-para"
    heading={props.chechheading8}
    text={props.chechtext8}

  />
     }
    </div>
    </div>
  )
}

export default ServicesCheckSection