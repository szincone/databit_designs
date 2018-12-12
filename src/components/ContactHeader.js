import React from 'react'

export const ContactHeader = () => {
  const contactHeader = {
    backgroundColor: '#555',
    padding: '.125em',
    boxShadow: 'none',
    color: '#ffffff',
    height: '4rem',
    border: '1px solid #ffffff',
    borderRadius: '4px 4px 0px 0px',
    maxWidth: '30rem',
    width: '100%',
    margin: '1rem 0 0 0',
    fontSize: '.9rem',
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: '.125em',
    textIndent: '0.125em',
    background: 'linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2)',
  }
  return (
    <>
      <p style={contactHeader}>
        Use the form below to get in contact with us about getting a site or if
        you want to learn more.
      </p>
    </>
  )
}
