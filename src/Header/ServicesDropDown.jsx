import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeaderLink from "../Components/HeaderLink";
import Icon1 from "../Images/Icons/PNG/9.png";
import Icon2 from "../Images/Icons/PNG/10.png"
import Icon3 from "../Images/Icons/PNG/11.png"
import Icon4 from "../Images/Icons/PNG/12.png"
function ServicesDropDown(props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="dropdown-menu " id="menu" onClick={props.onClick}>
          <div className="services-head-div1 px-2">
            <div className="services-drop-flex1">
              <h4 className="header-drop-head1">START A BUSINESS</h4>
              <Link to="/" className="header-drop-link1">
                VIEW ALL
              </Link>
            </div>
            <div className="services-head-div3 py-4">
              <div className="services-div3-inner">
              <Link to="/llc" className="services-drop-flex2">
                <img src={Icon1} alt="" className="services-head-img" />
                <div className="s-head-inner-flex1 d-flex flex-column justify-content-start ">
                  <h1 className="s-head1">Form an LLC</h1>
                  <p className="p-para m-0">
                    The most popular choice for business owners.
                  </p>
                </div>
                <i class="fa-solid fa-arrow-right services-inner-arrow"></i>
              </Link>

             
              </div>
              <div className="services-div3-inner">
              <Link to="/form-c-corporation" className="services-drop-flex2">
                <img src={Icon2} alt="" className="services-head-img" />
                <div className="s-head-inner-flex1 d-flex flex-column justify-content-start ">
                  <h1 className="s-head1">Form a C Corporation</h1>
                  <p className="p-para m-0">Big business? Opt for a C Corp
                  </p>
                </div>
                <i class="fa-solid fa-arrow-right services-inner-arrow"></i>
              </Link>
             
               
              </div>
              <div className="services-div3-inner">
              <Link to="/form-s-corporation" className="services-drop-flex2">
                <img src={Icon3} alt="" className="services-head-img" />
                <div className="s-head-inner-flex1 d-flex flex-column justify-content-start ">
                  <h1 className="s-head1">Form an S Corporation</h1>
                  <p className="p-para m-0">Save money on taxes as your business grows.</p>
                </div>
                <i class="fa-solid fa-arrow-right services-inner-arrow"></i>
              </Link>
          
               
              
              </div>
              <div className="services-div3-inner">
              <Link to="/start-a-nonprofit" className="services-drop-flex2">
                <img src={Icon4} alt="" className="services-head-img" />
                <div className="s-head-inner-flex1 d-flex flex-column justify-content-start ">
                  <h1 className="s-head1">Form a Non Profit</h1>
                  <p className="p-para m-0">A business that makes the world a better place.
                  </p>
                </div>
                <i class="fa-solid fa-arrow-right services-inner-arrow"></i>
              </Link>
              </div>
       
            </div>
            <div className="row">
              <div className="col-4 services-div3-inner">
              <HeaderLink path="/amendement" text="Amendement"/>
                <HeaderLink path='/company-name-change' text="Company Name Change"/>
                <HeaderLink path='/registered-agent' text="Registered Agent"/>
                <HeaderLink path='/virtual-address' text="Virtual Address"/>
                <HeaderLink path='tax-id-ein' text="EIN (Employer Identification No.)"/>
                <HeaderLink path="/certificate-of-good-standing" text="Cerficate of Good Standing"/>
             
              </div>
              <div className="col-4 services-div3-inner">
              <HeaderLink path="/file-dba"  text="Doing Buisness As` Name (DBA)"/>
                <HeaderLink path="/us-tax-marketplace"  text="Tax Exemption of US Marketplaces"/>
                <HeaderLink path="/change-of-registered-agent"  text="Change of Registered Agent"/>
                <HeaderLink  path="/business-license-research-package" text="Buisness License or Premit"/>
                <HeaderLink path="/annual-report" text="Submit  an Annual Report"/>
                <HeaderLink path="/business-accounting" text="Get a Free Text Consultation"/>
               
             
              </div>
              <div className="col-4 services-div3-inner">
              <HeaderLink path="llc-s-corp-election" text="File an S  Crop Election"/>
                <HeaderLink path="/trademark-name-search" text="Get a Trademark"/>
                <HeaderLink path="/corporate-llc-kit" text="Order a Corporative / LLC kit"/>
                <HeaderLink  path="/business-finance-accounting" text="Finance and Accounting"/>
                <HeaderLink path="/dissolution" text="Disslove your Comapny"/>
                <HeaderLink path="/reinstatement-order" text="Get Reinstated"/>
              </div>
            </div>
          </div>
          {/* <div className="d-flex align-items-center flex-column justify-content-start pb-3">
                <p className="p-para p-para2 pb-2">
                  Not sure which entity type is right for you?
                </p>
                <Link to="/quiz" className="d-flex services-drop-link ">
                  <i class="fa-solid fa-arrow-right services-inner-arrow2"></i>
                  <p className="services-link-text"> Take this quiz</p>
                </Link>
              </div> */}
        </div>
      </motion.div>
    </>
  );
}

export default ServicesDropDown;
