import React from "react";

export function dataPreparationFemale(dataValue, data) {
  if (!data) {
    return <pre>Loading...</pre>;
  }
  const zeroSex = {};

  var count_zero_zero = 0;
  var count_zero_one = 0;
  var count_zero_two = 0;
  var count_zero_three = 0;
  var count_zero_four = 0;

  const tmp = data.map((d) => {
    if ((d["sex"] === "0" || d["Gender"] === 0) && d[dataValue] === 0) {
      count_zero_zero++;
      zeroSex["0"] = count_zero_zero;
    } else if ((d["sex"] === "0" || d["Gender"] === 0) && d[dataValue] === 1) {
      count_zero_one++;
      zeroSex["1"] = count_zero_one;
    } else if ((d["sex"] === "0" || d["Gender"] === 0) && d[dataValue] === 2) {
      count_zero_two++;
      zeroSex["2"] = count_zero_two;
    } else if ((d["sex"] === "0" || d["Gender"] === 0) && d[dataValue] === 3) {
      count_zero_three++;
      zeroSex["3"] = count_zero_three;
    } else if ((d["sex"] === "0" || d["Gender"] === 0) && d[dataValue] === 4) {
      count_zero_four++;
      zeroSex["4"] = count_zero_four;
    }
  });

  const data_mapped_zeroSex = Object.entries(zeroSex).map(([key, value]) => ({
    key,
    value,
  }));
  return data_mapped_zeroSex;
}
