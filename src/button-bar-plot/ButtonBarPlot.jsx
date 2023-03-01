import React, {useState} from "react";
import {dataPreparation} from "../dataPreparation";
import {Box} from "theme-ui";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../dropdownButton.css";
import {DataSetInfo} from "../DataSetInfo";
import {Card} from "../Card";
import {BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer} from "recharts";

export function ButtonBarPlot({attributes, initialXAttribute, data}) {
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];
  const data_mapped_sex = dataPreparation(xValue, data);
  if (!data) {
    return <pre>Loading...</pre>;
  }
  console.log(data);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

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

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data_mapped_sex}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <YAxis tick={{fill: "white"}} />
          <XAxis tick={{fill: "white"}} dataKey="key" />

          <Bar dataKey="value" fill="red" radius={[10, 10, 5, 5]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
