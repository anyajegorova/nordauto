import React from 'react'
import './styles/contactForm.css'
import { contactData } from '../data/contact';
import ButtonPrimary from './ButtonPrimary';
import { Building, MapPin, Phone, Mail, BadgeInfo } from 'lucide-react';
import Map from './Map';

const ContactForm = () => {
  return (
    <div className="contact-form-container" id="contact-form">
      <video className="contact-bg-video" autoPlay loop muted playsInline>
        <source src="/car-polishing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contact-overlay">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><Building className="contact-icon" /><strong>Company:</strong> {contactData.company}</p>
          <p><MapPin className="contact-icon" /><strong>Address:</strong> {contactData.address}</p>
          <p><Phone className="contact-icon" /><strong>Phone:</strong> {contactData.phone}</p>
          <p><Mail className="contact-icon" /><strong>Email:</strong> <a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>
          <p><BadgeInfo className="contact-icon" /><strong>Business ID:</strong> {contactData.businessId}</p>
          <Map address="Aleksanterinkatu 17, Helsinki" />
        </div>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="Your Email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required placeholder="Your Message"></textarea>

          <ButtonPrimary>Send Message</ButtonPrimary>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
