import { FC } from "react";
import Liner from "../Liner/Liner";
import SliderManga from "../MangaSlider/SliderManga";

interface HeadinProps {
  title: string;
  suvText: string;
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
            "{props.suvText}"
          </p>
          <Liner color={true} />
        </div>
        {/* <MangaCard
          img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpeg"
          title="One Piece"
        /> */}
        <SliderManga />
      </div>
    </div>
  );
};

export default ShowContainer;
