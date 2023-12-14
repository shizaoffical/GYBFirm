import React, {useState} from 'react'

function FAQSection(props) {


    const [showNamesb, setShowNamesb] = useState(false);

    const handleToggleb = () => {
      setShowNamesb(!showNamesb);
    };
  
  return (
    <div>
         <div className={`faq-section ${props.faqclass}`} onClick={handleToggleb}>
          <div className=' faq-section-main-div '>
          <button onClick={handleToggleb} className='faq-section-btn' >
              {showNamesb ? <><i class="fas fa-arrow-up faq-section-icon"></i></> : 
              <><i class="fas fa-arrow-down  faq-section-icon"></i></>}
            </button>
            <h4 className='faq-section-heading' onClick={handleToggleb} >{props.heading}</h4>
          </div>
          <div>
            {
              showNamesb &&
              <ul className='faq-answer '>
                {props.texta && <> <li>{props.texta}</li></>}
                {props.textb && <> <li>{props.textb}</li></>}
                {props.textc && <> <li>{props.textc}</li></>}
                {props.textd && <> <li>{props.textd}</li></>}
                {props.texte && <> <li>{props.texte}</li></>}
                {props.textf && <> <li>{props.textf}</li></>}
                {props.textg && <> <li>{props.textg}</li></>}
                {props.texth && <> <li>{props.textg}</li></>}

              </ul>
            }
          </div>
          </div>
    </div>
  )
}

export default FAQSection
