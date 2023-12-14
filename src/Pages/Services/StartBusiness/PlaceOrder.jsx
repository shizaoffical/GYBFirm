import React from "react";
import RatingCompanies from "../../../Components/RatingCompanies";

function PlaceOrder(props) {
  return (
    <>
      <div className="place-order-section">
        <img src={props.placeicon} alt="" className="place-icon" />
        <h1 className="three-step-head px-md-5 place-head">
          {props.placehead}
        </h1>
        <div className={`place-order-flex ${props.placeclass}`}>
          <div className="place-order-flex2">
            <h1 className="place-head2">{props.placeheadtwo}</h1>
            <p className="place-para">{props.placepara}</p>
          </div>
          <div className="place-order-flex2">
            <h1 className="place-head2">{props.placeheadthree}</h1>
            <p className="place-para">{props.placeparatwo}</p>
          </div>
        </div>
      </div>
      <div className="place-order-flex3">
        <img src={props.placeicon2} alt="" className="place-icon2" />
        <div className="">
          <h1 className="place-head3">{props.placehead4}</h1>
          <div className="palce-para2">{props.placeblue}</div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
      <RatingCompanies ratingclass="place-rating" image={props.trustedimage} rating={props.trustedrating}  heading={props.trustedheading} />
      </div>
      <h1 className="three-step-head place-head fs-1 place-head4">{props.placehead2}</h1>
    </>
  );
}

export default PlaceOrder;
