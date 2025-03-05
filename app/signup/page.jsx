'use client'
import { useState } from 'react'
import styles from '../styles/login.css'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

export default function Signup() {
  const [formData, setFormData] = useState('')

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [passwordConfirm,setPasswordConfirm] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await axios.post('http://localhost:2002/api/auth/register',{
      username:username,
      email:email,
      password:password,
      passwordConfirm:passwordConfirm
    })
    .then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.username]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Sign Up - 3D STL Files Marketplace</title>
        <meta name="description" content="Create an account to start downloading and sharing high-quality 3D printable STL files on our marketplace." />
        <meta name="keywords" content="signup, register, 3D printing, STL files, 3D models, marketplace" />
        <meta property="og:title" content="Sign Up - 3D STL Files Marketplace" />
        <meta property="og:description" content="Join our community of 3D printing enthusiasts and creators." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="loginContainer">
        <div className="loginCard">
          <div className="loginHeader">
            <h1>Create Account</h1>
            <p>Join our 3D printing community</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
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
                onChange={(e)=>{setPassword(e.target.value)}}
                required
                placeholder="Create a password"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={(e)=>{setPasswordConfirm(e.target.value)}}
                required
                placeholder="Confirm your password"
              />
            </div>

            <button type="submit" className="loginButton">
              Sign Up
            </button>
          </form>

          <div className="divider">
            <span>or sign up with</span>
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
            Already have an account?{' '}
            <Link href="/login">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}