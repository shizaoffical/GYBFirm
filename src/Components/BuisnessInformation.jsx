import React from 'react'

function BuisnessInformation(props) {
    return (
        <div className='buisness-information'>

            <ul className='buisness-information-ul'>
                {props.heading && <li className='buisness-information-heading  '>{props.heading}</li>}
                {props.li1 && <li className='buisness-information-ul-li'>{props.li1}</li>}
                {props.li2 && <li className='buisness-information-ul-li'>{props.li2}</li>}
                {props.li3 && <li className='buisness-information-ul-li'>{props.li3}</li>}
                {props.li4 && <li className='buisness-information-ul-li'>{props.li4}</li>}
                {props.li5 && <li className='buisness-information-ul-li'>{props.li5}</li>}
                {props.li6 && <li className='buisness-information-ul-li'>{props.li6}</li>}
                {props.heading2 && <li className='buisness-information-heading  '>{props.heading2}</li>}
                {props.li7 && <li className='buisness-information-ul-li'>{props.li7}</li>}
                {props.li8 && <li className='buisness-information-ul-li'>{props.li8}</li>}
                {props.li9 && <li className='buisness-information-ul-li'>{props.li9}</li>}
                {props.li10 && <li className='buisness-information-ul-li'>{props.li10}</li>}
                {props.li11 && <li className='buisness-information-ul-li'>{props.li11}</li>}
                {props.li12 && <li className='buisness-information-ul-li'>{props.li12}</li>}
                {props.heading3 && <li className='buisness-information-heading  '>{props.heading3}</li>}
                {props.li13 && <li className='buisness-information-ul-li'>{props.li13}</li>}
                {props.heading4 && <li className='buisness-information-heading  '>{props.heading4}</li>}
                {props.li14 && <li className='buisness-information-ul-li'>{props.li14}</li>}
                {props.heading5 && <li className='buisness-information-heading  '>{props.heading5}</li>}
                {props.li15 && <li className='buisness-information-ul-li'>{props.li15}</li>}
                {props.heading6 && <li className='buisness-information-heading  '>{props.heading6}</li>}
                {props.li16 && <li className='buisness-information-ul-li'>{props.li16}</li>}
                {props.heading7 && <li className='buisness-information-heading  '>{props.heading7}</li>}
                {props.li17 && <li className='buisness-information-ul-li'>{props.li17}</li>}
                {props.heading8 && <li className='buisness-information-heading  '>{props.heading8}</li>}
                {props.li18 && <li className='buisness-information-ul-li'>{props.li18}</li>}
            </ul>
        </div>
    )
}

export default BuisnessInformation