import { FC } from "react";

const Search: FC = () => {
  return (
    <div className="flex items-center justify-center px-[0.8125rem]">
      <svg
        className="fill-[#fff] h-[1.5rem]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-t="search-svg"
        aria-labelledby="search-svg"
        aria-hidden="false"
        role="img"
      >
        <title id="search-svg">Search</title>
        <path d="M15.474 14.035l6.235 6.26a1 1 0 1 1-1.418 1.41l-6.228-6.253a7.5 7.5 0 1 1 1.41-1.418zM9.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"></path>
      </svg>
    </div>
  );
};

export default Search;
