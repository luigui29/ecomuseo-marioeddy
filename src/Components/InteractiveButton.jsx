import React from 'react'
import './InteractiveButton.css'

const InteractiveButton = ({ children, href, className = '', ...props }) => {
  return (
    <a 
      href={href}
      className={`interactive-btn ${className}`}
      style={{
        display: 'inline-block',
        textDecoration: 'none'
      }}
      {...props}
    >
      <span className="btn-text">{children}</span>
      <span className="btn-hover-effect"></span>
    </a>
  )
}

export default InteractiveButton
