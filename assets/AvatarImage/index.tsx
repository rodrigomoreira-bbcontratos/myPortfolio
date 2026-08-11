import styled from "styled-components";

const AvatarImageStyles = styled.div`
  position: relative;
  width: min(100%, 27rem);
  margin: 0 auto;
  isolation: isolate;

  .frame {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    z-index: 2;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    filter: contrast(1.01) saturate(0.98);
  }

  .photo-fade,
  .outline-a,
  .dot-grid,
  .circle {
    position: absolute;
    pointer-events: none;
  }

  .photo-fade {
    inset: 0;
    z-index: 3;
    background:
      linear-gradient(180deg, rgba(7, 11, 17, 0.04), rgba(7, 11, 17, 0.14)),
      linear-gradient(90deg, rgba(7, 11, 17, 0) 58%, rgba(7, 11, 17, 0.2) 100%);
  }

  .outline-a {
    inset: 1.2rem -1rem -1rem 2.4rem;
    border: 1px solid rgba(56, 189, 248, 0.1);
    border-radius: 1rem;
  }

  .dot-grid {
    top: 1.1rem;
    right: -1.8rem;
    width: 4.8rem;
    height: 4.8rem;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.24) 1px,
      transparent 1px
    );
    background-size: 0.7rem 0.7rem;
    opacity: 0.5;
  }

  .circle {
    left: -2rem;
    bottom: 5rem;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid rgba(56, 189, 248, 0.42);
    border-radius: 50%;
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    .dot-grid,
    .circle {
      display: none;
    }

    .outline-a {
      inset: 1rem -0.4rem -0.5rem 1.4rem;
    }
  }
`;

const AvatarImage = () => {
  return (
    <AvatarImageStyles>
      <span className="circle" />
      <span className="outline-a" />
      <span className="dot-grid" />
      <div className="frame">
        <img src="/hero-photo.png" alt="Rodrigo Moreira" />
        <span className="photo-fade" />
      </div>
    </AvatarImageStyles>
  );
};

export default AvatarImage;
