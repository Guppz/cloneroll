import { FC } from "react";
import { Link } from "react-router-dom";
const ViewAll: FC = () => {
  return (
    <div className="content-wrapper flex items-center flex-col text-center pt-[0.625rem]">
      <img
        className="mb-4"
        src="https://static.crunchyroll.com/cxweb/assets/img/home/yuzu.png"
        alt="hero"
      />
      <h3 className="leading-[1.625rem] font-semibold text-[1.95rem]]  text-white text-center mb-6">
        {"Still looking for something to watch? "}
        <br />
        {"Check out our full library "}
      </h3>
      <Link role="button" className="text-[#f47521] w-auto button" to="/all">
        <span className="text-[0.875rem] leading-5 flex items-center content-center ">
          View all
        </span>
      </Link>
    </div>
  );
};

export default ViewAll;
