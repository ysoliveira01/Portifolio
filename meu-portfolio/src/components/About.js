// src/components/About.js
import React from 'react';
import './About.css'; // Crie este arquivo para os estilos do About

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Olá! Eu sou [Seu Nome].</h2>
        <p className="intro-text">
          Sou um(a) **[Sua Área Principal, ex: Desenvolvedor Frontend e UI/UX Designer]** com experiência em ajudar startups a lançar e escalar seus produtos.
          Minha paixão está em criar experiências de usuário intuitivas e eficientes, transformando ideias complexas em soluções digitais elegantes.
        </p>

        <h3>Minhas Habilidades</h3>
        <div className="skills-grid">
          <span className="skill-item">React</span>
          <span className="skill-item">JavaScript</span>
          <span className="skill-item">HTML5</span>
          <span className="skill-item">CSS3</span>
          <span className="skill-item">Node.js</span>
          <span className="skill-item">MongoDB</span>
          <span className="skill-item">Figma</span>
          {/* Adicione mais habilidades que você possui aqui, como no site de exemplo */}
          <span className="skill-item">TypeScript</span>
          <span className="skill-item">Sass</span>
        </div>

        {/* Adicione sua foto aqui, se desejar, similar ao site de exemplo */}
        {/* <img src="/caminho/para/sua/foto.jpg" alt="Sua Foto" className="profile-photo" /> */}
      </div>
    </section>
  );
}

export default About;