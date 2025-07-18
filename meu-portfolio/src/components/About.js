// src/components/About.js
import React from 'react';
import './About.css'; // Mantenha este arquivo para os estilos do About

function About() {
  return (
    <section id="about" className="about-section">
      {/* Wrapper para o layout de duas colunas: Introdução + Imagem */}
      <div className="intro-hero-wrapper">
        {/* Coluna da Esquerda: Texto de Introdução */}
        <div className="intro-text-column">
          {/* Retângulo com "Oi!! Eu sou Yara!" e emoji */}
          <div className="greeting-box">
            <span className="greeting-emoji">👋</span> {/* Emoji de mão acenando */}
            <h2 className="greeting-text">Oi!! Eu sou Yara!</h2>
          </div>

          {/* Texto de subtítulo com palavras enfatizadas e nova fonte */}
          <p className="subtitle-text">
            Sou <span className="highlight">Analista DevOps</span> e pratico um pouco o <span className="highlight">desenvolvimento frontend</span>, como será mostrado nesse site.
          </p>
        </div>

        {/* Coluna da Direita: Imagem */}
        <div className="hero-image-column">
          {/* Placeholder para a imagem. Substitua por uma imagem sua! */}
          <img
            src="https://placehold.co/400x400/BB86FC/FFFFFF?text=Sua+Imagem+Aqui"
            alt="Imagem de destaque"
            className="hero-image"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/BB86FC/FFFFFF?text=Erro+ao+Carregar+Imagem" }}
          />
        </div>
      </div>

      {/* Sua apresentação detalhada (ocupando a largura total do container) */}
      <p className="detailed-description">
        Sou Analista DevOps com sólida experiência em ambientes de computação em nuvem, orquestração de containers e automação de infraestrutura. Atuando desde 2023 em empresas de tecnologia, desenvolvo e mantenho pipelines de integração e entrega contínua (CI/CD) utilizando ferramentas como GitLab CI, Jenkins e GitHub Actions. Tenho forte domínio em Docker e Kubernetes, com gestão de clusters em múltiplas nuvens públicas (AWS, GCP, Azure, Huawei e Tencent), e prática avançada em infraestrutura como código (IaC) com Terraform. Minha atuação abrange o suporte e deploy de lojas Magento 1 e 2 em ambientes Kubernetes e máquinas virtuais, além de automações de scripts em Python e Shell Script para otimização de processos operacionais e gestão de bases de dados. Participei de projetos de migração de infraestrutura e dados entre provedores de nuvem, contribuindo para a escalabilidade, segurança e alta disponibilidade dos serviços. Sou adepta das melhores práticas DevOps, utilizando ferramentas como Helm, ArgoCD, Cloudflare, Jira e Harbor para garantir ambientes padronizados, monitorados e confiáveis. Com formação técnica em Informática e tecnólogo em Análise e Desenvolvimento de Sistemas, possuo conhecimentos abrangentes em programação orientada a objetos, redes, bancos de dados e desenvolvimento web. Objetivo profissional: Expandir minha atuação em projetos desafiadores na área de DevOps e Cloud Computing, aplicando minhas habilidades para criar soluções automatizadas, escaláveis e seguras que potencializem a eficiência das operações e entregas contínuas.
      </p>

      {/* Título e grid de habilidades */}
      <div className="skills-section-wrapper">
        <h3>Minhas Habilidades</h3>
        <div className="skills-grid">
          <span className="skill-item">DevOps</span>
          <span className="skill-item">Cloud Computing</span>
          <span className="skill-item">AWS</span>
          <span className="skill-item">GCP</span>
          <span className="skill-item">Azure</span>
          <span className="skill-item">Docker</span>
          <span className="skill-item">Kubernetes</span>
          <span className="skill-item">CI/CD</span>
          <span className="skill-item">GitLab CI</span>
          <span className="skill-item">Jenkins</span>
          <span className="skill-item">GitHub Actions</span>
          <span className="skill-item">Terraform</span>
          <span className="skill-item">Python</span>
          <span className="skill-item">Shell Script</span>
          <span className="skill-item">Magento</span>
          <span className="skill-item">Helm</span>
          <span className="skill-item">ArgoCD</span>
          <span className="skill-item">Cloudflare</span>
          <span className="skill-item">Jira</span>
          <span className="skill-item">Harbor</span>
          <span className="skill-item">React</span>
          <span className="skill-item">JavaScript</span>
        </div>
      </div>
    </section>
  );
}

export default About;
