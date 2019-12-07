import React from "react"
import { MDBContainer, MDBFooter } from "mdbreact"
import './Footer.css'

const FooterPage = () => {
  return (
    <MDBFooter color="default-color" className="font-small pt-3 pb-3 mt-4 footer-content">
      <MDBContainer className="text-center" fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/GinoMoena/"> Gino Moena </a>
      </MDBContainer>
    </MDBFooter>
  )
}

export default FooterPage