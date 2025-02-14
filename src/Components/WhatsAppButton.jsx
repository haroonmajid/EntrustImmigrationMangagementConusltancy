import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+971509313649"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: '#25d366',
        borderRadius: '50%',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#128C7E')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '40px', height: '40px' }}
      />
      
    </a>
  );
};

export default WhatsAppButton;