import { List } from "phosphor-react";
import { headerContent } from "../../data/siteContent";
import { Wrap } from "./styles";

type HeaderProps = {
  handleOpen: () => void;
};

const Header = ({ handleOpen }: HeaderProps) => {
  return (
    <Wrap>
      <section>
        <a className="brand" href="#inicio">
          <strong>{headerContent.brand.name}</strong>
          <span>{headerContent.brand.role}</span>
        </a>
        <nav>
          {headerContent.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button onClick={handleOpen} aria-label="Abrir menu">
          <List size={24} color="#f4f7fb" />
        </button>
      </section>
    </Wrap>
  );
};

export default Header;
