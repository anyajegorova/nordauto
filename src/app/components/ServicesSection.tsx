import React from 'react'
import './styles/servicesSection.css'
import ServiceCard from './ServiceCard'
import { SERVICES } from '../data/services'
import LargeText from './LargeText'

const ServicesSection = () => {
  return (
    <section className="services-section">
      <LargeText>Our Services</LargeText>
      <div className="services-list">
        {SERVICES.map(service => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
