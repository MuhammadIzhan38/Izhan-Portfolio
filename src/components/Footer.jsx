import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#000',
    color: '#00ffff',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    position: 'relative',
    zIndex: 10
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0, fontFamily: 'Segoe UI' }}>© 2024 Muhammad Izhan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;