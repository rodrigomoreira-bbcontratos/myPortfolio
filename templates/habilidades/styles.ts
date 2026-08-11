import styled from "styled-components";

export const Wrap = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--section-space) 1.5rem 0;

  main {
    max-width: var(--max-width);
    width: 100%;
  }

  header {
    max-width: 38rem;
    margin-bottom: 3.5rem;

    p {
      margin-top: 1rem;
      color: var(--muted);
      line-height: 1.75;
    }
  }

  .grid {
    display: grid;
    gap: 2rem 3rem;
  }

  article {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 0.96rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent);
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem 1.4rem;
  }

  li {
    color: var(--text);
    font-size: clamp(1rem, 1.5vw, 1.12rem);
    line-height: 1.6;
  }

  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
