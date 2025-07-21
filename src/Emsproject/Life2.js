import React, { useEffect, useState } from 'react';

const slideshowImages = [
  'https://images.unsplash.com/photo-1576765607925-7f2fcb2648bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Children smiling
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Volunteering
  'https://images.unsplash.com/photo-1533142266415-ac591a4c3b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Education support
  'https://images.unsplash.com/photo-1604480132556-20d95553c3cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Helping hands
];


function Life2() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <img src="https://via.placeholder.com/50" alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.headerCenter}>
          <h1 style={styles.title}>New Foundation Trust</h1>
          <p style={styles.slogan}>Building Better Lives In Christ</p>
        </div>
        <div style={styles.headerRight}>
          <img src="https://via.placeholder.com/50" alt="Right Icon" style={styles.logo} />
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About Us</a>
        <a href="#services" style={styles.navLink}>Services</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>

      {/* Slideshow */}
      <section style={styles.slideshowSection}>
        <img
          src={slideshowImages[slideIndex]}
          alt="Slideshow"
          style={styles.slideshowImage}
        />
      </section>

      {/* Content Sections */}
      <section id="home" style={styles.section}>
        <h2 style={styles.heading}>Welcome</h2>
        <p style={styles.text}>Empowering communities. Building a brighter future.</p>
      </section>

      <section id="about" style={{ ...styles.section, backgroundColor: '#fdfdfd' }}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.text}>
          We are a non-profit committed to sustainable growth through education,
          health programs, and community support. aaaaaaaaaaaaaaaa.
        </p>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.heading}>Our Services</h2>
        <ul style={styles.list}>
          <li>Health & Wellness Programs</li>
          <li>Educational Initiatives</li>
          <li>Community Infrastructure</li>
          <li>Emergency Relief Services</li>
        </ul>
      </section>

      <section id="contact" style={{ ...styles.section, backgroundColor: '#f0f0f0' }}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.text}>📧 info@newfoundationtrust.org</p>
        <p style={styles.text}>📞 +1 (555) 123-4567</p>
        <p style={styles.text}>🏠 123 Foundation Lane, Hope City</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} New Foundation Trust. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Life2;

// =============================
// Stylish Inline CSS
// =============================
const styles = {
  app: {
    fontFamily: "'Poppins', sans-serif",
    scrollBehavior: 'smooth',
    color: '#222',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#003366',
    color: 'white',
    padding: '1.2rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  headerLeft: { flex: 1 },
  headerCenter: {
    flex: 2,
    textAlign: 'center',
  },
  headerRight: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  title: {
    margin: 0,
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    fontWeight: '600',
  },
  slogan: {
    margin: 0,
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#cfe3ff',
  },
  logo: {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
  },
  nav: {
    backgroundColor: '#0055aa',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '0.75rem',
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
  },
  slideshowSection: {
    width: '100%',
    overflow: 'hidden',
    height: '400px',
  },
  slideshowImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease-in-out',
  },
  section: {
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#003366',
    fontFamily: "'Playfair Display', serif",
  },
  text: {
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.1rem',
    lineHeight: '2rem',
  },
  footer: {
    backgroundColor: '#003366',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '3rem',
  },
};
