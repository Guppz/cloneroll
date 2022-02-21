import { FC } from "react";
interface Src {
  img: string;
  text: string;
  autor: string;
}
const ImgLastestNews: FC<Src> = (props: Src) => {
  return (
    <a
      className="mb-[0.5rem] flex items-start text-white"
      href="https://www.crunchyroll.com/anime-feature/2022/02/19/quiz-dollmaker-or-a-cosplayer-which-my-dress-up-darling-hobby-should-you-try"
      title="QUIZ: Dollmaker Or A Cosplayer — Which My Dress-Up Darling Hobby Should You Try?"
    >
      <div className=" h-[4.875rem] mr-[0.75rem] grow-0 shrink-0 basis-auto">
        <div className=" relative h-[calc(100%*1/1)]">
          <div className="h-[calc(100%*1/1)] flex  after:bottom-0 after:left-0 after:right-0 after:top-0 after:opacity-0">
            <div className="bg-[#141519] inline-flex relative">
              <svg
                className="overflow-hidden block "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 9"
              ></svg>
              <figure className="top-0 left-0 right-0 bottom-0 absolute">
                <img
                  className="block h-full w-full object-cover"
                  src={props.img}
                  alt={props.text}
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="flex grow-1 shrink-1 basis-auto min-w-0 flex-col">
        <h4 className="text-white text-base leading-6  ">{props.text}</h4>
        <div className="autor-grid">
          <small className=" text-[0.75rem font-semibold leading-6 ] inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap autor-grid-1 ">
            Feb 20, 2022 12:01pm CST
          </small>
          <small className=" text-[0.75rem font-semibold leading-6 ] inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap mr-[0.25rem] autor-grid-2">
            <span className="">&nbsp;</span>
            {props.autor}
          </small>
        </div>
      </div>
    </a>
  );
};

export default ImgLastestNews;
