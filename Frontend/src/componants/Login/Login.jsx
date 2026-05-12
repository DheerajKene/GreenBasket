import React, { useState, useEffect } from 'react'
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
    captcha: '',
    rememberMe: false
  })

  const [captchaCode, setCaptchaCode] = useState('')
  const [errors, setErrors] = useState({})

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  useEffect(() => {
    setCaptchaCode(generateCaptcha())
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required'
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits'
    if (!formData.password) newErrors.password = 'Password is required'
    if (!formData.captcha) newErrors.captcha = 'Captcha is required'
    else if (formData.captcha !== captchaCode) newErrors.captcha = 'Captcha does not match'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      // Handle login logic here (e.g., API call)
      console.log('Login data:', formData)
      alert('Login successful!')
      // Reset form and generate new captcha
      setFormData({
        mobile: '',
        password: '',
        captcha: '',
        rememberMe: false
      })
      setCaptchaCode(generateCaptcha())
    } else {
      setErrors(validationErrors)
    }
  }

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha())
  }

  return (
    <div>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your 10-digit mobile number"
            />
            {errors.mobile && <div className="error">{errors.mobile}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="captcha">Captcha</label>
            <div className="captcha-display">
              <span className="captcha-code">{captchaCode}</span>
              <button type="button" onClick={refreshCaptcha} className="refresh-btn">Refresh</button>
            </div>
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              placeholder="Enter the captcha code"
            />
            {errors.captcha && <div className="error">{errors.captcha}</div>}
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login