import React , {useState}from 'react'
import Image from "../Images/Image/Team-Work.png"
import Logo from "../Images/Image/GYB.png"
import { Link } from 'react-router-dom'
import Heading from '../Components/Heading'
import MainButton from '../Components/MainButton'
function Login() {
  const [email, setEmail] = useState('johnmith@gmail.com');
  return (
    <>
      <div className='login'>
        <div className='login-col-a'>
          <i class="fa-solid fa-arrow-left  login-back-icon rounded-pill"></i>
          <div className='login-col-a-col'>
            <Link className="m-0 p-0 pb-2 me-lg-4" to='/'>
              <img src={Logo} alt="" className='header-logo' />
            </Link>
            <Heading heading="Sign in to GYB Firm" />
            <label className='login-email-label'>Enter Your Email:<br />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className='login-email-input' />
            </label>
            <MainButton text="Next" icon={<i className='fa-solid fa-arrow-right' ></i>} anotherclass="login-btn"/>
          </div>

        </div>
        <div className='login-col-b'>
          <img src={Image} alt="" className='login-image' />
        </div>
      </div>

    </>
  )
}

export default Login