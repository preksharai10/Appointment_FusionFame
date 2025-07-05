import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Disclaimer', to: '/disclaimer' },
];

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#00555A',
      color: '#ffffff',
      padding: '40px 20px 20px 20px',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginBottom: '30px',
          flexWrap: 'wrap',
        }}>
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = '#7ED321'}
              onMouseLeave={e => e.target.style.color = '#ffffff'}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <p style={{
          fontSize: '14px',
          color: '#ffffff',
          margin: 0,
          paddingTop: '20px',
          borderTop: '1px solid #ffffff',
        }}>
          Copyright © 2025 Fusionfame Digital Private Limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;