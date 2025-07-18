// src/components/About.js
import React, { useState, useEffect, useRef } from 'react';
import './About.css';

// Importar apenas os ícones que serão realmente utilizados do Lucide React.
// Se você adicionar novas habilidades com novos ícones, lembre-se de importá-los aqui.
// Verifique a lista completa de ícones em: https://lucide.dev/icons/
import {
  Cloud, Code, GitBranch, Server, Package,
  Rocket, Github, LayoutDashboard, Terminal,
  Globe, Box, CircleDot,
  Store, Anchor,
  GitFork,
  Layers,
  HardDrive,
} from 'lucide-react';

function About() {
  // Mapeamento das habilidades para seus ícones correspondentes
  const skills = [
    { name: 'DevOps', icon: Cloud },
    { name: 'Cloud Computing', icon: Server },
    { name: 'AWS', icon: Cloud },
    { name: 'GCP', icon: Cloud },
    { name: 'Azure', icon: Cloud },
    { name: 'Docker', icon: Package },
    { name: 'Kubernetes', icon: Layers },
    { name: 'CI/CD', icon: Rocket },
    { name: 'GitLab CI', icon: GitFork },
    { name: 'Jenkins', icon: Box },
    { name: 'GitHub Actions', icon: Github },
    { name: 'Terraform', icon: Code },
    { name: 'Python', icon: Terminal },
    { name: 'Shell Script', icon: Terminal },
    { name: 'Magento', icon: Store },
    { name: 'Helm', icon: Anchor },
    { name: 'ArgoCD', icon: GitBranch },
    { name: 'Cloudflare', icon: Globe },
    // { name: 'Jira', icon: LayoutDashboard }, // REMOVIDO: Ferramenta Jira
    { name: 'Harbor', icon: HardDrive },
    { name: 'React', icon: CircleDot },
    { name: 'JavaScript', icon: Code },
  ];

  // Estado para controlar a visibilidade da seção de habilidades para a animação
  const [skillsVisible, setSkillsVisible] = useState(false);
  // Ref para o elemento que será observado pelo Intersection Observer
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Define skillsVisible como true se o elemento estiver visível, false se não
        setSkillsVisible(entries[0].isIntersecting);
      },
      {
        threshold: 0.1, // A animação será disparada quando 10% do elemento estiver visível
      }
    );

    // Se o elemento de referência existir, comece a observá-lo
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Função de limpeza: desconecta o observador quando o componente é desmontado
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []); // O array vazio garante que o useEffect rode apenas uma vez (no montagem do componente)

  return (
    <section id="about" className="about-section">
      {/* Wrapper para o layout de duas colunas: Introdução + Imagem */}
      <div className="intro-hero-wrapper">
        {/* Coluna da Esquerda: Texto de Introdução */}
        <div className="intro-text-column">
          {/* Retângulo com "Oi!! Eu sou Yara!" e emoji */}
          <div className="greeting-box">
            <span className="greeting-emoji">👋</span>
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
      {/* Adicionando o ref para o Intersection Observer */}
      <div className="skills-section-wrapper" ref={skillsRef}>
        {/* Título "Minhas Habilidades" dentro do seu próprio quadrado */}
        <div className={`skills-title-box ${skillsVisible ? 'animate-skill' : ''}`}>
          <h3 className="skills-title">Minhas Habilidades</h3>
        </div>

        {/* Retângulo roxo que agrupa todas as habilidades */}
        <div className="all-skills-container">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-item ${skillsVisible ? 'animate-skill' : ''}`}
                style={{ transitionDelay: `${index * 0.05}s` }} // Atraso ainda mais rápido
              >
                {skill.icon && <skill.icon size={30} className="skill-icon" />}
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
