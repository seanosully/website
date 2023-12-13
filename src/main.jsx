import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './About.jsx'
import Header from './Header.jsx'
import './index.css'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <About />
    <Projects />
    <Contact />
    
  </React.StrictMode>,
)
