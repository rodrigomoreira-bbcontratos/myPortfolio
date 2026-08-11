import { stackGroups } from "../../data/stack";
import { stackSectionContent } from "../../data/siteContent";
import { Wrap } from "./styles";

const Habilidades = () => {
  return (
    <Wrap>
      <main>
        <header>
          <span className="section-kicker">{stackSectionContent.kicker}</span>
          <h2 className="section-title">{stackSectionContent.title}</h2>
          <p>{stackSectionContent.description}</p>
        </header>
        <div className="grid">
          {stackGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </Wrap>
  );
};

export default Habilidades;
