import {Component, useState} from 'react'
import {useHistory, useLocation, Link} from 'react-router-dom'
import 'react-phone-input-2/lib/style.css'
import OTPInput from 'otp-input-react'
import './index.css'

function Otp(props) {
  const location = useLocation()
  const history = useHistory()
  const [otp, setOtp] = useState('')
  const [showOTP, setShowOTP] = useState(false)
  const [user, setUser] = useState(null)
  const Number = location.state.ph

  function handleClick() {
    history.push('./Success')
  }

  return (
    <div className="signin-bg">
      <img
        src="https://i.ibb.co/j8f1xrw/undraw-confirmed-81ex.png"
        alt="undraw-confirmed-81ex"
        border="0"
      />
      <h1 className="welcome">Please Verify your Mobile Number </h1>
      <p className="signin">An OTP is sent to {Number}</p>
      <Link to="/">Change phone number</Link>

      <div className="mobile-container">
        <OTPInput
          value={otp}
          onChange={setOtp}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          secure
        />
        <p className="send-sms">Didn't receive the code? Resend</p>
      </div>
      <div className="sign-button-container">
        <button type="button" className="sign-button" onClick={handleClick}>
          Verify
        </button>
      </div>
    </div>
  )
}

export default Otp
