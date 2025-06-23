import React from 'react'
import Link from 'next/link'
import { contactData } from '../data/contact'
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img src="/nordauto_logo.png" alt="NordAuto Logo" className="footer-logo" />
          <h3>{contactData.company}</h3>
          <p><MapPin className="footer-icon" />{contactData.address}</p>
          <p><Phone className="footer-icon" />{contactData.phone}</p>
          <p><Mail className="footer-icon" />{contactData.email}</p>
          <p>Business ID: {contactData.businessId}</p>
        </div>
        <div className="footer-section footer-extra-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
        <div className="footer-section social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="footer-icon" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="footer-icon" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="footer-icon" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {contactData.company}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
