import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

const Disclaimer = () => {
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
          Disclaimer
        </h1>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#222' }}>
          The information provided on this website is for general informational purposes only. It is not intended as professional advice.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Accuracy of Information</h2>
        <p style={{ marginBottom: '1rem' }}>
          While we strive to keep our content accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Limitation of Liability</h2>
        <p style={{ marginBottom: '1rem' }}>
          Under no circumstances shall we be held liable for any direct, indirect, incidental, special, exemplary, or consequential damages arising out of or in connection with the use of this website.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Contact Us</h2>
        <p>
          For any questions regarding our Disclaimer, please contact us at{' '}
          <a href="mailto:support@fusionfamedigital.io" style={{ color: '#295B63', textDecoration: 'underline' }}>
            support@fusionfamedigital.io
          </a>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;