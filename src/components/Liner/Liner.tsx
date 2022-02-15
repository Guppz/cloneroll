import { FC } from "react";

interface HeadinProps {
  color: boolean;
}

const ShowContainer: FC<HeadinProps> = (props: HeadinProps) => {
  return (
    <>
      {props.color ? (
        <div className="mt-[0.75rem] h-[0.25rem] w-full bg-gradient-to-l from-[#213944] to-[#2abdbb]"></div>
      ) : (
        <div className="mt-[0.75rem] h-[0.25rem] w-full bg-gradient-to-l from-[#fab818] to-[#ef4323]"></div>
      )}
    </>
  );
};

export default ShowContainer;
