import React from 'react'
import { motion } from "framer-motion"
import HeaderLink from '../Components/HeaderLink'

function AboutDropDown(props) {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} > 
      <div className="dropdown-menu  dropdown-menu3" id="menu" onClick={props.onClick}>
      <div className="services-div3-inner py-3">
                <HeaderLink path="/testimonials" text="Testimonials"/>
                <HeaderLink path="/choose-gybfirm" text="Why Choose Us"/>
                <HeaderLink path="/contact-us" text="Contact Us"/>
                <HeaderLink path='/new-sales' text="New Clients"/>
              </div>

      </div>
      </motion.div>
    </>
  )
}

export default AboutDropDown