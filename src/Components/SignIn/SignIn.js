import React from 'react'
import "../SignIn/SignIn.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function SignIn() {
  return (
    <>
     <Header/>
     <main className='SignInMain'>
     <section className='SignInSection'>
      <i className='fa fa-user-circle' />
      <h1> Sign In </h1>
      <form>
        <div className='input'>
          <label >Username</label>
          <input type='text' id='email' required  />
        </div>
        <div className='input'>
          <label >Password</label>
          <input type='password' id='password' required />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label >Remember me</label>
        </div>
        <button  
          className='sign-in-button'
        > Sign In
        </button>
      </form>
    </section>
     </main>
     <Footer/>
    </>
  )
}
