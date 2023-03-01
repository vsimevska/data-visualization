import React from "react";
import {Box, Grid} from "theme-ui";

export function Template({
  title,
  ScatterPlotNew,
  DonutChartGender,
  ButtonBarPlot,
  DonutChart,
  image,
}) {
  return (
    <Box
      sx={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "150px",
      }}
    >
      {title}
      <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
        <Box sx={{display: "flex", gap: 5}}>
          <Box sx={{maxWidth: "800px", minWidth: "800px"}}>
            {ScatterPlotNew}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              marginLeft: "70px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {image}
          </Box>
        </Box>
        <Box>{DonutChartGender}</Box>
        <Grid columns={[2]} sx={{height: "100%"}}>
          {ButtonBarPlot}
          {DonutChart}
        </Grid>
      </Box>
    </Box>
  );
}
