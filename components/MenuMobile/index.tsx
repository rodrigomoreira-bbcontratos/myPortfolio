import React from "react";
import {
  Briefcase,
  EnvelopeSimple,
  House,
  Stack,
  User,
} from "phosphor-react";
import styled from "styled-components";

type MenuMobileProps = {
  isOpen: boolean;
};

const Wrap = styled.menu<MenuMobileProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
  height: 100vh;
  gap: 0.75rem;
  padding: 6rem 1.5rem 1.5rem;
  background: rgba(11, 13, 16, 0.98);
  font-size: 1rem;
  font-weight: 600;
  z-index: 10;
  transition: 0.3s ease;

  a {
    visibility: ${({ isOpen }) => (!isOpen ? "hidden" : "visible")};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.1rem;
    text-decoration: none;
    color: var(--text);
    border: 1px solid var(--border-soft);
    background: var(--surface);
  }
`;

const MenuMobile = ({ isOpen }: MenuMobileProps) => {
  return (
    <Wrap isOpen={isOpen}>
      <a href="#inicio">
        <House size={20} />
        Inicio
      </a>
      <a href="#experiencia">
        <Briefcase size={20} />
        Experiência
      </a>
      <a href="#stack">
        <Stack size={20} />
        Stack
      </a>
      <a href="#sobre">
        <User size={20} />
        Sobre
      </a>
      <a href="#contato">
        <EnvelopeSimple size={20} />
        Contato
      </a>
    </Wrap>
  );
};

export default MenuMobile;
