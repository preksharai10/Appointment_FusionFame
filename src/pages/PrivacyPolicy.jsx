import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#222' }}>
          At Fusionfame Digital, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Information We Collect</h2>
        <p style={{ marginBottom: '1rem' }}>
          We may collect personal information such as your name, email address, and other details when you interact with our services.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>How We Use Your Information</h2>
        <p style={{ marginBottom: '1rem' }}>
          Your information is used to provide and improve our services, communicate with you, and enhance your user experience.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Data Security</h2>
        <p style={{ marginBottom: '1rem' }}>
          We implement industry-standard security measures to protect your data from unauthorized access.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Your Choices</h2>
        <p style={{ marginBottom: '1rem' }}>
          You have the right to access, update, or delete your personal information. Please contact us at{' '}
          <a href="mailto:support@fusionfamedigital.io" style={{ color: '#295B63', textDecoration: 'underline' }}>
            support@fusionfamedigital.io
          </a>{' '}
          for assistance.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:support@fusionfamedigital.io" style={{ color: '#295B63', textDecoration: 'underline' }}>
            support@fusionfamedigital.io
          </a>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;