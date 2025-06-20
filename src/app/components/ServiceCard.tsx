import React from 'react'
import './styles/serviceCard.css'

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
      <div className="service-card-image" style={{ backgroundImage: `url(${image})` }} />
    </div>
  )
}

export default ServiceCard
