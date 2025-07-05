import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm.jsx';

const BookAppointment = () => {
  const sectionStyle = {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  return (
    <section id="appointment" style={{
      ...sectionStyle,
      backgroundColor: '#ffffff',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '400',
        color: '#333333',
        marginBottom: '50px',
        letterSpacing: '0.5px',
      }}>Book an Appointment</h2>
      
      <div style={{
        maxWidth: '450px',
        margin: '0 auto',
      }}>
        <AppointmentForm />
      </div>
    </section>
  );
};

export default BookAppointment;