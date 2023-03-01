import {DonutChartFemale} from "../donut-chart-female/DonutChartFemale";
import {DonutChartMale} from "../donut-chart-male/DonutChartMale";
import React, {useState} from "react";
import {Box} from "theme-ui";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../dropdownButton.css";
import {DataSetInfo} from "../DataSetInfo";
import {Card} from "../Card";

export function DonutChartGender({attributes, initialXAttribute, data}) {
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  return (
    <Card isGender={true}>
      <Box>
        {" "}
        <DataSetInfo xAttribute={xAttribute} />
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
        <Box
          sx={{
            width: "200px",
          }}
        >
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
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <DonutChartFemale xAttribute={xAttribute} data={data} />
        <DonutChartMale xAttribute={xAttribute} data={data} />
      </Box>
    </Card>
  );
}
