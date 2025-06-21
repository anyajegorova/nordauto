import React from 'react'
import { Facebook, Instagram, Linkedin, MapPin, Phone } from 'lucide-react'
import './styles/nav.css'
import ButtonPrimary from './ButtonPrimary'
import { contactData } from '../data/contact'

const Nav = () => {
  return (
    <>
      {/* Mobile top bar for contact info */}
      <div className="nav-mobile-contact-bar">
        <span className="nav-contact-item">
          <MapPin size={16} className="nav-contact-icon" />
          {contactData.address}
        </span>
        <span className="nav-contact-item">
          <Phone size={16} className="nav-contact-icon" />
          {contactData.phone}
        </span>
      </div>
      <nav className="nav-sticky">
        <div className="nav-logo nav-logo-responsive">
          <img src="/nordauto_logo.png" alt="NordAuto Logo" className="nav-logo-img" />
        </div>
        <div className="nav-contact nav-contact-desktop">
          <span className="nav-contact-item">
            <MapPin size={18} className="nav-contact-icon" />
            {contactData.address}
          </span>
          <span className="nav-contact-item">
            <Phone size={18} className="nav-contact-icon" />
            {contactData.phone}
          </span>
        </div>
        <div className="nav-actions">
          <div className="nav-social-icons nav-social-desktop">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
              <Linkedin size={20} />
            </a>
          </div>
          <ButtonPrimary>Get in touch</ButtonPrimary>
        </div>
      </nav>
    </>
  )
}

export default Nav
