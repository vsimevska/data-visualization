import * as d3 from "d3";
import {useData} from "./useData";
import React, {useState} from "react";
import {dataPreparation} from "./dataPreparation";
import {Box} from "theme-ui";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../dropdownButton.css";
import "./styleBarPlot.css";
import {DataSetInfo} from "../DataSetInfo";
import {Card} from "../Card";

const margin = {top: 30, right: 30, bottom: 70, left: 60};
const width = 460 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

const attributes = [
  {value: "sex", label: "sex"},
  {value: "cp", label: "cp"},
  {value: "fbs", label: "fbs"},
  {value: "restecg", label: "restecg"},
  {value: "exng", label: "exng"},
  {value: "slp", label: "slp"},
  {value: "caa", label: "caa"},
  {value: "thall", label: "thall"},
  {value: "output", label: "output"},
];

export function ButtonBarPlot() {
  const data = useData();

  const initialXAttribute = "sex";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];
  const data_mapped_sex = dataPreparation(xValue);
  if (!data) {
    return <pre>Loading...</pre>;
  }

  d3.select("#barplot")
    .select("svg")
    .remove();

  var svg = d3
    .select("#barplot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3
    .scaleBand()
    .range([0, width])
    .padding(0.2);

  var xAxis = svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr("class", "myXaxis");

  svg
    .append("text")
    .attr("class", "textBarPlot")
    .attr("x", width / 2)
    .attr("y", height + margin.top + 15)
    .text(xAttribute);

  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append("g").attr("class", "myYaxis");

  var color = d3.scaleOrdinal().range(["red", "#52429b", "#1ac6ff", "#ffcc00"]);

  function update(data) {
    x.domain(
      data.map(function(d) {
        return d.key;
      })
    );
    xAxis.call(d3.axisBottom(x));

    y.domain([
      0,
      d3.max(data, function(d) {
        return d.value;
      }),
    ]);

    yAxis
      .transition()
      .duration(1000)
      .call(d3.axisLeft(y));

    var u = svg.selectAll("rect").data(data);

    u.enter()
      .append("rect")
      .attr("class", "bars")
      .merge(u)
      .transition()
      .duration(1000)
      .attr("rx", 15)
      .attr("x", function(d) {
        return x(d.key);
      })
      .attr("y", function(d) {
        return y(d.value);
      })
      .attr("width", x.bandwidth())
      .attr("height", function(d) {
        return height - y(d.value);
      })

      .attr("fill", function(d) {
        return color(d.key);
      });

    u.exit().remove();
  }
  update(data_mapped_sex);
  return (
    <Card>
      <DataSetInfo xAttribute={xAttribute} />

      <Box sx={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
        <Box sx={{width: "200px"}}>
          <Dropdown
            options={attributes}
            id="x-select"
            value={xAttribute}
            onChange={({value}) => setXAttribute(value)}
            controlClassName="myControlClassName"
            menuClassName="myMenuClassName"
            className="myClassName"
          />
        </Box>
      </Box>
      <Box id="barplot"></Box>
    </Card>
  );
}
