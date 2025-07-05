import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(section);
    } else {
      navigate('/', { state: { scrollTo: section } });
    }
  };

  return (
    <header style={{
      backgroundColor: '#00555A',
      color: '#ffffff',
      padding: '15px clamp(15px, 5vw, 30px)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(20px, 4vw, 24px)',
          fontWeight: '700',
          letterSpacing: '0.5px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }} onClick={() => handleNavClick('home')}>
          <span style={{ color: '#4ade80' }}>Fusionfame</span>
          <span style={{ color: 'white' }}>Digital</span>
        </h1>
        
        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: 'clamp(15px, 3vw, 30px)',
          alignItems: 'center',
        }} className="desktop-nav">
          <a href="#home" onClick={(e) => {e.preventDefault(); handleNavClick('home');}} style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: '300',
            transition: 'color 0.3s ease',
            padding: '10px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
          }} onMouseEnter={(e) => e.target.style.color = '#7ED321'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Home</a>
          
          <a href="#services" onClick={(e) => {e.preventDefault(); handleNavClick('services');}} style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: '300',
            transition: 'color 0.3s ease',
            padding: '10px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
          }} onMouseEnter={(e) => e.target.style.color = '#7ED321'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Services</a>
          
          <a href="#appointment" onClick={(e) => {e.preventDefault(); handleNavClick('appointment');}} style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: '300',
            transition: 'color 0.3s ease',
            padding: '10px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }} onMouseEnter={(e) => e.target.style.color = '#7ED321'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Book</a>
          
          <a href="#contact" onClick={(e) => {e.preventDefault(); handleNavClick('contact');}} style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: '300',
            transition: 'color 0.3s ease',
            padding: '10px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
          }} onMouseEnter={(e) => e.target.style.color = '#7ED321'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Contact</a>
        </div>

        <button
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ffffff',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '10px',
            minHeight: '44px',
            minWidth: '44px',
          }}
          className="mobile-menu-button"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#00555A',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            borderTop: '1px solid #00555A',
          }} className="mobile-nav">
            <a href="#home" onClick={(e) => {e.preventDefault(); handleNavClick('home');}} style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
              padding: '15px 10px',
              borderBottom: '1px solid #00555A',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
            }}>Home</a>
            
            <a href="#services" onClick={(e) => {e.preventDefault(); handleNavClick('services');}} style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
              padding: '15px 10px',
              borderBottom: '1px solid #2C5F5D',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
            }}>Services</a>
            
            <a href="#appointment" onClick={(e) => {e.preventDefault(); handleNavClick('appointment');}} style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
              padding: '15px 10px',
              borderBottom: '1px solid #2C5F5D',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
            }}>Book Appointment</a>
            
            <a href="#contact" onClick={(e) => {e.preventDefault(); handleNavClick('contact');}} style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '300',
              padding: '15px 10px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
            }}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;