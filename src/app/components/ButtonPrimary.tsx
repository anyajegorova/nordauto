import React from 'react'
import './styles/ButtonPrimary.css'

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, onClick, className, href }) => {
  if (href) {
    return (
      <a href={href} className={`button-primary${className ? ' ' + className : ''}`}>{children}</a>
    );
  }
  return (
    <button className={`button-primary${className ? ' ' + className : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonPrimary;
