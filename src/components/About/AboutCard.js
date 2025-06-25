import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá! Eu sou <span className="purple">Vladison Lucas Costa Dos Santos</span>,
            um desenvolvedor FullStack de <span className="purple">Pernambuco, Brasil.</span>
            <br />
            <br />
            Tenho 26 anos e sou formado como técnico em informática pelo Senai, 
            onde desenvolvi uma base sólida em programação e sistemas. Atualmente, 
            estou cursando Ciência da Computação na UniNassau, sempre buscando 
            aprimorar meus conhecimentos e me manter atualizado com as tecnologias mais modernas.
            <br />
            <br />
            Sou especializado em desenvolvimento web com foco em <span className="purple">Java</span> e 
            <span className="purple"> Node.js</span>, utilizando frameworks como Spring Boot para backend 
            e React.js para frontend. Tenho experiência prática com TypeScript, Next.js, 
            Prisma ORM e diversas outras tecnologias do ecossistema JavaScript.
            <br />
            <br />
            Além da programação, outras atividades que gosto de fazer:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Estudar novas tecnologias e frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar games
            </li>
            <li className="about-activity">
              <ImPointRight /> Contribuir em projetos open source
            </li>
            <li className="about-activity">
              <ImPointRight /> Resolver desafios de programação
            </li>
            <li className="about-activity">
              <ImPointRight /> Compartilhar conhecimento com outros desenvolvedores
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A tecnologia é melhor quando aproxima as pessoas e soluciona problemas reais!"
          </p>
          <footer className="blockquote-footer">Vladison Costa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;