import React from "react";

const VedioCard = (props) => {
  const { info } = props;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(info.snippet);

  console.log(thumbnails.medium.url);

  return (
    <div className="p-2  m-2 w-80 shadow-lg rounded-lg">
      <img className="" src={thumbnails.medium.url} />
      <ul className="">
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VedioCard;
