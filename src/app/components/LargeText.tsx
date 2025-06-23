import React from 'react'
import './styles/largeText.css'

interface LargeTextProps {
  children: React.ReactNode;
  center?: boolean;
}

const LargeText: React.FC<LargeTextProps> = ({ children, center }) => {
  return (
    <div className={`large-text${center ? ' center' : ''}`}>
      {children}
    </div>
  )
}

export default LargeText
