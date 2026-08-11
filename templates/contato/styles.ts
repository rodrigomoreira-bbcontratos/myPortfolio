import styled from "styled-components";

export const Wrap = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--section-space) 1.5rem 0;

  main {
    max-width: var(--max-width);
    width: 100%;
    display: grid;
    gap: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  header {
    max-width: 30rem;

    p {
      margin-top: 1rem;
      color: var(--muted);
      line-height: 1.75;
    }
  }

  .contact-list {
    display: grid;
    gap: 1rem;
  }

  .contact-list a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-decoration: none;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover {
      border-color: var(--line-strong);
    }
  }

  .contact-copy {
    display: flex;
    align-items: center;
    gap: 0.95rem;
  }

  .label {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  strong {
    font-size: 1rem;
  }

  span {
    color: var(--muted);
    font-size: 0.95rem;
    word-break: break-word;
  }

  .arrow {
    color: var(--muted);
  }

  @media screen and (min-width: 920px) {
    main {
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
      align-items: start;
    }
  }
`;
