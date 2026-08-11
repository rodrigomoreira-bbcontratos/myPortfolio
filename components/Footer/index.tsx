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

    strong {
      color: var(--text);
      font-size: 1rem;
    }
  }

  nav {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    color: var(--muted-strong);
    transition: color 0.2s ease;

    &:hover {
      color: var(--text);
    }
  }

  @media screen and (min-width: 768px) {
    .topline {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Footer = () => {
  return (
    <Wrap>
      <main>
        <div className="topline">
          <strong>{footerContent.copyright}</strong>
          <nav>
            {footerContent.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </main>
    </Wrap>
  );
};

export default Footer;
