import { aboutSectionContent } from "../../data/siteContent";
import { Wrap } from "./styles";

const Sobre = () => {
  return (
    <Wrap>
      <main>
        <header>
          <span className="section-kicker">{aboutSectionContent.kicker}</span>
          <h2 className="section-title">{aboutSectionContent.title}</h2>
        </header>
        <section>
          {aboutSectionContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </main>
    </Wrap>
  );
};

export default Sobre;
