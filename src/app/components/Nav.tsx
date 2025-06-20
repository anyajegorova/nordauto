import React from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import './styles/nav.css'
import ButtonPrimary from './ButtonPrimary'

const Nav = () => {
  return (
    <nav className="nav-sticky">
      <div className="nav-logo">NordAuto</div>
      <div className="nav-actions">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <Facebook size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <Instagram size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <Linkedin size={20} />
        </a>
        <ButtonPrimary>Get in touch</ButtonPrimary>
      </div>
    </nav>
  )
}

export default Nav
