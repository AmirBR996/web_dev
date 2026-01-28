import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from './components/component.jsx'
import { Greet } from './components/greet.jsx'
import RegisterPage from './pages/register.page.jsx'
import LoginPage from './pages/login.page.jsx'


function App() {

  return (
        <main className = "h-screen min-w-full tracking-wider">
          <RegisterPage />
          <LoginPage />
        </main>
  )
}



export default App

