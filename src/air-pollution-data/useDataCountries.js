import {useState, useEffect} from "react";
import {json} from "d3";
const url =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
export const useDataCountries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    json(url).then(setData);
  }, []);

  return data;
};
