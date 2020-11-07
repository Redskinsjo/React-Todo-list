import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '-50px',
        left: '9px',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <p>
        Made with <i className="fas fa-heartbeat"></i> at{' '}
        <a
          style={{
            color: '#5D48D2',
            textDecoration: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
          }}
          href="https://www.lereacteur.io/"
        >
          Le Reacteur
        </a>{' '}
        by{' '}
        <a
          style={{
            color: '#38B278',
            textDecoration: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
          }}
          href="https://github.com/Redskinsjo?tab=repositories"
        >
          Jonathan Carnos
        </a>
      </p>
    </div>
  );
};

export default Footer;
