import * as d3 from "d3";
import {useData} from "./useData";
import {Box} from "theme-ui";
import {dataPreparation} from "../dataPreparation";
import React, {useState} from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../dropdownButton.css";
import "./styleDonutChart.css";
import {DataSetInfo} from "../DataSetInfo";
import {Card} from "../Card";

const width = 600;
const height = 450;
const margin = 40;
const radius = Math.min(width, height) / 2 - margin;

export function DonutChart({attributes, initialXAttribute, data}) {
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];
  const data_mapped_value = dataPreparation(xValue, data);
  if (!data) {
    return <pre>Loading...</pre>;
  }
  const dataColumn = data.map(xValue);

  d3.select("#my_dataviz").select("svg").remove();
  var pie = d3
    .pie()
    .sort(null)
    .value(function (d) {
      return d.value;
    });
  const data_mapped = pie(data_mapped_value);

  var svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var arc = d3
    .arc()
    .innerRadius(radius * 0.5)
    .cornerRadius(10)
    .outerRadius(radius * 0.8);

  var outerArc = d3
    .arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

  var color = d3
    .scaleOrdinal()
    .domain(dataColumn)
    .range(["red", "#52429b", "#1ac6ff", "#ffcc00"]);

  var tooltip = d3.select("#my_dataviz").append("div").attr("class", "tooltip");

  svg
    .selectAll(".svg-canvas")
    .data(data_mapped)
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function (d) {
      return color(d.data.key);
    })
    .attr("class", "donutChart")

    .on("mouseover", (e, d) => {
      tooltip.style("visibility", "visible").text("value is " + d.value);
    })

    .on("mousemove", (e, d) => {
      tooltip
        .style("top", e.pageY - 50 + "px")
        .style("left", e.pageX - 50 + "px");
    })

    .on("mouseout", () => {
      tooltip.style("visibility", "hidden");
    });

  svg
    .selectAll("allPolylines")
    .data(data_mapped)
    .enter()
    .append("polyline")
    .attr("class", "donutChartPolyline")
    .attr("points", function (d) {
      var posA = arc.centroid(d);
      var posB = outerArc.centroid(d);
      var posC = outerArc.centroid(d);
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
      return [posA, posB, posC];
    });

  svg
    .selectAll("allLabels")
    .data(data_mapped)
    .enter()
    .append("text")
    .attr("class", "donutChartLabel")
    .text(function (d) {
      return d.data.key;
    })
    .attr("transform", function (d) {
      var pos = outerArc.centroid(d);
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
      return "translate(" + pos + ")";
    })
    .style("text-anchor", function (d) {
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return midangle < Math.PI ? "start" : "end";
    });

  return (
    <Card sx={{maxWidth: "610px", minWidth: "610px"}}>
      <Box>
        {" "}
        <DataSetInfo xAttribute={xAttribute} />
      </Box>
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
      <Box id="my_dataviz"></Box>
    </Card>
  );
}
