import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FooterSectionB() {


  const [showNamesa, setShowNamesa] = useState(true);
  const [showNamesb, setShowNamesb] = useState(true);
  const [showNamesc, setShowNamesc] = useState(true);
  const [showNamesd, setShowNamesd] = useState(true);
  const [showNamese, setShowNamese] = useState(true);



  const handleTogglea = () => {
    setShowNamesa(!showNamesa);
  };
  const handleToggleb = () => {
    setShowNamesb(!showNamesb);
  }; const handleTogglec = () => {
    setShowNamesc(!showNamesc);
  }; const handleToggled = () => {
    setShowNamesd(!showNamesd);
  }; const handleTogglee = () => {
    setShowNamese(!showNamese);
  };

  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(min-width: 991px)")
    setShowNamesa(mediaWatcher.matches);
    setShowNamesb(mediaWatcher.matches);
    setShowNamesc(mediaWatcher.matches);
    setShowNamesd(mediaWatcher.matches);
    setShowNamese(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setShowNamesa(e.matches);
      setShowNamesb(e.matches);
      setShowNamesc(e.matches);
      setShowNamesd(e.matches);
      setShowNamese(e.matches);

    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen)
    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    }

  }, [])

  return (
    <div>

      <div className='footer-b'>
        {/* a */}
        <div className="footer-b-column">
          <div className='d-flex justify-content-between'>
            <h4 className='footer-b-column-heading'>SERVICES</h4>
            <button onClick={handleToggleb} className="down-icon">
              {showNamesb ? <><i class="fas fa-chevron-up"></i></> : <><i class="fas fa-chevron-down"></i></>}
            </button>
          </div>
          <div className={`footer-b-names ${showNamesb ? 'show' : 'hide'}`}>
            {
              showNamesb &&
              <div className='d-flex flex-column gap-2'>
                <Link to="/register-agent" className='footer-b-text'>Get a Registered Agent</Link>
                <Link to="/annual-report" className='footer-b-text'>Submit an Annual Report</Link>
                <Link to="/certificate-of-good-standing" className='footer-b-text'>Get a Certificate of Good Standing</Link>
                <Link to="/company-name-change" className='footer-b-text'>Company Name Change</Link>
                <Link to="/change-of-registered-agent" className='footer-b-text'> Change Of Registered Agent</Link>
                <Link to="/tax-id-ein" className='footer-b-text'>Get an EIN / TAX Number</Link>
                <Link to="/business-license-research-package" className='footer-b-text'>Business License Research Package</Link>

                <Link to="/llc-s-corp-election" className='footer-b-text'>File for an S Corporation</Link>
              </div>
            }
          </div>

        </div>
        {/* b */}

        <div className="footer-b-column">
          <div className='d-flex justify-content-between'>
            <h4 className='footer-b-column-heading'>ENTITY TYPES</h4>
            <button onClick={handleTogglea} className="down-icon">
              {showNamesa ? <><i class="fas fa-chevron-up"></i></> : <><i class="fas fa-chevron-down"></i></>}
            </button>
          </div>

          <div className={`footer-b-names ${showNamesa ? 'show' : 'hide'}`}>
            {
              showNamesa &&
              <div className='d-flex flex-column gap-2'>
                <Link to="/llc" className='footer-b-text'>LLC</Link>
                <Link to="/form-s-corporation" className='footer-b-text'>S Corporation</Link>
                <Link to="/form-c-corporation" className='footer-b-text'>C Corporation</Link>
                <Link to="/start-a-nonprofit" className='footer-b-text'>Nonprofit</Link>
              </div>
            }
          </div>

        </div>
        {/* c */}
        <div className="footer-b-column">
          <div className='d-flex justify-content-between'>
            <h4 className='footer-b-column-heading'>QUICK LINKS</h4>
            <button onClick={handleTogglec} className="down-icon">
              {showNamesc ? <><i class="fas fa-chevron-up"></i></> : <><i class="fas fa-chevron-down"></i></>}
            </button>
          </div>
          <div className={`footer-b-names ${showNamesc ? 'show' : 'hide'}`}>
            {
              showNamesc &&
              <div className='d-flex flex-column gap-2'>
                <Link to="/amendement" className='footer-b-text'>Amendment</Link>
                <Link to="/file-dba" className='footer-b-text'>Choose a Name or DBA</Link>
                <Link to="/business-accounting" className='footer-b-text'>Free Tax Consultation</Link>
                <Link to="/reinstatement-order" className='footer-b-text'>Reinstatement </Link>
                <Link to="/about" className='footer-b-text'>About Us</Link>

              </div>
            }

          </div>

        </div>
        {/* d */}
        <div className="footer-b-column">
          <div className='d-flex justify-content-between'>
            <h4 className='footer-b-column-heading'>RESOURCES</h4>
            <button onClick={handleToggled} className="down-icon">
              {showNamesd ? <><i class="fas fa-chevron-up"></i></> : <><i class="fas fa-chevron-down"></i></>}
            </button>
          </div>
          <div className={`footer-b-names ${showNamesd ? 'show' : 'hide'}`}>
            {
              showNamesd &&
              <div className='d-flex flex-column gap-2'>
                <Link to="/choose-gybfirm" className='footer-b-text'>Why Choose Us</Link>
                <Link to="/testimonials" className='footer-b-text'>Testimonials</Link>
                <Link to="/corporate-llc-kit" className='footer-b-text'>Get a Corporate / LLC Kit</Link>
              </div>
            }

          </div>

        </div>
        {/* e */}
        <div className="footer-b-column">
          <div className='d-flex justify-content-between'>
            <h4 className='footer-b-column-heading'> SUPPORT</h4>
            <button onClick={handleTogglee} className="down-icon">
              {showNamese ? <><i class="fas fa-chevron-up"></i></> : <><i class="fas fa-chevron-down"></i></>}
            </button>
          </div>
          <div className={`footer-b-names ${showNamese ? 'show' : 'hide'}`}>
            {
              showNamese &&
              <div className='d-flex flex-column gap-2'>
                <Link to="/privacy-policy" className='footer-b-text'>Privacy Policy</Link>
                <Link to="/term&conditions" className='footer-b-text'>Legal Disclaimer</Link>
                <Link to="/dissolution" className='footer-b-text'>Dissolution</Link>
              </div>
            }

          </div>

        </div>
        {/* f */}
        <div className="footer-b-column">
          <div className='d-flex justify-content-between'>
            <h4 className='footer-b-column-heading'> Get In Touch </h4>
            <button onClick={handleTogglee} className="down-icon">
              {showNamese ? <><i class="fas fa-chevron-up"></i></> : <><i class="fas fa-chevron-down"></i></>}
            </button>
          </div>
          <div className={`footer-b-names ${showNamese ? 'show' : 'hide'}`}>
            {
              showNamese &&
              <div className='d-flex flex-column gap-2'>
                <span className='footer-b-address'>
                  <i className='fa-solid fa-house pe-2'></i>
                  Business Address:<br /> 102 Gold Ave SW # 171	<br /> Albuquerque NM 87102
                </span>
                <Link to="https://api.whatsapp.com/send/?phone=%2B923267647709&text&type=phone_number&app_absent=0"
                  target="_blank" className='footer-b-text'>
                  <span><i className='fa-solid fa-phone'></i></span> (575) 247-6989
                </Link>
                <Link to="contact@Gyb Firm.com" className='footer-b-text'>
                  <span><i className='fa-solid fa-envelope'></i></span> contact@gybfirm.com
                </Link>
              </div>
            }

          </div>

        </div>

      </div>
    </div>
  )
}

export default FooterSectionB