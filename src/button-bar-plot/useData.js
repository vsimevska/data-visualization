import React, {useState, useEffect} from "react";
import {csv} from "d3";
const url =
  "https://gist.githubusercontent.com/vsimevska/9528f686b6e4f6536e7322773aeea1a1/raw/84049e35ba181c2414c3e87bf5770098c533b2f2/heart_attack.csv";
export const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const row = (d) => {
      d.age = +d.age;
      d.cp = +d.cp;
      d.trtbps = +d.trtbps;
      d.chol = +d.chol;
      d.fbs = +d.fbs;
      d.restecg = +d.restecg;
      d.thalachh = +d.thalachh;
      d.exng = +d.exng;
      d.oldpeak = +d.oldpeak;
      d.slp = +d.slp;
      d.caa = +d.caa;
      d.thall = +d.thall;
      d.output = +d.output;

      return d;
    };
    csv(url, row).then(setData);
  }, []);
  
  return data;
};
