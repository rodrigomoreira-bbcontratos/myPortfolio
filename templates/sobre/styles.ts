import styled from "styled-components";

export const Wrap = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--section-space) 1.5rem 0;

  main {
    max-width: var(--max-width);
    width: 100%;
    display: grid;
    gap: 1.75rem;
  }

  header {
    max-width: 20rem;
  }

  section {
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    p {
      font-size: clamp(1rem, 2vw, 1.1rem);
      color: var(--muted-strong);
      line-height: 1.9;
    }
  }

  @media screen and (min-width: 920px) {
    main {
      grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
      align-items: start;
    }
  }
`;
