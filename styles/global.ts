import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  :root {
    --background: #070b11;
    --background-elevated: #0b1017;
    --surface: rgba(255, 255, 255, 0.03);
    --surface-soft: rgba(255, 255, 255, 0.02);
    --text: #f4f7fb;
    --muted-strong: #c6cfdb;
    --muted: #94a0b2;
    --accent: #38bdf8;
    --accent-soft: rgba(56, 189, 248, 0.14);
    --line: rgba(255, 255, 255, 0.08);
    --line-strong: rgba(56, 189, 248, 0.42);
    --shadow: 0 24px 80px rgba(0, 0, 0, 0.32);
    --max-width: 1120px;
    --section-space: clamp(4.5rem, 8vw, 7rem);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    color: var(--text);
    font-family: "Inter", sans-serif;
    text-rendering: optimizeLegibility;
    background:
      radial-gradient(circle at 14% 18%, rgba(56, 189, 248, 0.08), transparent 22%),
      radial-gradient(circle at 82% 16%, rgba(56, 189, 248, 0.05), transparent 18%),
      linear-gradient(180deg, #08101a 0%, #070b11 38%, #06090f 100%);
  }

  body::selection {
    background: rgba(56, 189, 248, 0.24);
  }

  a,
  button,
  input,
  textarea {
    font: inherit;
  }

  a {
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    color: inherit;
  }

  section[id],
  div[id] {
    scroll-margin-top: 6rem;
  }

  .section-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.74rem;
    font-weight: 700;
  }

  .section-title {
    margin-top: 0.95rem;
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 0.98;
    letter-spacing: -0.05em;
  }

  .editorial {
    font-family: "Instrument Serif", serif;
    font-weight: 400;
  }
`;

export default GlobalStyled;
