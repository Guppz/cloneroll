import { FC } from "react";

const Avatar: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-center w-[36px] h-[36px] mx-2 overflow-hidden rounded-full">
        <img
          alt=""
          src="https://static.crunchyroll.com/assets/avatar/170x170/1053-so-im-a-spider-so-what-katia.png"
        />
      </div>
    </div>
  );
};

export default Avatar;
