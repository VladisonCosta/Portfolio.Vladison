import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor FullStack",
          "Estudante de Ciência da Computação",
          "Apaixonado por Tecnologia",
          "Desenvolvedor Fullstack",
          "Desenvolvedor em React & Node.js",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;