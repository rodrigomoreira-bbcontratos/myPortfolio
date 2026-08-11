import styled from "styled-components";

export const Wrap = styled.section`
  display: flex;
  justify-content: center;
  padding: clamp(3.5rem, 8vw, 5rem) 1.5rem var(--section-space);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  main {
    max-width: var(--max-width);
    width: 100%;
    display: grid;
    gap: 2.5rem;
    align-items: center;
  }

  .copy {
    position: relative;
    z-index: 2;
  }

  .copy h1 {
    max-width: 9.5ch;
    margin-top: 1rem;
    font-size: clamp(3.2rem, 8.5vw, 5.8rem);
    line-height: 0.94;
    letter-spacing: -0.07em;
  }

  .copy p {
    max-width: 36rem;
    margin-top: 1.7rem;
    color: var(--muted-strong);
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    line-height: 1.75;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.8rem;
  }

  .stack span {
    display: inline-flex;
    align-items: center;
    min-height: 2.35rem;
    padding: 0.45rem 0.9rem;
    border: 1px solid var(--line);
    border-radius: 0.7rem;
    background: var(--surface-soft);
    color: var(--muted-strong);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-top: 2rem;
  }

  .secondary-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
  }

  .secondary-links a {
    min-width: 8.5rem;
    height: 3rem;
    padding: 0 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    text-decoration: none;
    border: 1px solid var(--line);
    border-radius: 0.8rem;
    color: var(--text);
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      border-color: var(--line-strong);
    }
  }

  .resume-link {
    margin-top: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--text);
    }
  }

  .visual {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .visual::before {
    content: "";
    position: absolute;
    left: 8%;
    bottom: 3rem;
    width: 4.8rem;
    height: 4.8rem;
    border: 1px solid rgba(56, 189, 248, 0.55);
    border-radius: 50%;
    opacity: 0.75;
  }

  @media screen and (min-width: 960px) {
    main {
      grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
      gap: 3rem;
    }
  }

  @media screen and (max-width: 768px) {
    .visual::before {
      display: none;
    }
  }
`;
