// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Crie este arquivo para os estilos do Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer">Twitter</a>
          {/* Adicione outros links sociais ou de contato */}
          <a href="https://calendly.com/seu-usuario" target="_blank" rel="noopener noreferrer">Calendly</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;