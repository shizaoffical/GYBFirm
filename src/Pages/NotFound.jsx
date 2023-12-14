import React from 'react'
import image from "../Images/Image/Notfound.png"
import MainButton from '../Components/MainButton'
function NotFound() {
  return (
    <div>

      <center>
      <MainButton path="/"text="Back To Home"/>
        <img src={image} alt="" style={{ width: "35%", height: "70vh" }} />
      </center>

    </div>
  )
}

export default NotFound