import React from 'react'
import './styles/ButtonPrimary.css'

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, onClick, className }) => {
  return (
    <button className={`button-primary${className ? ' ' + className : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonPrimary;
