import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  const VedioId = searchParam.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CloseMenu());
  }, WatchPage);
  return (
    <div>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + VedioId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      />
    </div>
  );
};

export default WatchPage;
