import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  console.log(isMenuOpen, "this iss state of slideout pannel");

  if (!isMenuOpen) return null;

  return (
    <div className="p-2 shadow-lg col-span-1 w-60">
      <ul className="pl-3">
        <li>🏠 Home</li>
        <li>🎬 Shorts</li>
        <li>📹 Videos</li>
        <li>🔴 Live</li>
      </ul>

      <h1 className="font-bold pt-5 pl-3">Subscription</h1>
      <ul className="pl-3">
        <li>🎥 Movies</li>
        <li>🎮 Gaming</li>
        <li>🏅 Sport</li>
        <li>🎵 Music</li>
      </ul>

      <h1 className="font-bold pt-5 pl-3">WatchLater</h1>
      <ul className="pl-3">
        <li>🎥 Movies</li>
        <li>🎮 Gaming</li>
        <li>🏅 Sport</li>
        <li>🎵 Music</li>
      </ul>

      <h1 className="font-bold pt-5 pl-3">Trending</h1>
      <ul className="pl-3">
        <li>🔥 Movies</li>
        <li>🔥 Gaming</li>
        <li>🔥 Sport</li>
        <li>🔥 Music</li>
      </ul>
    </div>
  );
};

export default SideBar;
