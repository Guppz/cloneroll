import { FC } from "react";
import Liner from "../Liner/Liner";
import ImgNews from "./ImgNews";

const NewsSection: FC = () => {
  return (
    <div className="content-wrapper bg-black">
      <div className="pt-[1rem]  px-[1rem]">
        <div className=" pb-4">
          <h2 className="text-white text-[1.75rem] leading-9 font-['Helvetica_Neue,helvetica,sans-serif'] tracking-[-0.0313rem]">
            Crunchyroll News
          </h2>
          <Liner color={false} />
        </div>
        <div className="grid-area">
          <div className="grid-item-1 border-b-0 mb-0 pb-0">
            <h4 className="leading-[1.625rem] text-[1.125rem] font-medium mb-[0.75rem] text-white">
              Top News
            </h4>
            <div className="block grid-top-news">
              <ImgNews
                img="https://img1.ak.crunchyroll.com/i/spire3/ea5be37d467e8961d3c2f57fa37a7d5b1644616572_thumb.png"
                text="UIZ: Dollmaker Or A Cosplayer — Which My Dress-Up Darling Hobby Should
                      You Try?"
                autor="Annie M"
              />
              <ImgNews
                img="https://img1.ak.crunchyroll.com/i/spire4/5967fbb30bf8e458a76ed40c635b5ead1645212816_thumb.png"
                text="INTERVIEW: Meet The Educator Using Manga to Change Young People's Lives"
                autor="Cayla Coats"
              />
            </div>
          </div>
          <div className="grid-item-2">
            <div className="grid-item-1 border-b-0 mb-0 pb-0">
              <h4 className="leading-[1.625rem] text-[1.125rem] font-medium mb-[0.75rem] text-white">
                Latest
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
