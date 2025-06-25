import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos</strong> Recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos que desenvolvi recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Projeto 1 - Chrome Store Extension */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/imagens/Captura de tela 2025-06-21 115909.png"
              title="Chrome Store Extension"
              description="Extensão para navegador Chrome desenvolvida com JavaScript vanilla. Focada em melhorar a experiência do usuário na Chrome Web Store com funcionalidades adicionais e interface otimizada."
              ghLink="https://github.com/VladisonCosta/chrome-store" 
              technologies="JavaScript, HTML5, CSS3, Chrome Extension API"
            />
          </Col>

          {/* Projeto 2 - Quiz App Mobile */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/imagens/Captura de tela 2025-06-21 115811.png"
              title="Quiz App Mobile"
              description="Aplicativo de quiz interativo desenvolvido para dispositivos móveis. Interface responsiva com sistema de pontuação, timer e múltiplas categorias de perguntas para uma experiência gamificada."
              ghLink="https://github.com/VladisonCosta/quiz-app-mobile" 
              technologies="React Native, JavaScript, CSS3, Mobile First"
            />
          </Col>

          {/* Projeto 3 - Projeto Dev Junior Ita */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/imagens/Captura de tela 2025-06-21 123228.png"
              title="Projeto Dev Junior - ITA Treino"
              description="Projeto educacional desenvolvido como parte do programa Dev Junior do ITA. Implementa conceitos fundamentais de desenvolvimento web com foco em boas práticas e clean code."
              ghLink="https://github.com/VladisonCosta/Projeto-Dev-Junior-Ita-treino-"
              technologies="HTML5, CSS3, JavaScript, Git, GitHub"
            />
          </Col>

          {/* Projeto 4 - Meu Projeto */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/imagens/Captura de tela 2025-06-21 121822.png"
              title="Sistema Web Personalizado"
              description="Projeto web full-stack personalizado desenvolvido com tecnologias modernas. Inclui funcionalidades de CRUD, autenticação e interface responsiva com design moderno e intuitivo."
              ghLink="https://github.com/VladisonCosta/Meu-projeto" 
              technologies="JavaScript, HTML5, CSS3, Bootstrap"
            />
          </Col>
          
          {/* Projeto 5 - Project Web */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/imagens/Captura de tela 2025-06-21 120744.png"
              title="Project Web - Landing Page"
              description="Landing page moderna e responsiva desenvolvida com foco em performance e experiência do usuário. Design clean com animações suaves e otimizada para conversão."
              ghLink="https://github.com/VladisonCosta/Project-Web" 
              technologies="HTML5, CSS3, JavaScript, Responsive Design"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;