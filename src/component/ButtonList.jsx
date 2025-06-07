import React from "react";
import Button from "./Button";

const buttonCategories = [
  "All",
  "Kapil Sharma",
  "Comedy",
  "Music",
  "Live",
  "Gaming",
  "News",
  "Sports",
  "Movies",
  "Mixes",
  "Education",
  "Podcast",
  "Science",
  "Technology",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {buttonCategories.map((itr) => {
        return <Button key={itr} name={itr} />;
      })}
    </div>
  );
};

export default ButtonList;
