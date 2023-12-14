import React from 'react'
import FAQSection from '../Components/FAQSection'
import MainButton from '../Components/MainButton'

function FAQ() {


  return (
    <>
    <center>
      <div className='faq-main faq-llc container-fluid'>
        <h1 className='faq-heading'>Got a Question? Start Here</h1>
        <FAQSection  faqclass="faq-llc-div"
        heading="Can I Form a Business with Low Cost?"
        texta="Yes! GYB Firm is the only formation service offering truly business formation."
         textb="You can form your LLC, S Corp, C Corp or nonprofit for $39 + State Fee"
          textc="You have to pay the fees required by your state with $39"
           textd="Checkout our business formation page for more information." />
        <FAQSection  faqclass="faq-llc-div"
         heading="How much do you charge to register an LLC?"
        texta="Yes! GYB Firm is the only Registration service offering genuinely $39 LLC formation."
         textb="You'll be able shape your LLC, S Corp, C Corp or nonprofit for $39 + State fee."
         textc="You simply ever pay the expenses required by your state. GYB Firm filing administrations are just $39."
         textd="Checkout our business formation page for more details."

         />
        <FAQSection  faqclass="faq-llc-div"
         heading="Do Your Prices GYB Firm Filing Fees?"
        texta="With our basic company formation packages, you only pay the fee required by your state – This is the fee that you would still need to pay to form a business, even if you were doing the whole process by yourself.
        "
         textb="There are states that charge online processing fees for filing your paperwork, but once again, those fees come from the state, GYB Firm charges only $39."
          textc="If you choose the $39 LLC, S Corp, C Corp or nonprofit package.  You'll be able shape your LLC, S Corp, C Corp or nonprofit for $39 + State fee"  />
        <FAQSection  faqclass="faq-llc-div"
         heading="Are There Any Hidden Costs?"
        texta="Absolutely not! We pride ourselves on complete transparency."
         textb="There are no hidden costs or sneaky subscriptions involved when forming your business with GYB Firm, 
          other formation specialists."/>
        <center>
           <MainButton text="Learn More" path="/privacy-policy" anotherclass="faq-btn"/>
        </center>
       
      </div>
    </center>
      

    </>
  )
}

export default FAQ