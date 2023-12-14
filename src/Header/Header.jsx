import React, { useState } from 'react'
import ServicesDropDown from "./ServicesDropDown"
import { motion } from "framer-motion"
import ResourcesCenterDropDown from "./ResourcesCenterDropDown"
import AboutDropDown from "./AboutDropDown"
import { Link } from 'react-router-dom'
import MainButton from '../Components/MainButton'
import Logo from "../Images/Image/GYB.png"
import HeaderLink from '../Components/HeaderLink'
function Header() {
  const [show, setShow] = useState(false);
  const [Services, setServices] = useState(false);
  const [Resources, setResources] = useState(false);
  const [About, setAbout] = useState(false);
  const ServicesDrop = () => {
    setResources(false)
    setAbout(false)
    setServices(true);
  }
  const ResourcesDrop = () => {

    setAbout(false)
    setServices(false);
    setResources(true)
  }
  const AboutDrop = () => {
    setResources(false)
    setServices(false);
    setAbout(true)
  }
  const ResponsiveBtn = () => {
    if (!show) {
      document.getElementById('navbar').style.height = "auto";
      setShow(true);
    }
    else {
      setShow(false);
      document.getElementById('navbar').style.height = "80px";

    }
  }
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
        <nav className="navbar navbar-expand-lg bg-white " id="navbar" >
          <div className="container-fluid">
            <Link className="navbar-brand m-0 p-0 pb-2 me-lg-4" to="/">
              <img src={Logo} alt="" className='header-logo' />
            </Link>
            <Link to="tel:+92-326-764-7709" className='header-tel-link d-flex align-items-center justify-content-center header-links3 '>
              <i class="fa-solid fa-phone header-phone-icon"></i>
            </Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              onClick={ResponsiveBtn} >

              {show ? <i class="fa-solid fa-times mobile-icon"></i> :
                <i class="fa-solid fa-bars mobile-icon"></i>}
            </button>
            <div className={` nav-link-container ${show ? 'collapse navbar-collapse ' : 'collapse navbar-collapse  active'}`
            } id="navbarSupportedContent">
              {show &&
                <>
                  <HeaderLink path="/how-it-start" text="How It Starts" headerlink2="pt-3" onClick={() => setShow(false)} />
                  <HeaderLink path="/tex-id-ein" text="Resources" headerlink2="pt-3" onClick={() => setShow(false)} />
                  <HeaderLink path="/amendement" text="Services" headerlink2="pt-3" onClick={() => setShow(false)} />
                  <HeaderLink path="/testimonials" text="Testimonials" headerlink2="pt-3" onClick={() => setShow(false)} />
                  <HeaderLink path="/choose-gybfirm" text="Why Choose Us" headerlink2="pt-3" onClick={() => setShow(false)} />
                  <HeaderLink path="https://www.order.gybfirm.com/order" text="Contact Us" headerlink2="pt-3" onClick={() => setShow(false)} />
                  <HeaderLink path='/new-sales' text="New Clients" headerlink2="pt-3" onClick={() => setShow(false)} />
                  {/* <div>
                    <Link to="tel:+92-326-764-7709" className=' header-tel-link2 d-flex align-items-center justify-content-start header-links3 ' onClick={() => setShow(false)}>
                      <i class="fa-solid fa-phone"></i>
                      <p>	(575) 247-6989</p>
                    </Link>
                    <MainButton anotherclass="navbar-btn" text="Register Now" path="/register" onClick={() => setShow(false)} />
                    <MainButton anotherclass="navbar-btn2" text="Login" path="/login" onClick={() => setShow(false)} />



                  </div> */}

                </>}

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item header-link4">
                  <Link className="nav-link " aria-current="page" to="/how-it-start"  >How It Starts</Link>
                </li>
                {/* servives */}
                <li className="nav-item dropdown header-link4">
                  <Link className="nav-link " to="/"
                    onMouseEnter={ServicesDrop}
                    onMouseLeave={() => setServices(false)}
                  >
                    Services
                    {Services ? <><i class="fas fa-arrow-up"></i></> : <><i class="fas fa-arrow-down"></i></>}
                  </Link>
                  {
                    Services && <>
                      <div
                        onMouseEnter={ServicesDrop}
                        onMouseLeave={() => setServices(false)} >
                        <ServicesDropDown onClick={() => setServices(false)} />
                      </div>
                    </>}
                </li>
                {/* resources */}
                <li className="nav-item dropdown header-link4">
                  <Link className="nav-link " to="/"
                    onMouseEnter={ResourcesDrop}
                    onMouseLeave={() => setResources(false)}   >
                    Information Lab
                    {Resources ? <><i class="fas fa-arrow-up"></i></> : <><i class="fas fa-arrow-down"></i></>}

                  </Link>
                  {
                    Resources && <>
                      <div onMouseEnter={ResourcesDrop} onMouseLeave={() => setResources(false)} >
                        <ResourcesCenterDropDown onClick={() => setResources(false)} />
                      </div>
                    </>}
                </li>
                {/* about */}
                <li className="nav-item dropdown header-link4">
                  <Link className="nav-link " to="/about"
                    onMouseEnter={AboutDrop}
                    onMouseLeave={() => setAbout(false)}  >
                    About Us
                    {About ? <><i class="fas fa-arrow-up"></i></> : <><i class="fas fa-arrow-down"></i></>}
                  </Link>
                  {
                    About && <>
                      <div onMouseEnter={AboutDrop}
                        onMouseLeave={() => setAbout(false)} >
                        <AboutDropDown onClick={() => setAbout(false)} />
                      </div>  </>}
                </li>
              </ul>
            </div>
            <div className="header-links2 d-flex align-items-center justify-content-center ">

              <Link to="tel:+92-575-247-6989" className='header-tel-link d-flex align-items-center justify-content-center'>
                <i class="fa-solid fa-phone pe-2 header-phone-icon"></i>
              </Link>
              {/* <p className="nav-item">
                <Link className="nav-link nav-link2 " aria-current="page" to="/login">Login</Link>
              </p> */}
              {/* <MainButton anotherclass="navbar-btn" text="Register Now" path="/register" /> */}
            </div>
          </div>
        </nav>
      </motion.div>
    </>
  )
}

export default Header