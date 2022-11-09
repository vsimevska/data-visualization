import * as d3 from "d3";
import {useData} from "../donut-chart/useData";
import {Box} from "theme-ui";
import React from "react";
import {dataPreparationMale} from "./donut_male";
import "../donut-chart/styleDonutChart.css";

const width = 600;
const height = 450;
const margin = 40;
const radius = Math.min(width, height) / 2 - margin;

export function DonutChartMale({xAttribute}) {
  const dataHeart = useData();
  if (!dataHeart) {
    return <pre>Loading...</pre>;
  }

  d3.select("#donut_male")
    .select("svg")
    .remove();
  const xValue = (d) => d[xAttribute];

  const data_mapped_value = dataPreparationMale(xAttribute);
  const dataColumn = dataHeart.map(xValue);
  var pie = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return d.value;
    });
  const data_mapped = pie(data_mapped_value);

  var svg = d3
    .select("#donut_male")
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

  const tooltip = d3
    .select("#my_dataviz")
    .append("div")
    .attr("class", "tooltip");

  svg
    .selectAll(".svg-canvas")
    .data(data_mapped)
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function(d) {
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
    .attr("points", function(d) {
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
    .text(function(d) {
      return d.data.key;
    })
    .attr("class", "donutChartLabel")
    .attr("transform", function(d) {
      var pos = outerArc.centroid(d);
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
      return "translate(" + pos + ")";
    })
    .style("text-anchor", function(d) {
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return midangle < Math.PI ? "start" : "end";
    });

  svg
    .append("text")
    .attr("class", "donutChartText")
    .attr("dy", 0)
    .html(xAttribute + " " + "Male");

  return <Box sx={{marginLeft: "20px"}} id="donut_male"></Box>;
}
