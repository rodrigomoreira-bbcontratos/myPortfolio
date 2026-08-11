import styled from "styled-components";
import { footerContent } from "../../data/siteContent";

const Wrap = styled.footer`
  margin-top: var(--section-space);
  padding: 2rem 1.5rem 3rem;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  main {
    max-width: var(--max-width);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .topline {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    color: var(--muted);
    align-items: center;
    text-align: center;

    strong {
      color: var(--text);
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .topline {
      align-items: flex-end;
      text-align: right;
    }
  }
`;

const Footer = () => {
  return (
    <Wrap>
      <main>
        <div className="topline">
          <strong>{footerContent.copyright}</strong>
        </div>
      </main>
    </Wrap>
  );
};

export default Footer;
