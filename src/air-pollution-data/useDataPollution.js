import {useState, useEffect} from "react";
import {csv} from "d3";

const url =
  "https://gist.githubusercontent.com/vsimevska/a70c1c0a7810f120ca99ed26e8a83e7e/raw/fccbd2541ea48f1a019c5b39fc664d746bdd5a34/global-air-pollution.csv";

export const useDataPollution = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    csv(url).then(setData);
  }, []);

  return data;
};
