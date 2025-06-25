import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME ME <span className="purple"> APRESENTAR </span>
            </h1>
            <p className="home-about-body">
              Me chamo <b className="purple">Vladison Lucas Costa Dos Santos</b>, 
              tenho 26 anos e sou natural de Pernambuco. Sou apaixonado por tecnologia 
              e programação! 💻
              <br />
              <br />
              Concluí o ensino médio no Colégio Motivo e me formei como técnico em informática 
              pelo Senai. Atualmente estou cursando
              <i>
                <b className="purple"> Ciência da Computação na UniNassau. </b>
              </i>
              <br />
              <br />
              Tenho experiência e fluência em tecnologias como &nbsp;
              <i>
                <b className="purple">Java, JavaScript, Node.js, Python, TypeScript e desenvolvimento web. </b>
              </i>
              <br />
              <br />
              Minhas áreas de interesse são desenvolvimento de &nbsp;
              <i>
                <b className="purple">aplicações web modernas e soluções tecnológicas inovadoras </b> 
                e também tenho interesse em áreas relacionadas a{" "}
                <b className="purple">
                  novas tecnologias emergentes.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, aplico minha paixão por desenvolvimento com
              <b className="purple"> Java e Node.js</b> utilizando
              <i>
                <b className="purple">
                  {" "}
                  frameworks modernos como Spring Boot, TypeScript
                </b>
              </i>
              &nbsp; e tecnologias como
              <i>
                <b className="purple"> React.js, Next.js, Vite, Mysql, Prisma e Bootstrap</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE NAS REDES</h1>
            <p>
              Fique à vontade para <span className="purple">se conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VladisonCosta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vladison-costa-05445732b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;