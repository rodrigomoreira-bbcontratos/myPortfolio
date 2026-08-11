import { CaretUp } from "phosphor-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import Contato from "../templates/contato";
import Experiencia from "../templates/experiencia";
import Habilidades from "../templates/habilidades";
import Inicio from "../templates/inicio";
import Sobre from "../templates/sobre";

type HomeProps = {
  isScroll: boolean;
};

const Wrap = styled.div<HomeProps>`
  position: relative;

  #btn-up {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    z-index: 20;

    a {
      display: ${({ isScroll }) => (isScroll ? "flex" : "none")};
      width: 2.75rem;
      height: 2.75rem;
      align-items: center;
      justify-content: center;
      background: var(--accent);
      color: var(--background);
      text-decoration: none;
      border-radius: 999px;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsScroll(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOpen = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsScroll);

    return () => {
      window.removeEventListener("scroll", handleIsScroll);
    };
  }, []);

  return (
    <Wrap isScroll={isScroll}>
      {isOpen && (
        <div onClick={handleOpen}>
          <MenuMobile isOpen={isOpen} />
        </div>
      )}
      <div id="btn-up">
        <a href="#inicio" aria-label="Voltar ao topo">
          <CaretUp size={20} weight="bold" onClick={scrollToTop} />
        </a>
      </div>
      <div id="inicio">
        <Header handleOpen={handleOpen} />
      </div>
      <div>
        <Inicio />
      </div>
      <div id="experiencia">
        <Experiencia />
      </div>
      <div id="stack">
        <Habilidades />
      </div>
      <div id="sobre">
        <Sobre />
      </div>
      <div id="contato">
        <Contato />
      </div>
      <div>
        <Footer />
      </div>
    </Wrap>
  );
};

export default Home;
