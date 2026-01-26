import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from './components/component.jsx'
import { Greet } from './components/greet.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <h1>Hello world</h1>
      <li>jsx</li>
      {Component()}
      <li>components</li>
      {
        Greet()
      }
      <Greet user = {'Hari'}></Greet>
     </div>
  )
}



export default App

