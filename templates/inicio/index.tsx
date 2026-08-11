import { GithubLogo, LinkedinLogo } from "phosphor-react";
import AvatarImage from "../../assets/AvatarImage";
import Button from "../../components/Button";
import { heroContent } from "../../data/siteContent";
import { Wrap } from "./styles";

const Inicio = () => {
  return (
    <Wrap>
      <main>
        <section className="copy">
          <span className="section-kicker">{heroContent.kicker}</span>
          <h1>{heroContent.title}</h1>
          <p>{heroContent.description}</p>
          <div className="stack">
            {heroContent.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="actions">
            <a
              href={heroContent.primaryCta.href}
              download={heroContent.primaryCta.download}
            >
              <Button label={heroContent.primaryCta.label} />
            </a>
            <div className="secondary-links">
              {heroContent.secondaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  {link.label}
                  {link.label === "GitHub" ? (
                    <GithubLogo size={18} />
                  ) : (
                    <LinkedinLogo size={18} />
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="visual">
          <AvatarImage />
        </section>
      </main>
    </Wrap>
  );
};

export default Inicio;
