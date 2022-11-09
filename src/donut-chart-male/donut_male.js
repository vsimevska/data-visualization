import {useData} from "../donut-chart/useData";
import React from "react";

export function dataPreparationMale(dataValue) {
  const data = useData();
  if (!data) {
    return <pre>Loading...</pre>;
  }
  const zeroSex = {};
  const oneSex = {};

  var count_one_zero = 0;
  var count_one_one = 0;
  var count_one_two = 0;
  var count_one_three = 0;
  var count_one_four = 0;

  const tmp = data.map((d) => {
    if (d["sex"] === 1 && d[dataValue] === 0) {
      count_one_zero++;
      oneSex["0"] = count_one_zero;
    } else if (d["sex"] === 1 && d[dataValue] === 1) {
      count_one_one++;
      oneSex["1"] = count_one_one;
    } else if (d["sex"] === 1 && d[dataValue] === 2) {
      count_one_two++;
      oneSex["2"] = count_one_two;
    } else if (d["sex"] === 1 && d[dataValue] === 3) {
      count_one_three++;
      oneSex["3"] = count_one_three;
    } else if (d["sex"] === 1 && d[dataValue] === 4) {
      count_one_four++;
      oneSex["4"] = count_one_four;
    }
  });
  const data_mapped_oneSex = Object.entries(oneSex).map(([key, value]) => ({
    key,
    value,
  }));

  return data_mapped_oneSex;
}
