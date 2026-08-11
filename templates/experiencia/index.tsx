import { experience } from "../../data/experience";
import { experienceSectionContent } from "../../data/siteContent";
import { Wrap } from "./styles";

const Experiencia = () => {
  return (
    <Wrap>
      <main>
        <header>
          <span className="section-kicker">{experienceSectionContent.kicker}</span>
          <h2 className="section-title">{experienceSectionContent.title}</h2>
          <p>{experienceSectionContent.description}</p>
        </header>
        <div className="timeline">
          {experience.map((group) => (
            <section className="company" key={group.company}>
              <div className="company-header">
                <h3 className="company-name">{group.company}</h3>
              </div>
              <div className="role-list">
                {group.items.map((item) => (
                  <article className="role" key={`${item.company}-${item.role}`}>
                    <div className="eyebrow">
                      <div>{item.period}</div>
                      {item.contract ? (
                        <span className="contract">{item.contract}</span>
                      ) : null}
                    </div>
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.description}</p>
                      {item.highlights.length ? (
                        <ul>
                          {item.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    <div className="stack">
                      {item.stack.map((stackItem) => (
                        <span key={stackItem}>{stackItem}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </Wrap>
  );
};

export default Experiencia;
