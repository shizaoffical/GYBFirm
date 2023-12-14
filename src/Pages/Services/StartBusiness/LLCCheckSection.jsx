import React from "react";
import Check from "../../../Components/Check";

function LLCCheckSection(props) {
  return (
    <>
      <div className="llc-check-section pb-5">
        <div className="llc-check-div">
          {props.headone && 
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headone}
           text={props.paraone}
         />}
         
          {props.headtwo && 
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headtwo}
           text={props.paratwo}
         />}
         
          {props.headthree && 
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headthree}
           text={props.parathree}
         />}
         
          {props.headfour && 
          <Check icon
          anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
          iconclass="llc-check-icon"
          headingclass="llc-check-head"
          textclass="llc-check-para"
          heading={props.headfour}
          text={props.parafour}
        />}
          
          {props.headfive && 
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headfive}
           text={props.parafive}
         />}
         
          {props.headsix && 
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headsix}
           text={props.parasix}
         /> }
          {
            props.headthirteen && 
            <Check icon
            anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
            iconclass="llc-check-icon"
            headingclass="llc-check-head"
            textclass="llc-check-para"
            heading={props.headthirteen}
            text={props.parathirteen}
          />
          }
         
        </div>
        <div className="llc-check-div">
          {props.headseven && 
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headseven}
           text={props.paraseven}
         />}
         
          {props.headeight && 
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headeight}
           text={props.paraeight}
         />}
         
          {props.headnine &&
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headnine}
           text={props.paranine}
         /> }
         
          {props.headten && 
           <Check icon
           anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
           iconclass="llc-check-icon"
           headingclass="llc-check-head"
           textclass="llc-check-para"
           heading={props.headten}
           text={props.paraten}
         />}
         
          {props.headeleven && 
          <Check icon
          anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
          iconclass="llc-check-icon"
          headingclass="llc-check-head"
          textclass="llc-check-para"
          heading={props.headeleven}
          text={props.paraeleven}
        />}
          
          {
            props.headtwelve && 
            <Check icon
            anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
            iconclass="llc-check-icon"
            headingclass="llc-check-head"
            textclass="llc-check-para"
            heading={props.headtwelve}
            text={props.paratwelve}
          />
          }
          
         
          
          {
            props.headfourteen && 
            <Check icon
            anotherclass="llc-checkbox d-flex align-items-start justify-content-start"
            iconclass="llc-check-icon"
            headingclass="llc-check-head"
            textclass="llc-check-para"
            heading={props.headfourteen}
            text={props.parafourteen}
          />
          }
          
        </div>
      </div>
    </>
  );
}

export default LLCCheckSection;
