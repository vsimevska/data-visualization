import React from "react";
import {Template} from "../template/Template";
import {WorldMap} from "../world-map/WorldMap";
import {Box, Paragraph} from "theme-ui";
import {Title} from "../template/Title";
import {useNavigate} from "react-router-dom";

export function AirPollutionData() {
  const navigate = useNavigate();
  return (
    <>
      <Title
        title="Air Polution"
        link="https://www.kaggle.com/datasets/hasibalmuzdadid/global-air-pollution-dataset"
        buttonText="Home Page"
        onClick={() => navigate("/")}
      />
      <Paragraph
        sx={{
          color: "white",
          fontFamily: "Oswald",
          display: "flex",
          fontSize: "40px",
          paddingLeft: "70px",
          paddingTop: "180px",
        }}
      >
        Choose a country:
      </Paragraph>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <WorldMap />
      </Box>
    </>
  );
}
