import {Component, useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import 'react-phone-input-2/lib/style.css'
import OTPInput from 'otp-input-react'
import './index.css'

function Success() {
  const location = useLocation()
  const [otp, setOtp] = useState('')
  const [showOTP, setShowOTP] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="signin-bg">
      <img
        src="https://i.ibb.co/M9Tz4qq/Artboard-1.png"
        alt="Artboard-1"
        border="0"
      />
      <h1 className="welcome">Welcome to AdmitKard </h1>
      <p className="signin">
        In order to provide you with a custom experience, we need to ask few
        questions.
      </p>
      <div className="sign-button-container">
        <button type="button" className="sign-button">
          Get Started
        </button>
      </div>
      <p className="signin">This will take 5 mins</p>
    </div>
  )
}

export default Success
