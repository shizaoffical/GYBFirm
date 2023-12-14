import React from 'react'
import { Container } from 'react-bootstrap'
import LargeText from '../../Components/LargeText'
import Text from '../../Components/Text'
function PrivacyPolicy() {
  return (
    <Container className='term-condition-main '>
    <center>
        <h1 className='term-condition-heading '>Privacy Policy
         <Text text="We at GYB Firm.com, LLC have designed our business practices to safeguard your privacy."/>
        </h1>
       
    </center>
<LargeText heading="Collecting Your Information" 
text="This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website."/>

<LargeText heading="Using Your Information"
text="Our services in preparing your tax returns are limited to tax return preparation, and our preparation of a return should not be viewed as assurance that any particular reported position is correct. If we become aware of a return position for which we believe a penalty under the Code is likely to apply, we will bring that position to your attention. If you would like us to advise you concerning any specific matter on your tax return, please contact us to discuss expanding our scope of our services. Any Tax Advice rendered in connection with the preparation of any tax return is subject to the provisions described under “Terms Regarding Tax Advice” below."/>

<LargeText heading="Protecting Your Information" 
text="Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology."/>

<LargeText heading="Third-Party Disclosure"
text="We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property or safety."/>
   
    
</Container>
  )
}

export default PrivacyPolicy