// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Crie este arquivo para os estilos dos Projetos

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Projeto App de Contatos (Exemplo)',
      description: 'Um aplicativo web completo para gerenciar contatos, construído com React, Node.js e MongoDB (MERN stack). Inclui funcionalidades de CRUD.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/seu-usuario/seu-projeto-contatos', // Altere para o link do seu projeto!
      liveLink: 'https://seu-projeto-contatos.netlify.app' // Se houver um deploy
    },
    {
      id: 2,
      title: 'Site Institucional para [Nome da Empresa]',
      description: 'Desenvolvimento de um site moderno e responsivo para uma empresa de consultoria, com foco em otimização SEO e experiência do usuário.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
      githubLink: 'https://github.com/seu-usuario/seu-projeto-site',
      liveLink: ''
    },
    // Adicione mais projetos aqui
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-techs">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Você pode adicionar a seção de artigos aqui, se tiver um, como no site de exemplo */}
        <div className="articles-section">
          <h3>Artigos & Publicações</h3>
          <p>
            Você pode conferir meu artigo sobre algoritmos e estruturas de dados no Hackernoon:
            <a href="https://hackernoon.com/an-intro-to-algorithms-and-data-structures-javascript-edition" target="_blank" rel="noopener noreferrer">
              "An Intro to Algorithms and Data Structures (Javascript Edition)"
            </a>
            (Este é um exemplo, substitua pelo seu link se tiver um)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;