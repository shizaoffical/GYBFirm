import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import FooterSectionC from '../Footer/FooterSectionC'
import { Container } from 'react-bootstrap'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      <Container>
        <FooterSectionC/>
      </Container>
      
      
    </div>
  )
}

export default Layout