import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import BookAppointment from './pages/BookAppointment.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './App.css';

// MainContent component for homepage and sections
const MainContent = ({ scrollToSection, sectionStyle, cardStyle }) => (
  <div style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
    lineHeight: '1.6',
  }}>
    <Navbar scrollToSection={scrollToSection} />

    {/* Hero Section */}
    <section id="home" style={{
      ...sectionStyle,
      paddingTop: '140px',
      paddingBottom: '100px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
    }}>
      <h2 style={{
        fontSize: '48px',
        fontWeight: '300',
        color: '#333333',
        marginBottom: '20px',
        letterSpacing: '1px',
      }}>We're happy to help you</h2>
      
      <h3 style={{
        fontSize: '24px',
        fontWeight: '400',
        color: '#666666',
        marginBottom: '40px',
        letterSpacing: '0.5px',
      }}>Fusionfame Digital Services</h3>
      
      <p style={{
        fontSize: '18px',
        color: '#666666',
        maxWidth: '800px',
        margin: '0 auto 50px auto',
        lineHeight: '1.8',
      }}>
        In today's fast-paced digital world, technical issues can bring your daily routine to a sudden halt. 
        Whether it's a malfunctioning laptop, a slow-running network, or a virus-infected system, having reliable 
        technical support is more important than ever.
      </p>
      <button
        onClick={() => scrollToSection('appointment')}
        style={{
          padding: '18px 40px',
          backgroundColor: '#295B63',
          color: '#fff',
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
        Book Appointment Now
      </button>
    </section>

    {/* Services Section */}
    <section id="services" style={{
      ...sectionStyle,
      backgroundColor: '#f8f9fa',
    }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: '300',
        color: '#333333',
        textAlign: 'center',
        marginBottom: '60px',
        letterSpacing: '0.5px',
      }}>Our Fusionfame Digital Services</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '60px',
      }}>
        <div style={cardStyle}>
          <h3 style={{ fontSize: '20px', fontWeight: '400', color: '#333333', marginBottom: '20px' }}>
            Book a Fusionfame Digital Appointment
          </h3>
          <p style={{ fontSize: '16px', color: '#666666', marginBottom: '30px' }}>
            Get help at your convenience. Book online or over the phone and get connected with a certified expert.
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '14px',
            color: '#666666',
          }}>
            <li style={{ marginBottom: '8px' }}>• Fast, on-time service</li>
            <li style={{ marginBottom: '8px' }}>• Home or remote support options</li>
            <li style={{ marginBottom: '8px' }}>• Transparent pricing</li>
            <li style={{ marginBottom: '8px' }}>• Skilled professionals</li>
          </ul>
        </div>
        
        <div style={cardStyle}>
          <h3 style={{ fontSize: '20px', fontWeight: '400', color: '#333333', marginBottom: '20px' }}>
            Fusionfame Digital Membership
          </h3>
          <p style={{ fontSize: '16px', color: '#666666', marginBottom: '30px' }}>
            Perfect for individuals and families who rely on tech daily and want ongoing support.
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '14px',
            color: '#666666',
          }}>
            <li style={{ marginBottom: '8px' }}>• Unlimited tech consultations</li>
            <li style={{ marginBottom: '8px' }}>• Priority scheduling</li>
            <li style={{ marginBottom: '8px' }}>• 24/7 chat and phone support</li>
            <li style={{ marginBottom: '8px' }}>• Free annual device checks</li>
          </ul>
        </div>
        
        <div style={cardStyle}>
          <h3 style={{ fontSize: '20px', fontWeight: '400', color: '#333333', marginBottom: '20px' }}>
            Fusionfame Digital Protection
          </h3>
          <p style={{ fontSize: '16px', color: '#666666', marginBottom: '30px' }}>
            Keep your devices and data safe with our comprehensive protection plan.
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '14px',
            color: '#666666',
          }}>
            <li style={{ marginBottom: '8px' }}>• Real-time antivirus monitoring</li>
            <li style={{ marginBottom: '8px' }}>• Secure cloud backup</li>
            <li style={{ marginBottom: '8px' }}>• System performance checks</li>
            <li style={{ marginBottom: '8px' }}>• Hardware diagnostics</li>
          </ul>
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: '400',
          color: '#333333',
          marginBottom: '40px',
        }}>Core Fusionfame Digital Services</h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          textAlign: 'left',
        }}>
          {[
            'Window Antivirus',
            'MAC Antivirus',
            'Android Security',
            'iOS Protection',
            'Enterprise Security',
            'Web Protection',
            'Firewall & VPN',
            'Email Protection',
          ].map((service, index) => (
            <div key={index} style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
            }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '400',
                color: '#333333',
                margin: '0 0 10px 0',
              }}>{service}</h4>
              <p style={{
                fontSize: '14px',
                color: '#666666',
                margin: 0,
              }}>Professional technical support for all your needs.</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Book Appointment Section */}
    <BookAppointment />

    {/* Why Choose Us Section */}
    <section style={{
      ...sectionStyle,
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: '300',
        color: '#333333',
        marginBottom: '60px',
        letterSpacing: '0.5px',
      }}>Why Choose Us?</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
      }}>
        {[
          { title: 'Certified Experts', desc: 'Every technician is background-verified and certified in relevant technical fields.' },
          { title: 'No Hidden Fees', desc: 'Transparent pricing with clear service estimates upfront.' },
          { title: 'Nationwide Availability', desc: 'Whether you\'re in a metro city or remote town, we\'ve got you covered.' },
          { title: 'Eco-Friendly Practices', desc: 'We promote e-waste recycling and paperless communication.' }
        ].map((item, index) => (
          <div key={index} style={{
            padding: '30px 20px',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '400',
              color: '#333333',
              marginBottom: '15px',
            }}>{item.title}</h3>
            <p style={{
              fontSize: '14px',
              color: '#666666',
              margin: 0,
              lineHeight: '1.6',
            }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" style={{
      ...sectionStyle,
      backgroundColor: '#ffffff',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: '300',
        color: '#333333',
        marginBottom: '40px',
        letterSpacing: '0.5px',
      }}>Get in Touch</h2>
      
      <p style={{
        fontSize: '18px',
        color: '#666666',
        maxWidth: '600px',
        margin: '0 auto 50px auto',
        lineHeight: '1.8',
      }}>
        Need immediate assistance or have questions about our services? 
        We're here to help with all your technical needs.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '400', color: '#333333', marginBottom: '15px' }}>Phone</h3>
          <p style={{ fontSize: '16px', color: '#666666', margin: 0 }}>+1-833-(860) 0046 <br />
+91-8851467094</p>
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '400', color: '#333333', marginBottom: '15px' }}>Email</h3>
          <p style={{ fontSize: '16px', color: '#666666', margin: 0 }}>support@fusionfamedigital.io</p>
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '400', color: '#333333', marginBottom: '15px' }}>Hours</h3>
          <p style={{ fontSize: '16px', color: '#666666', margin: 0 }}>24/7 Support Available</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionStyle = {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    padding: '40px 30px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
  };

  // Scroll to section after navigation to home with scrollTo state, then clear state
  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
        // Clear the scrollTo state so it doesn't scroll again on refresh
        navigate('/', { replace: true, state: {} });
      }, 100); // Delay ensures DOM is ready
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              scrollToSection={scrollToSection}
              sectionStyle={sectionStyle}
              cardStyle={cardStyle}
            />
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </>
  );  
};  
export default App;