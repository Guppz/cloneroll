import { FC } from "react";

interface HeadinProps {
  title: string;
}

const HeaderButton: FC<HeadinProps> = (props: HeadinProps) => {
  return (
    <a
      className="pl-4 pr-4 text-[#dadada] flex cursor-pointer justify-center items-center hover:bg-secondary"
      href="https://crunchyroll.com/comics/manga"
    >
      <span className="leading-6 font-medium">{props.title}</span>
    </a>
  );
};

export default HeaderButton;
