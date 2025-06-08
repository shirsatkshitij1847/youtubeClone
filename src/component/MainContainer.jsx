import React from "react";
import ButtonList from "./ButtonList";
import VedioContainer from "./VedioContainer";

const MainContainer = () => {
  return (
    <div className="col-span-10 max-w-12xl mx-auto ">
      <ButtonList />
      <VedioContainer />
    </div>
  );
};

export default MainContainer;
