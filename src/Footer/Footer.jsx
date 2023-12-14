import React from 'react'
import FooterSectionA from './FooterSectionA'
import { Container } from 'react-bootstrap'
import FooterSectionB from './FooterSectionB'
import EmailSection from "../Home/EmailSection"

function Footer() {
  return (
    <>
     <Container> 
      <EmailSection/>
        <FooterSectionA/>
       <FooterSectionB/>
    </Container>
     
    </>
   
  )
}

export default Footer