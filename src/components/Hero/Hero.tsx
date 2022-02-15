import { FC } from "react";

interface Src {
  img: string;
}

const Hero: FC<Src> = (props: Src) => {
  return (
    <div className="content-wrapper">
      <img src={props.img} alt="hero" />
    </div>
  );
};

export default Hero;
