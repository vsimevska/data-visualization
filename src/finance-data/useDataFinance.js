import React, {useState, useEffect} from "react";
import {csv} from "d3";

const url =
  "https://gist.githubusercontent.com/vsimevska/54f307f5a9c9adb9f675e94002781745/raw/45e3b354868815559d7ff4fcf63103729b38e191/credit_card_approval.csv";

export const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const row = (d) => {
      d.Gender = +d.Gender;
      d.Age = +d.Age;
      d.Debt = +d.Debt;
      d.Income = +d.Income;
      d.CreditScore = +d.CreditScore;
      d.YearsEmployed = +d.YearsEmployed;
      d.Married = +d.Married;
      d.BankCustomer = +d.BankCustomer;
      d.PriorDefault = +d.PriorDefault;
      d.Employed = +d.Employed;
      d.DriversLicense = +d.DriversLicense;
      d.Citizen = d.Citizen;
      d.Approved = +d.Approved;
      return d;
    };
    csv(url, row).then(setData);
  }, []);

  return data;
};
