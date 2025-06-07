import React from "react";
import ButtonList from "./ButtonList";
import VedioContainer from "./VedioContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 pl-3">
      <ButtonList />
      <VedioContainer />
    </div>
  );
};

export default MainContainer;
