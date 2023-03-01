import {Box} from "theme-ui";
import React, {useState} from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../dropdownButton.css";
import {DataSetInfo} from "../DataSetInfo";
import {Card} from "../Card";
import {ScatterChart, Scatter, XAxis, YAxis, Tooltip, Cell} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

export function ScatterPlotNew({
  attributes,
  initialXAttribute,
  initialYAttribute,
  data,
}) {
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];

  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = (d) => d[yAttribute];

  if (!data) {
    return <pre>Loading...</pre>;
  }
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
      <ScatterChart
        width={600}
        height={500}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis
          type="number"
          dataKey={xValue}
          label={{value: xAttribute, position: "bottom", fill: "white"}}
          allowDataOverflow={false}
          tick={{fill: "white"}}
          name={xAttribute}
        />
        <YAxis
          type="number"
          dataKey={yValue}
          allowDataOverflow={false}
          label={{
            value: yAttribute,
            position: "left",
            angle: -90,
            fill: "white",
          }}
          tick={{fill: "white"}}
          name={yAttribute}
        />
        <Tooltip cursor={{strokeDasharray: "3 3"}} />
        <Scatter data={data} fill="white">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
    </Card>
  );
}
