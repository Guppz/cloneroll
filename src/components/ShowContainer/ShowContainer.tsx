import { FC } from "react";
import Liner from "../Liner/Liner";
import SliderManga from "../MangaSlider/SliderManga";

interface HeadinProps {
  title: string;
  suvText: string;
  color: boolean;
}

const ShowContainer: FC<HeadinProps> = (props: HeadinProps) => {
  return (
    <div>
      <div className="content-wrapper">
        <div className=" pb-4">
          <h2 className="text-white text-[1.75rem] leading-9 font-['Helvetica_Neue,helvetica,sans-serif'] tracking-[-0.0313rem]">
            {props.title}
          </h2>
          <p className="text-white text-4 leading-6 font-medium">
            {props.suvText}
          </p>
          <Liner color={props.color} />
        </div>
        <SliderManga />
      </div>
    </div>
  );
};

export default ShowContainer;
