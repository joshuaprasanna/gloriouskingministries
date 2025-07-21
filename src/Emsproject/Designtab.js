import React, { useState } from 'react';

const MinistryTabs = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const styles = {
    container: {
      backgroundColor: '#fff',
      padding: '10px 20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    navBar: {
      display: 'flex',
      gap: '20px',
    },
    navItem: {
      position: 'relative',
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#333',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      zIndex: 100,
      padding: '10px 0',
      borderRadius: '4px',
      width: '200px',
    },
    link: {
      display: 'block',
      padding: '10px 20px',
      color: '#333',
      textDecoration: 'none',
      fontSize: '15px',
    },
    linkHover: {
      backgroundColor: '#f0f0f0',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.navBar}>
        <div
          style={styles.navItem}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          ABOUT OUR MINISTRY ⮟
          {showDropdown && (
            <div style={styles.dropdownMenu}>
              <a href="/about" style={styles.link}>About Us</a>
              <a href="/history" style={styles.link}>Church History</a>
              <a href="/pastor" style={styles.link}>Pastor's Message</a>
              <a href="/branches" style={styles.link}>Our Branches</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinistryTabs;
