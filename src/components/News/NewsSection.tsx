import { FC } from "react";
import Liner from "../Liner/Liner";

const NewsSection: FC = () => {
  return (
    <div className="content-wrapper bg-black bg-cover bg-no-repeat">
      <div className="py-[3rem] px-[3.5rem]">
        <div className=" pb-4">
          <h2 className="text-white text-[1.75rem] leading-9 font-['Helvetica_Neue,helvetica,sans-serif'] tracking-[-0.0313rem]">
            Crunchyroll News
          </h2>
          <Liner color={false} />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
