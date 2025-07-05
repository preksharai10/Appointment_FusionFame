import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

const RefundPolicy = () => {
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
          Refund Policy
        </h1>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#222' }}>
          At Fusionfame Digital, customer satisfaction is our top priority. Our Refund Policy ensures transparency and fairness.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Eligibility for Refunds</h2>
        <p style={{ marginBottom: '1rem' }}>
          Refunds may be issued under specific conditions, such as service cancellations or dissatisfaction within a defined period.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Refund Process</h2>
        <p style={{ marginBottom: '1rem' }}>
          To request a refund, please contact our support team at{' '}
          <a href="mailto:support@fusionfamedigital.io" style={{ color: '#295B63', textDecoration: 'underline' }}>
            support@fusionfamedigital.io
          </a>{' '}
          with your order details.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Refund Timeline</h2>
        <p style={{ marginBottom: '1rem' }}>
          Refunds are typically processed within 7-10 business days after approval.
        </p>
        <h2 style={{ fontSize: '1.3rem', marginTop: '1.5rem', fontWeight: 600 }}>Contact Us</h2>
        <p>
          For any questions regarding refunds, please reach out to our support team at{' '}
          <a href="mailto:support@fusionfamedigital.io" style={{ color: '#295B63', textDecoration: 'underline' }}>
            support@fusionfamedigital.io
          </a>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;