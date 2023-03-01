import React from "react";
import * as d3 from "d3";
import {useDataCountries} from "./useDataCountries";
import {useNavigate} from "react-router-dom";

const width = 800;
const height = 800;

export function WorldMap() {
  const [country, setCountry] = React.useState();
  const data = useDataCountries();

  const navigate = useNavigate();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  function handleClick(country) {
    navigate(`/${country}`);
  }

  const svg = d3
    .select("#world_map")
    .attr("width", width)
    .attr("height", height);

  var tooltip = d3
    .select("#world_map")
    .append("div")
    .attr("class", "tooltip");

  const projection = d3
    .geoNaturalEarth1()
    .scale(width / 1.3 / Math.PI)
    .translate([width / 2, height / 2]);

  function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.color = "white";
    tooltip.style.fontSize = "20px";
    tooltip.style.padding = "10px";
    tooltip.style.backgroundColor = "#130e41";
    tooltip.style.opacity = 1;
    tooltip.style.left = evt.pageX + 10 + "px";
    tooltip.style.top = evt.pageY + 10 + "px";
  }

  function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }

  let mouseOver = function(d, i) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", 1);
    d3.select(this)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "black");
  };

  let mouseLeave = function(d) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", 1);
    d3.select(this)
      .transition()
      .duration(200)
      .style("stroke", "#fff");
    hideTooltip();
  };

  svg
    .append("g")
    .selectAll("path")
    .data(data.features)
    .join("path")
    .attr("fill", "#69b3a2")
    .attr("d", d3.geoPath().projection(projection))
    .style("stroke", "#fff")
    .on("mouseover", mouseOver)
    .on("mouseleave", mouseLeave)
    .on("click", function(d, i) {
      setCountry(i.properties.name);
      handleClick(i.properties.name);
    })
    .on("mousemove", (e, i) => {
      showTooltip(e, i.properties.name);
    });

  return (
    <>
      <div
        id="tooltip"
        class="tooltip"
        display="none"
        style={{position: "absolute", display: "none"}}
      ></div>

      <svg id="world_map"></svg>
    </>
  );
}
