/* eslint-disable jsx-a11y/anchor-has-content */
import { FC } from "react";

interface Src {
  img: string;
  title: string;
}

const MangaCard: FC<Src> = (props: Src) => {
  return (
    <div className="min-w-0 px-[calc(1.875rem/2)] snap-start w-[180px] h-[341px]">
      <div className="">
        <a href="-"></a>
        <img
          className="blockobject-cover w-[150px] h-[225px] "
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
        </div>
      </div>
    </div>
  );
};

export default MangaCard;
