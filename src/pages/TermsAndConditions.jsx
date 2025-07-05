import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: '100px',
          minHeight: '60vh',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          padding: '40px 24px 32px 24px',
        }}
      >
        <h1 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight: 600, textAlign: 'center' }}>
          Terms & Conditions
        </h1>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#222' }}>
          By using our services, you agree to the following terms and conditions:
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Service Usage</h2>
        <p style={{ marginBottom: '1rem' }}>
          You agree to use our services in compliance with all applicable laws and regulations.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Intellectual Property</h2>
        <p style={{ marginBottom: '1rem' }}>
          All content and materials on our platform are protected by intellectual property laws.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Disclaimer</h2>
        <p style={{ marginBottom: '1rem' }}>
          We are not responsible for any damages arising from the use of our services.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Contact Us</h2>
        <p>
          For any inquiries about our Terms & Conditions, please contact us at{' '}
          <a href="support@fusionfamedigital.io" style={{ color: '#295B63', textDecoration: 'underline' }}>
            support@fusionfamedigital.io
          </a>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;