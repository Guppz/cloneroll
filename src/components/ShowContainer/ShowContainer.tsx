import { FC } from "react";
import Liner from "../Liner/Liner";

interface HeadinProps {
  title: string;
  suvText: string;
}

const ShowContainer: FC<HeadinProps> = (props: HeadinProps) => {
  return (
    <div>
      <div className="content-wrapper">
        <h2 className="text-white text-[1.75rem] leading-9 font-['Helvetica_Neue,helvetica,sans-serif'] tracking-[-0.0313rem]">
          {props.title}
        </h2>
        <p className="text-white text-4 leading-6 font-medium">
          "{props.suvText}"
        </p>
        <Liner color={true} />
      </div>
    </div>
  );
};

export default ShowContainer;
