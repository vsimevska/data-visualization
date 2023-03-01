import React from "react";
import {Heading, Box, Paragraph} from "theme-ui";

export function AirCityDetails({data}) {
  if (!data) {
    return <pre>Loading...</pre>;
  }
  function AirCityValues({value}) {
    return (
      <Box
        sx={{
          width: "400px",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paragraph sx={{fontSize: "20px"}}>{value}</Paragraph>
        <Heading sx={{fontSize: "35px", textAlign: "center"}}>
          {data.map((d) => d[value])}
        </Heading>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: "#130e41",
        borderRadius: "20px",
        padding: "40px",
        boxShadow: "0 0 50px 1px #400080",
        color: "white",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <AirCityValues value="AQI Category" />
        <AirCityValues value="AQI Value" />

        <AirCityValues value="CO AQI Category" />
        <AirCityValues value="CO AQI Value" />

        <AirCityValues value="NO2 AQI Category" />
        <AirCityValues value="NO2 AQI Value" />

        <AirCityValues value="Ozone AQI Category" />
        <AirCityValues value="Ozone AQI Value" />

        <AirCityValues value="PM2.5 AQI Category" />
        <AirCityValues value="PM2.5 AQI Value" />
      </Box>
    </Box>
  );
}
