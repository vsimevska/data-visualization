import React from "react";
import {Box, Grid} from "theme-ui";
import {useParams} from "react-router-dom";
import {useDataPollution} from "./useDataPollution";
import {ButtonBarPlot} from "../button-bar-plot/ButtonBarPlot";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../dropdownButton.css";
import {DonutChart} from "../donut-chart/DonutChart";
import {ScatterPlotNew} from "../scatter-plot-new/ScatterPlotNew";
import {Title} from "../template/Title";
import {useNavigate} from "react-router-dom";

const attributes = [
  {value: "AQI Category", label: "AQI Category"},
  {value: "CO AQI Category", label: "AQI Carbon Monoxide"},
  {value: "NO2 AQI Category", label: "AQI Nitrogen Dioxide"},
  {value: "Ozone AQI Category", label: "AQI Ozone"},
  {value: "PM2.5 AQI Category", label: "PM2.5 AQI Category"},
];

const attributesScatterPlot = [
  {value: "AQI Value", label: "AQI Value"},
  {value: "CO AQI Value", label: "CO AQI Value"},
  {value: "NO2 AQI Value", label: "NO2 AQI Value"},
  {value: "Ozone AQI Value", label: "Ozone AQI Value"},
  {value: "PM2.5 AQI Value", label: "PM2.5 AQI Value"},
];

export function AirCountryDetails() {
  const data = useDataPollution();
  if (!data) {
    return <pre>Loading...</pre>;
  }
  const [city, setCity] = React.useState("City");
  const initialXAttribute = "AQI Category";
  const initialXAttributeScatterPlot = "AQI Value";
  const initialYAttribute = "CO AQI Value";

  const navigate = useNavigate();
  let {country} = useParams();

  const dataCountry = data.map((d) => {
    return d.Country;
  });

  const chosenCountry = data.filter((d) => {
    if (country === "USA" && d.Country === "United States of America") {
      return d;
    }
    if (
      (d.Country.includes(country) || country.includes(d.Country)) &&
      d.Country !== ""
    ) {
      return d;
    }
  });

  const chosenCity = chosenCountry.filter((d) => {
    if (d.City === city) {
      return d;
    }
  });

  const cities = chosenCountry.map((d) => {
    return d.City;
  });

  return (
    <Box sx={{padding: "40px", paddingTop: "140px"}}>
      <Title
        title={country}
        link="https://www.kaggle.com/datasets/hasibalmuzdadid/global-air-pollution-dataset"
        buttonText={"Back"}
        onClick={() => navigate("/air-pollution")}
      />
      <Box
        sx={{
          color: "white",
          fontFamily: "Oswald",
          fontSize: "25px",
          fontWeight: 400,
          mb: 10,
        }}
      >
        Choose a city from {country}:
      </Box>
      <Box sx={{width: "200px", marginBottom: "40px"}}>
        <Dropdown
          options={cities}
          id="x-select"
          value={city}
          onChange={({value}) => setCity(value)}
          controlClassName="myControlClassName"
          menuClassName="myMenuClassName"
          className="myClassName"
        />
      </Box>
      <Grid columns={[2]} sx={{height: "100%", marginBottom: "30px"}}>
        <ButtonBarPlot
          attributes={attributes}
          initialXAttribute={initialXAttribute}
          data={city !== "City" ? chosenCity : chosenCountry}
        />
        <DonutChart
          attributes={attributes}
          initialXAttribute={initialXAttribute}
          data={city !== "City" ? chosenCity : chosenCountry}
        />
      </Grid>
      <ScatterPlotNew
        attributes={attributesScatterPlot}
        initialXAttribute={initialXAttributeScatterPlot}
        initialYAttribute={initialYAttribute}
        data={city !== "City" ? chosenCity : chosenCountry}
      />{" "}
    </Box>
  );
}
