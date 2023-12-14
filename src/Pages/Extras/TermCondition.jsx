import React from 'react'
import { Container } from 'react-bootstrap'
import LargeText from '../../Components/LargeText'

function TermCondition() {
    return (
        <Container className='term-condition-main '>
            <center>
                <h1 className='term-condition-heading '>GYB Firm Legal Disclaimer and Terms of Service</h1>
            </center>
    <LargeText heading="Terms & Conditions for Tax Services" 
    text="In the course of delivering services relating to tax return preparation, tax advisory, and assistance in tax controversy matters, GYB Firm (we or us) applies customary practices intended to provide these services in a cost effective manner. This document describes certain of these customary practices, as well as other standard terms, conditions, and limitations relating to our provision of tax services. Except to the extent we expressly agree in written instrument signed by our authorized representative that specifically refers to the engagement covered by this Engagement Letter, all services that we provide to any client or third party (you) relating to tax return preparation, tax consultation and advice, representation in any tax controversy matter, or any other federal, state, local, or foreign tax matter, are subject to the following terms, conditions, and limitations (these Terms). References to the “Engagement Letter” mean the letter or other document describing the scope of our services and the associated fee arrangement to which these Terms are attached. References to the “Code” mean the Internal Revenue Code of 1986, as amended."/>

    <LargeText heading="Terms Regarding Tax Return Preparation
"
     text="Our services in preparing your tax returns are limited to tax return preparation, and our preparation of a return should not be viewed as assurance that any particular reported position is correct. If we become aware of a return position for which we believe a penalty under the Code is likely to apply, we will bring that position to your attention. If you would like us to advise you concerning any specific matter on your tax return, please contact us to discuss expanding our scope of our services. Any Tax Advice rendered in connection with the preparation of any tax return is subject to the provisions described under “Terms Regarding Tax Advice” below."/>

    <LargeText heading="Reliance on Information" 
    text="We will rely on the financial statements or other financial information that you provide. We will not investigate or verify any facts underlying the transactions reported on your tax return. If the actual facts differ from the facts represented to or understood by us, or if there are related facts of which we are not aware, the reporting of the transactions could be materially different than that reported on the returns prepared by us."/>

    <LargeText heading="Terms Regarding Tax Advice"
     text="We will rely on the financial statements or other financial information that you provide. We will not investigate or verify any facts underlying the transactions reported on your tax return. If the actual facts differ from the facts represented to or understood by us, or if there are related facts of which we are not aware, the reporting of the transactions could be materially different than that reported on the returns prepared by us."/>
           
            
        </Container>
    )
}

export default TermCondition