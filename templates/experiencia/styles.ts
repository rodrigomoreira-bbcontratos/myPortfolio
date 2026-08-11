import styled from "styled-components";

export const Wrap = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--section-space) 1.5rem 0;

  main {
    width: 100%;
    max-width: var(--max-width);
  }

  header {
    max-width: 42rem;
    margin-bottom: 3.5rem;

    p {
      margin-top: 1rem;
      color: var(--muted);
      line-height: 1.75;
    }
  }

  .timeline {
    position: relative;
    display: grid;
    gap: 2.25rem;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 0.4rem;
    top: 0.4rem;
    bottom: 0.4rem;
    width: 1px;
    background: linear-gradient(
      180deg,
      rgba(56, 189, 248, 0.5),
      rgba(255, 255, 255, 0.08)
    );
  }

  .company {
    position: relative;
    display: grid;
    gap: 1rem;
    padding-left: 2.2rem;
  }

  .company::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.45rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: var(--background);
    border: 1px solid var(--line-strong);
    box-shadow: 0 0 0 0.28rem rgba(56, 189, 248, 0.08);
  }

  .company-header {
    display: grid;
    gap: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .company-name {
    font-size: 1.3rem;
    letter-spacing: -0.03em;
  }

  .role-list {
    display: grid;
    gap: 2rem;
  }

  .role {
    display: grid;
    gap: 0.95rem;
    padding-bottom: 1.9rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .role:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .eyebrow {
    display: grid;
    gap: 0.45rem;
    color: var(--muted);
    font-size: 0.94rem;
  }

  .contract {
    color: var(--accent);
    font-size: 0.88rem;
    font-weight: 600;
  }

  h3 {
    font-size: clamp(1.2rem, 1.8vw, 1.55rem);
    line-height: 1.2;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 56rem;
    color: var(--muted-strong);
    line-height: 1.75;
  }

  ul {
    display: grid;
    gap: 0.6rem;
    padding-left: 1.05rem;
  }

  li {
    color: var(--muted);
    line-height: 1.65;
  }

  li::marker {
    color: var(--accent);
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    margin-top: 0.15rem;
  }

  .stack span {
    color: var(--muted);
    font-size: 0.95rem;
  }

  @media screen and (min-width: 920px) {
    .role {
      grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.9fr) minmax(0, 0.85fr);
      align-items: start;
      gap: 1.5rem;
    }

    .stack {
      justify-content: flex-end;
      text-align: right;
    }
  }
`;
