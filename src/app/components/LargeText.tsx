import React from 'react'
import './styles/largeText.css'

interface LargeTextProps {
  children: React.ReactNode;
}

const LargeText: React.FC<LargeTextProps> = ({ children }) => {
  return (
    <div className="large-text">
      {children}
    </div>
  )
}

export default LargeText
