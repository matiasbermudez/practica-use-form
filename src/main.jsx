import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar'
import { SingUpForm } from './components/SingUpForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <NavBar />

     <SingUpForm />
  </React.StrictMode>,
)
