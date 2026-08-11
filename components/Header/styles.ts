import styled from "styled-components";

export const Wrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  backdrop-filter: blur(18px);
  background: rgba(7, 11, 17, 0.84);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  section {
    max-width: var(--max-width);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .brand {
    text-decoration: none;
    display: inline-flex;
    flex-direction: column;
    gap: 0.18rem;
  }

  .brand strong {
    font-size: 0.95rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .brand span {
    color: var(--muted);
    font-size: 0.83rem;
  }

  nav {
    display: none;
    align-items: center;
    gap: 1.4rem;
    font-size: 0.95rem;

    a {
      text-decoration: none;
      color: var(--muted-strong);
      transition: color 0.2s ease;

      &:hover {
        color: var(--text);
      }
    }
  }

  button {
    border: none;
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 920px) {
    nav {
      display: flex;
    }

    button {
      display: none;
    }
  }
`;
