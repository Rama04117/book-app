

import React from 'react';

function AboutPage() {
  return (
    /* Center the whole page and limit how wide it gets */
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2>About Us</h2>
        <p style={{ lineHeight: '1.6', color: '#322e2e' }}>
          Welcome to MediCare Pharmacy — your trusted online pharmacy platform. 
          We focus on quality, clarity, and convenience. This website is designed 
          as a clean and user-friendly platform, allowing you to filter and sort 
          products based on preferences, making your experience smooth and efficient.
        </p>
      </div>

      <h2>Our Team</h2>
      
      {/* Simple spacing between members */}
      <div>
        <strong>Rama Rimawi</strong>
        <p>Role:Login, Register, and About Pages</p>
      </div>
<div>
        <strong>Weam Aldaja</strong>
        <p>Role:Medicines Data and Main Page</p>
      </div>

      <div>
        <strong>Tala Abu Hara</strong>
        <p>Role:App Routing, Header, and Styling</p>
      </div>
<div>
        <h3>About the Project</h3>
        <p style={{ lineHeight: '1.6' }}>
          This project is a front-end pharmacy application built using React.js.
          It displays a list of medicines with search and filter functionality,
          and includes login, registration and about pages.
        </p>
      </div>

      <footer style={{ marginTop: '50px', textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
        <p>&copy; 2026 Web Development Student Project</p>
      </footer>
    </div>
  );
}

export default AboutPage;