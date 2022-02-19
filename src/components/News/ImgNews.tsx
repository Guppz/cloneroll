import { FC } from "react";
interface Src {
  img: string;
  text: string;
  autor: string;
}
const ImgNews: FC<Src> = (props: Src) => {
  return (
    <a
      className="mb-[1.25rem] block max-w-full"
      href="https://www.crunchyroll.com/anime-feature/2022/02/19/quiz-dollmaker-or-a-cosplayer-which-my-dress-up-darling-hobby-should-you-try"
      title="QUIZ: Dollmaker Or A Cosplayer — Which My Dress-Up Darling Hobby Should You Try?"
    >
      <div className="mb-[0.75rem] relative">
        <div className="w-[cal(100%*1/1)] before:bg-white before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:top-0 before:absolute">
          <div className="w-[cal(100%*1/1)] flex ">
            <div className="bg-[#141519] inline-flex ">
              <svg
                className=" overflow-hidden self-start block h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 9"
              ></svg>
              <figure className=" bottom-0 left-0 right-0 top-0 m-0 absolute">
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
      <h4 className="text-white mb-[0.5rem] overflow-hidden relative break-words text-[1.125rem] leading-[1.625rem] line-clamp ">
        {props.text}
      </h4>
      <small className="text-[#a0a0a0] block mb-[0.25rem] leading-4 font-semibold text-[0.75rem]">
        Feb 19, 2022 10:00am CST
      </small>
      <div className="text-[#a0a0a0]  items-center flex">
        <small className=" inline-flex grow-[1] shrink-[1] basis-[auto] mr-[0.25rem] max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {props.autor}
        </small>
      </div>
    </a>
  );
};

export default ImgNews;
