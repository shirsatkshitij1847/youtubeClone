import React from "react";
import { useState, useEffect } from "react";
import { YoutTubeApi } from "./utils/constant";
import VedioCard from "./VedioCard";
const VedioContainer = () => {
  const [vedios, setVedios] = useState([]);

  async function getApiData() {}

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch(YoutTubeApi);
      const jsonData = await data.json();

      setVedios(jsonData.items);
    };

    fetchdata();
  }, []);

  return (
    <div className="flex flex-wrap">
      {vedios.map((itr) => {
        return <VedioCard key={itr.id} info={itr} />;
      })}
    </div>
  );
};

export default VedioContainer;
