import React from "react";
import {DonutChart} from "../donut-chart/DonutChart";
import {ButtonBarPlot} from "../button-bar-plot/ButtonBarPlot";
import {DonutChartGender} from "../donut-chart-gender/DonutChartGender";
import {ScatterPlotNew} from "../scatter-plot-new/ScatterPlotNew";
import {useData} from "../button-bar-plot/useData";
import {Template} from "../template/Template";
import human from "../human.svg";
import {Image} from "theme-ui";
import {Title} from "../template/Title";
import {useNavigate} from "react-router-dom";

const attributes = [
  {value: "sex", label: "sex"},
  {value: "cp", label: "cp"},
  {value: "fbs", label: "fbs"},
  {value: "restecg", label: "restecg"},
  {value: "exng", label: "exng"},
  {value: "slp", label: "slp"},
  {value: "caa", label: "caa"},
  {value: "thall", label: "thall"},
  {value: "output", label: "output"},
];

const attributesGender = [
  {value: "cp", label: "cp"},
  {value: "fbs", label: "fbs"},
  {value: "restecg", label: "restecg"},
  {value: "exng", label: "exng"},
  {value: "slp", label: "slp"},
  {value: "caa", label: "caa"},
  {value: "thall", label: "thall"},
  {value: "output", label: "output"},
];

const attributesScatterPlot = [
  {value: "age", label: "age"},
  {value: "trtbps", label: "trtbps"},
  {value: "chol", label: "chol"},
  {value: "thalachh", label: "thalachh"},
  {value: "oldpeak", label: "oldpeak"},
];

export function MedicalData() {
  const initialXAttribute = "cp";
  const initialXAttributeScatterPlot = "age";
  const initialYAttribute = "chol";
  const data = useData();
  const navigate = useNavigate();
  return (
    <>
      <Template
        title={
          <Title
            title="Heart Attack Analysis"
            link="https://www.kaggle.com/datasets/rashikrahmanpritom/heart-attack-analysis-prediction-dataset"
            buttonText="Home Page"
            onClick={() => navigate("/")}
          />
        }
        ScatterPlotNew={
          <ScatterPlotNew
            attributes={attributesScatterPlot}
            initialXAttribute={initialXAttributeScatterPlot}
            initialYAttribute={initialYAttribute}
            data={data}
          />
        }
        DonutChartGender={
          <DonutChartGender
            attributes={attributesGender}
            initialXAttribute={initialXAttribute}
            data={data}
          />
        }
        ButtonBarPlot={
          <ButtonBarPlot
            attributes={attributes}
            initialXAttribute={initialXAttribute}
            data={data}
          />
        }
        DonutChart={
          <DonutChart
            attributes={attributes}
            initialXAttribute={initialXAttribute}
            data={data}
          />
        }
        image={<Image sx={{boxShadow: "0 0 50px 1px #400080"}} src={human} />}
      />
    </>
  );
}
