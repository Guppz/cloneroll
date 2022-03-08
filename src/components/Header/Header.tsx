import { FC } from "react";
import Logo from "../Logo/Logo";
import HeaderButton from "./HeaderButton";
import Crown from "../svg/Crown";
import Search from "../svg/Search";
import BookMark from "../svg/BookMark";
import Avatar from "../svg/Avatar";

const Header: FC = () => {
  return (
    <header className="h-[3.75rem] bg-primary w-full text-white flex min-w-[80rem] justify-center right-0 left-0 z-[100] sticky top-0">
      <div className="grow-0 shrink-[1] basis-[13.75rem]">
        <Logo />
      </div>
      <div className="flex grow-0 shrink-0 basis-[65.625rem]">
        <HeaderButton title="Browse" />
        <HeaderButton title="Manga" />
        <HeaderButton title="Games" />
        <HeaderButton title="News" />
      </div>
      <div className="flex">
        <div className="flex cursor-pointer justify-center items-center hover:bg-secondary">
          <a
            href="/"
            className="pl-[0.25rem] pr-[0.5rem] flex items-center justify-center text-[#dadada]"
          >
            <Crown />
            <div className="flex flex-col mr-[0.25rem] uppercase">
              <span className="leading-[0.825rem] text-[#fab818] font-semibold text-[0.625rem]">
                Try free
              </span>
              <span className="leading-[0.825rem] font-semibold text-[0.625rem]">
                Premium
              </span>
            </div>
          </a>
        </div>

        <div className="flex cursor-pointer justify-center items-center hover:bg-secondary">
          <Search />
        </div>
        <div className="flex cursor-pointer justify-center items-center hover:bg-secondary">
          <BookMark />
        </div>
        <div className="flex cursor-pointer justify-center items-center hover:bg-secondary">
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
