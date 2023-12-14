import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import HeaderLink from '../Components/HeaderLink'
import Icon1 from "../Images/logo/Logo-2.png"
function ResourcesCenterDropDown(props) {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      <div className="dropdown-menu dropdown-menu2" id="menu" onClick={props.onClick}>
          <div className="services-head-div1 px-2">
            <div className="services-div3-inner">
              <Link to="/" className="services-drop-flex2 services-drop-flex2-2 pb-3">
                <img src={Icon1} alt="" className="services-head-img" />
                <div className="s-head-inner-flex1 d-flex flex-column justify-content-start ">
                  <h1 className="s-head1">Make a Business Plan</h1>
                  <p className="p-para pe-4 m-0">
                  Tools, guidelines, and resources to assist you in researching your alternatives
                  </p>
                </div>
              </Link>
                <HeaderLink path="/business-entity-comparison" text="Compare Business Entities"/>
                <HeaderLink path="/business-name-generator" text="Business Name Generator"/>
                <HeaderLink path="/start-a-business"text="Business Industry Guides"/>
                <HeaderLink path="/business-name-search"text="Business Name Search Tool"/>
              <div className='py-2'>  <p className="p-para p-para2 pb-2">
                  Not sure which entity type is right for you?
                </p>
                <Link to="/quiz" className="d-flex services-drop-link ">
                  <i class="fa-solid fa-arrow-right services-inner-arrow2"></i>
                  <p className="services-link-text"> Take this quiz</p>
                </Link>
              </div>

            </div>
          </div>
          <div className="services-head-div1 px-2">
            <div className="services-div3-inner">
              <Link to="/your-buisness" className="services-drop-flex2 services-drop-flex2-2 pb-3">
                <img src={Icon1} alt="" className="services-head-img" />
                <div className="s-head-inner-flex1 d-flex flex-column justify-content-start ">
                  <h1 className="s-head1">Begin Your Business</h1>
                  <p className="p-para pe-4 m-0">
                  Tools, guidelines, and resources to assist you in researching your alternatives
                  </p>
                </div>
              </Link>
              <HeaderLink path="/guides-start-business" text="Business Startup Guide"/>
              <HeaderLink path="/limited-liability-company" text="What is an LLC?"/>
               <HeaderLink path="/llc-state-information" text="LLC Information By State"/>
                <HeaderLink path="/state-filing-fees" text="State Filling Fees"/>
              <div className='py-2'>  <p className="p-para p-para2 pb-2">
                  Not sure which entity type is right for you?
                </p>
                <Link to="/quiz" className="d-flex services-drop-link ">
                  <i class="fa-solid fa-arrow-right services-inner-arrow2"></i>
                  <p className="services-link-text"> Take this quiz</p>
                </Link>
              </div>

            </div>
          </div>
          <div className="services-head-div1 px-2">
            <div className="services-div3-inner">
              <Link to="/your-buisness" className="services-drop-flex2 services-drop-flex2-2 pb-3">
                <img src={Icon1} alt="" className="services-head-img" />
                <div className="s-head-inner-flex1 d-flex flex-column justify-content-start ">
                  <h1 className="s-head1">Expand Your Business</h1>
                  <p className="p-para pe-4 m-0">
                  Tools, guidelines, and resources to assist you in researching your alternatives
                  </p>
                </div>
              </Link>
              <HeaderLink path="/young-enterpreneurgrant" text="Do I Need a Business License"/>
              <HeaderLink path="/" text="State Filling Time"/>
                <HeaderLink path="/" text="What To Do After Forming Your LLC?"/>
              <div className='py-2'>  <p className="p-para p-para2 pb-2">
                  Not sure which entity type is right for you?
                </p>
                <Link to="/quiz" className="d-flex services-drop-link ">
                  <i class="fa-solid fa-arrow-right services-inner-arrow2"></i>
                  <p className="services-link-text"> Take this quiz</p>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ResourcesCenterDropDown