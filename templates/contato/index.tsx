import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "phosphor-react";
import { contactSectionContent } from "../../data/siteContent";
import { Wrap } from "./styles";

const Contato = () => {
  return (
    <Wrap>
      <main>
        <header>
          <span className="section-kicker">{contactSectionContent.kicker}</span>
          <h2 className="section-title">{contactSectionContent.title}</h2>
          <p>{contactSectionContent.description}</p>
        </header>
        <section>
          <div className="contact-list">
            {contactSectionContent.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <div className="contact-copy">
                  {link.label === "Email" ? (
                    <EnvelopeSimple size={22} />
                  ) : link.label === "GitHub" ? (
                    <GithubLogo size={22} />
                  ) : (
                    <LinkedinLogo size={22} />
                  )}
                  <div className="label">
                    <strong>{link.label}</strong>
                    <span>{link.value}</span>
                  </div>
                </div>
                <span className="arrow">-&gt;</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Wrap>
  );
};

export default Contato;
