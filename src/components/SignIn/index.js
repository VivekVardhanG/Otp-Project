import {Component, useState} from 'react'
import {useHistory} from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './index.css'

function SignIn() {
  const [Number, setNumber] = useState('')
  const history = useHistory()

  function handleClick() {
    if (Number.length === 12) {
      history.push({
        pathname: '/Otp',
        state: {ph: Number},
      })
    } else {
      alert('Please Enter 10 digit mobile number')
    }
  }

  return (
    <div className="signin-bg">
      <img
        src="https://i.ibb.co/rtmNVfp/AK-logo.png"
        alt="AK-logo"
        border="0"
      />
      <h1 className="welcome">Welcome Back</h1>
      <p className="signin">Please sign in to your account</p>

      <div className="mobile-container">
        <p className="enter">Enter Contact number</p>
        <PhoneInput
          placeholder="Enter Your Mobile Number"
          country="in"
          onChange={value => {
            setNumber(value)
          }}
          countryCodeEditable={false}
        />
        <p className="send-sms">
          We will send you a one time sms message.
          <br /> Charges may apply.
        </p>
      </div>
      <div className="sign-button-container">
        <button type="button" className="sign-button" onClick={handleClick}>
          Sign in with OTP
        </button>
      </div>
    </div>
  )
}

export default SignIn
