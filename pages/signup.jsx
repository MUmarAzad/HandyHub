'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, Eye, EyeOff } from 'lucide-react'

export default function Signup() {
  const [signupMethod, setSignupMethod] = useState('email')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="auth-container">
      <div className="auth-content">
        <img
          src="../src/assets/images/logo.svg"
          alt="HandyHub Logo"
          width={100}
          height={100}
          className="auth-logo mx-auto"
        />
        <h2 className="auth-title">Create your account</h2>
        <p className="auth-subtitle">
          Or{' '}
          <Link to="/signin" className="link-primary">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="auth-form-container">
        <form className="auth-form">
          <div className="auth-method-toggle">
            <button
              type="button"
              onClick={() => setSignupMethod('email')}
              className={`auth-method-button ${signupMethod === 'email' ? 'active' : ''}`}
            >
              <Mail className="auth-method-icon" />
              Email
            </button>
            <button
              type="button"
              onClick={() => setSignupMethod('phone')}
              className={`auth-method-button ${signupMethod === 'phone' ? 'active' : ''}`}
            >
              <Phone className="auth-method-icon" />
              Phone
            </button>
          </div>

          {signupMethod === 'email' ? (
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-input"
              />
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="form-input"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                className="form-input"
              />
              <button
                type="button"
                className="password-toggle-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="password-toggle-icon" />
                ) : (
                  <Eye className="password-toggle-icon" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="button primary full-width"
          >
            Sign up
          </button>
        </form>

        <div className="auth-divider">
          <span className="auth-divider-text">Or continue with</span>
        </div>

        <div className="social-login-buttons">
          <a href="#" className="social-login-button">
            <span className="sr-only">Sign up with Facebook</span>
            <svg className="social-icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="social-login-button">
            <span className="sr-only">Sign up with Twitter</span>
            <svg className="social-icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="social-login-button">
            <span className="sr-only">Sign up with GitHub</span>
            <svg className="social-icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

