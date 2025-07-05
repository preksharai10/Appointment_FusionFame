import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    date: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  const inputStyle = {
    width: '100%',
    padding: '18px 20px',
    border: '1px solid #e0e0e0',
    borderRadius: '0px',
    fontSize: '16px',
    fontWeight: '300',
    outline: 'none',
    backgroundColor: '#ffffff',
    color: '#333333',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  if (isSubmitted) {
    return (
      <div style={{
        padding: '30px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #e9ecef',
        borderRadius: '0px',
        color: '#155724',
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Thank you!</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>Your appointment request has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#cccccc'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          required
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#cccccc'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          required
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#cccccc'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          required
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          style={{...inputStyle, color: '#666666'}}
          onFocus={(e) => {
            e.target.style.borderColor = '#cccccc';
            e.target.style.color = '#333333';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e0e0e0';
            if (!e.target.value) e.target.style.color = '#666666';
          }}
          required
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          rows="5"
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: '120px',
          }}
          onFocus={(e) => e.target.style.borderColor = '#cccccc'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          required
        />
      </div>

     
      <button 
        type="submit"
        style={{
          width: '100%',
          padding: '18px 20px',
          backgroundColor: '#295B63', // button background color
          color: '#fff',              // button text color
          border: 'none',
          borderRadius: '0px',
          fontSize: '16px',
          fontWeight: '400',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          letterSpacing: '0.5px',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#333333'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#295B63'}
      >
        Book Now
      </button>

    </form>
  );
};

export default AppointmentForm;