import { FC } from "react";
import Liner from "../Liner/Liner";
import ImgNews from "./ImgNews";
import ImgLastestNews from "./ImgLastestNews";

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
          <div className="grid-item-2 grid-top-late">
            <div className="border-b-0 mb-0 pb-0 ">
              <h4 className="leading-[1.625rem] text-[1.125rem] font-medium mb-[0.75rem] text-white">
                Latest
              </h4>
              <div className="">
                <ImgLastestNews
                  img="https://img1.ak.crunchyroll.com/i/spire3/8aa5fec89768d7210d28887c8ab7cb4d1645322044_thumb.jpg"
                  text="Elden Ring Shares 7-Minute Overview Trailer Ahead of Launch?"
                  autor="Joseph Luster"
                />
                <ImgLastestNews
                  img="https://img1.ak.crunchyroll.com/i/spire2/4a47311072104f99d126d29c458357461644997545_thumb.jpg"
                  text="FEATURE: Is Reiner Braun The True Heart Of Attack on Titan?"
                  autor="Annie M"
                />
                <ImgLastestNews
                  img="https://img1.ak.crunchyroll.com/i/spire2/94fdbc651742e7c468effb36c83fbb071645364150_thumb.jpg"
                  text="VA Mikako Komatsu Joins the Cast of Luminous Witches TV Anime"
                  autor="Annie M"
                />

                <ImgLastestNews
                  img="https://img1.ak.crunchyroll.com/i/spire2/4bb71821ded2344d96b4d8098aaa9ac31645363334_thumb.jpg"
                  text="Music is Magic in DEEMO Memorial Keys Anime Film Trailer"
                  autor="Joseph Luster"
                />
                <ImgLastestNews
                  img="https://img1.ak.crunchyroll.com/i/spire2/7404190040897ca1f8a7fe7d7ffd1a281645352618_thumb.jpg"
                  text="Fruits Basket -prelude- Theatrical Release Makes 33 Million Yen in 2 Days"
                  autor="Annie M"
                />
                <ImgLastestNews
                  img="https://img1.ak.crunchyroll.com/i/spire2/08e5ddc2a9ceba7f6a66d3889a8319241645350174_thumb.jpg"
                  text="Science SARU Teases Lovely New TV Anime YUREI DECO For Summer 2022"
                  autor="Annie M"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
