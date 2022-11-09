import {useData} from "./useData";
import React from "react";

export function dataPreparation(dataValue) {
  const data = useData();
  if (!data) {
    return <pre>Loading...</pre>;
  }
  const data_ready = {};
  const dataColumn = data.map(dataValue);
  dataColumn.forEach(function(x) {
    data_ready[x] = (data_ready[x] || 0) + 1;
  });
  const data_mapped = Object.entries(data_ready).map(([key, value]) => ({
    key,
    value,
  }));
  return data_mapped;
}
