/* eslint-disable jsx-a11y/anchor-has-content */
import { FC } from "react";
import { Link } from "react-router-dom";

interface Src {
  img: string;
  title: string;
  manga: any;
  id: number;
}

const MangaCard: FC<Src> = (props: Src) => {
  return (
    <div className="min-w-0 pr-[calc(1.875rem/2)] snap-start w-[150px] h-[305px] hover:bg-[#23252b]">
      <div className=" w-[150px] h-[225px]">
        <Link
          to={`/manga/${props.id}`}
          state={{ manga: props.manga, id: props.id }}
          className="w-[162px] h-[305px] bottom-0 left-0 right-0 top-0 absolute"
        ></Link>
        <img
          className="blockobject-cover w-[150px] h-[225px]  "
          src={props.img}
          alt="Hero"
          loading="lazy"
        />
        <div className="pt-[0.75rem]">
          <h4
            className="text-[0.875rem] leading-[1.125rem] 
          font-['Lato,Helvetica Neue,helvetica,sans-serif'] font-medium text-white overflow-wrap"
          >
            {props.title}
          </h4>
          <div className="text-[#a0a0a0] inline-block mt-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            <span className=" leading-[1.125rem] text-[0.875rem] font-semibold text-[#2abdbb]">
              Series
            </span>{" "}
            <span className="dot  leading-[1.125rem] text-[0.875rem] font-semibold">
              Subtitled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaCard;
