import React from "react";
import {DonutChart} from "./donut-chart/DonutChart";
import {ButtonBarPlot} from "./button-bar-plot/ButtonBarPlot";
import {Box, Heading, Image, Grid, Link, Paragraph} from "theme-ui";
import {DonutChartGender} from "./donut-chart-gender/DonutChartGender";
import {ScatterPlotNew} from "./scatter-plot-new/ScatterPlotNew";
import human from "../src/human.svg";

export function MedicalData() {
  return (
    <Box
      sx={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          color: "white",
          fontFamily: "Oswald",
          mb: "20px",
        }}
      >
        <Heading sx={{fontSize: "60px", fontWeight: 400}}>
          Heart Attack Analysis
        </Heading>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            fontSize: "20px",
            gap: 2,
          }}
        >
          <Paragraph>Read more </Paragraph>
          <Link
            sx={{color: "white"}}
            href="https://www.kaggle.com/datasets/rashikrahmanpritom/heart-attack-analysis-prediction-dataset"
          >
            here
          </Link>
        </Box>
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", gap: 5}}>
        <Box sx={{display: "flex", gap: 5}}>
          <Box sx={{maxWidth: "800px", minWidth: "800px"}}>
            <ScatterPlotNew />
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
            <Image sx={{boxShadow: "0 0 50px 1px #400080"}} src={human} />
          </Box>
        </Box>
        <Box>
          {" "}
          <DonutChartGender />
        </Box>
        <Grid columns={[2]} sx={{height: "100%"}}>
          <ButtonBarPlot />
          <DonutChart />
        </Grid>
      </Box>
    </Box>
  );
}
