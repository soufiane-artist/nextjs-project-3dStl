// In login/page.jsx
'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/api/apiAuth'
import styles from '../styles/login.css'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(loginUser({ email, password }))
      router.push('/')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Login - 3D STL Files Marketplace</title>
        <meta name="description" content="Login to access your account and download high-quality 3D printable STL files from our marketplace." />
        <meta name="keywords" content="login, 3D printing, STL files, 3D models, marketplace" />
        <meta property="og:title" content="Login - 3D STL Files Marketplace" />
        <meta property="og:description" content="Access your account to download and manage your 3D printable STL files." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="loginContainer">
        <div className="loginCard">
          <div className="loginHeader">
            <h1>Welcome Back</h1>
            <p>Login to access your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="loginButton">
              Login
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="socialLogin">
            <button className="socialButton">
              <FaGoogle /> Google
            </button>
            <button className="socialButton">
              <FaGithub /> GitHub
            </button>
          </div>

          <div className="registerLink">
            Don't have an account?{' '}
            <Link href="/signup">
            Sign-up here
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}