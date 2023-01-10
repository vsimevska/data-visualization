import React from "react";
import {ButtonBarPlot} from "../button-bar-plot/ButtonBarPlot";
import {DonutChart} from "../donut-chart/DonutChart";
import {ScatterPlotNew} from "../scatter-plot-new/ScatterPlotNew";
import {DonutChartGender} from "../donut-chart-gender/DonutChartGender";
import {useData} from "./useDataFinance";
import {Template} from "../template/Template";
import credit_card from "../Credit-card-payment.svg";
import {Image} from "theme-ui";
import {Title} from "../template/Title";
import {useNavigate} from "react-router-dom";

const attributes = [
  {value: "Gender", label: "Gender"},
  {value: "Married", label: "Married"},
  {value: "BankCustomer", label: "Bank Customer"},
  {value: "PriorDefault", label: "Prior Default"},
  {value: "Employed", label: "Employed"},
  {value: "DriversLicense", label: "Drivers License"},
  {value: "Citizen", label: "Citizen"},
  {value: "Approved", label: "Approved"},
  {value: "Ethnicity", label: "Ethnicity"},
];

const attributesGender = [
  {value: "Married", label: "Married"},
  {value: "BankCustomer", label: "Bank Customer"},
  {value: "PriorDefault", label: "Prior Default"},
  {value: "Employed", label: "Employed"},
  {value: "DriversLicense", label: "Drivers License"},
  {value: "Approved", label: "Approved"},
];

const attributesScatterPlot = [
  {value: "Income", label: "Income"},
  {value: "CreditScore", label: "Credit Score"},
  {value: "YearsEmployed", label: "Years Employed"},
  {value: "Debt", label: "Debt"},
  {value: "Age", label: "Age"},
];

export function FinanceData() {
  const data = useData();
  console.log(data);
  const initialXAttribute = "Married";
  const initialXAttributeScatterPlot = "Income";
  const initialYAttributeScatterPlot = "CreditScore";
  const navigate = useNavigate();
  return (
    <>
      <Template
        title={
          <Title
            title="Credit Card Approvals"
            link="https://www.kaggle.com/datasets/samuelcortinhas/credit-card-approval-clean-data?select=clean_dataset.csv"
            buttonText="Home Page"
            onClick={() => navigate("/")}
          />
        }
        ScatterPlotNew={
          <ScatterPlotNew
            attributes={attributesScatterPlot}
            initialXAttribute={initialXAttributeScatterPlot}
            initialYAttribute={initialYAttributeScatterPlot}
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
            uttonBarPlot
            attributes={attributes}
            initialXAttribute={initialXAttribute}
            data={data}
          />
        }
        image={
          <Image sx={{boxShadow: "0 0 50px 1px #400080"}} src={credit_card} />
        }
      />
    </>
  );
}
