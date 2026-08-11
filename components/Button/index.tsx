import styled from "styled-components";

type ButtonProps = {
  onClick?: () => void;
  label: string;
  variant?: "primary" | "secondary";
};

const Wrap = styled.div`
  button {
    min-width: 176px;
    height: 3rem;
    padding: 0 1.1rem;
    background: var(--accent);
    color: #07110b;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    border: 1px solid transparent;
    font-weight: 700;
    transition: transform 0.2s ease, opacity 0.2s ease,
      border-color 0.2s ease, background-color 0.2s ease;

    &:hover {
      cursor: pointer;
      transform: translateY(-1px);
      opacity: 0.96;
    }
  }

  button[data-variant="secondary"] {
    min-width: auto;
    height: 2.8rem;
    padding: 0 1rem;
    background: transparent;
    color: var(--muted-strong);
    border-color: var(--line);
    font-weight: 600;
  }

  button[data-variant="secondary"]:hover {
    border-color: var(--line-strong);
    color: var(--text);
  }
`;

const Button = ({ onClick, label, variant = "primary" }: ButtonProps) => {
  return (
    <Wrap>
      <button type="button" onClick={onClick} data-variant={variant}>
        {label}
      </button>
    </Wrap>
  );
};

export default Button;
