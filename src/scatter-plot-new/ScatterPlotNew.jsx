import * as d3 from "d3";
import {useData} from "./useData";
import {Box} from "theme-ui";
import React, {useState} from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../dropdownButton.css";
import {DataSetInfo} from "../DataSetInfo";
import {Card} from "../Card";

var margin = {top: 10, right: 85, bottom: 55, left: 60};
var width = 550 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

const attributes = [
  {value: "age", label: "age"},
  {value: "trtbps", label: "trtbps"},
  {value: "chol", label: "chol"},
  {value: "thalachh", label: "thalachh"},
  {value: "oldpeak", label: "oldpeak"},
];

export function ScatterPlotNew() {
 
  const initialXAttribute = "age";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];

  const initialYAttribute = "chol";
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = (d) => d[yAttribute];
  
  const data = useData();
  if (!data) {
    return <pre>Loading...</pre>;
  }

  d3.select("#scatter_new")
    .select("svg")
    .remove();

  var svg = d3
    .select("#scatter_new")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3
    .scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, width])
    .nice();

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr("color", "white")
    .call(d3.axisBottom(x));
  svg.append("text");

  svg
    .append("text")
    .attr("text-anchor", "end")
    .style("fill", "white")
    .style("font-family", "Oswald")
    .attr("x", width / 2)
    .attr("y", height + margin.top + 30)
    .text(xAttribute);

  svg
    .append("text")
    .style("fill", "white")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .style("font-family", "Oswald")
    .attr("y", -margin.left + 20)
    .attr("x", -margin.top - height / 2 + 20)
    .text(yAttribute);

  var y = d3
    .scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([height, 0])
    .nice();
  svg
    .append("g")
    .call(d3.axisLeft(y))
    .attr("color", "white");

  svg
    .append("g")
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return x(d[xAttribute]);
    })
    .attr("cy", function(d) {
      return y(d[yAttribute]);
    })
    .attr("r", 4)
    .style("fill", "#52429b")

    .on("mouseover", function(event, d) {
      var xPosition = parseFloat(d3.select(this).attr("cx"));
      var yPosition = parseFloat(d3.select(this).attr("cy"));

      svg
        .append("text")
        .attr("id", "tooltip")
        .attr("x", xPosition)
        .attr("y", yPosition)
        .style("pointer-events", "none")
        .style("fill", "white")
        .style("opacity", 1)

        .text("value is " + d[xAttribute]);
    })
    .on("mouseout", function() {
      d3.select("#tooltip").remove();
    });

  return (
    <Card>
      <Box sx={{display: "flex", gap: 2, marginBottom: "30px"}}>
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
        <Box sx={{width: "200px"}}>
          <Dropdown
            options={attributes}
            id="x-select"
            value={yAttribute}
            onChange={({value}) => setYAttribute(value)}
            controlClassName="myControlClassName"
            menuClassName="myMenuClassName"
            className="myClassName"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginLeft: "20px",
          }}
        >
          {" "}
          <DataSetInfo xAttribute={xAttribute} />
          <DataSetInfo xAttribute={yAttribute} />
        </Box>
      </Box>{" "}
      <Box id="scatter_new"></Box>
    </Card>
  );
}
