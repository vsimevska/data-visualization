import React from "react";
import {HomePage} from "./home-page/HomePage";
import {MedicalData} from "./medical-data/MedicalData";
import {Routes, Route} from "react-router-dom";
import {FinanceData} from "./finance-data/FinanceData";
import {AirPollutionData} from "./air-pollution-data/AirPollutionData";
import {AirCountryDetails} from "./air-pollution-data/AirCountryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/medical" element={<MedicalData />} />
      <Route path="/finance" element={<FinanceData />} />
      <Route path="/air-pollution" element={<AirPollutionData />} />
      <Route path="/:country" element={<AirCountryDetails />} />
    </Routes>
  );
}

export default App;
