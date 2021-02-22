import React from "react";
import Loadersvg from "../../assets/svgs/loader.svg";
import { LoaderWrapper } from "./styledIndex";

const Loader = () => {
  return (
    <LoaderWrapper>
      <div>
        <img src={Loadersvg} alt="Loading..." />
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
