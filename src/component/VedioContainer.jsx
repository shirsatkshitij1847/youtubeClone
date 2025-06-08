import React from "react";
import { useState, useEffect } from "react";
import { YoutTubeApi } from "./utils/constant";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";
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
    <div
      className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6
"
    >
      <div className="flex flex-wrap gap-4 justify-center">
        {vedios.map((itr) => {
          return (
            <Link to={`/watch?v=${itr.id}`}>
              <VedioCard key={itr.id} info={itr} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VedioContainer;
