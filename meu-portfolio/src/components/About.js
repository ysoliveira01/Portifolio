// src/components/About.js
import React from 'react';
import './About.css'; // Crie este arquivo para os estilos do About

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Olá! Eu sou Yara Souza.</h2>
        <p className="intro-text">
          Sou Analista DevOps com sólida experiência em ambientes de computação em nuvem, orquestração de containers e automação de infraestrutura. Atuando desde 2023 em empresas de tecnologia, desenvolvo e mantenho pipelines de integração e entrega contínua (CI/CD) utilizando ferramentas como GitLab CI, Jenkins e GitHub Actions. Tenho forte domínio em Docker e Kubernetes, com gestão de clusters em múltiplas nuvens públicas (AWS, GCP, Azure, Huawei e Tencent), e prática avançada em infraestrutura como código (IaC) com Terraform. Minha atuação abrange o suporte e deploy de lojas Magento 1 e 2 em ambientes Kubernetes e máquinas virtuais, além de automações de scripts em Python e Shell Script para otimização de processos operacionais e gestão de bases de dados. Participei de projetos de migração de infraestrutura e dados entre provedores de nuvem, contribuindo para a escalabilidade, segurança e alta disponibilidade dos serviços. Sou adepta das melhores práticas DevOps, utilizando ferramentas como Helm, ArgoCD, Cloudflare, Jira e Harbor para garantir ambientes padronizados, monitorados e confiáveis. Com formação técnica em Informática e tecnólogo em Análise e Desenvolvimento de Sistemas, possuo conhecimentos abrangentes em programação orientada a objetos, redes, bancos de dados e desenvolvimento web. Objetivo profissional: Expandir minha atuação em projetos desafiadores na área de DevOps e Cloud Computing, aplicando minhas habilidades para criar soluções automatizadas, escaláveis e seguras que potencializem a eficiência das operações e entregas contínuas.
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