import {Box, Heading, Image, Paragraph} from "theme-ui";
import React from "react";

function Legend({heading, value1}) {
  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
      <Heading sx={{fontSize: "30px"}}>{heading}</Heading>

      {value1 && (
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            alignContent: "flex-start",
          }}
        >
          {value1.map((value) => (
            <Paragraph sx={{fontSize: "20px"}}>{value}</Paragraph>
          ))}
        </Box>
      )}
    </Box>
  );
}
export function DataSetInfo({xAttribute}) {
  return (
    <Box
      sx={{
        backgroundColor: "#130e41",
        color: "white",
        fontFamily: "Oswald",
      }}
    >
      {xAttribute === "age" && <Legend heading={"age - Age of the patient"} />}
      {xAttribute === "trtbps" && (
        <Legend heading={"trtbps : resting blood pressure (in mm Hg)"} />
      )}
      {xAttribute === "chol" && (
        <Legend
          heading={"chol : cholestoral in mg/dl fetched via BMI sensor"}
        />
      )}
      {xAttribute === "thalachh" && (
        <Legend heading={"thalachh : maximum heart rate achieved"} />
      )}
      {xAttribute === "oldpeak" && (
        <Legend heading={"oldpeak - previus peak"} />
      )}

      {xAttribute === "cp" && (
        <Legend
          heading={"cp - Chest Pain type"}
          value1={[
            "Value 1: typical angina",
            "Value 2: atypical angina",
            "Value 3: non-anginal pain",
            "Value 4: asymptomatic",
          ]}
        />
      )}
      {xAttribute === "fbs" && (
        <Legend
          heading={"fbs - asting blood sugar > 120 mg/dl"}
          value1={["1 - true", "0 - false"]}
        />
      )}
      {xAttribute === "restecg" && (
        <Legend
          heading={" restecg - resting electrocardiographic results"}
          value1={[
            "Value 0: normal",
            "Value 1: having ST-T wave abnormality",
            "Value 2: showing probable or definite left ventricular hypertrophy by Estes' criteria",
          ]}
        />
      )}
      {xAttribute === "exng" && (
        <Legend
          heading={"exang - Exercise induced angina"}
          value1={["1 - yes", "0 - no"]}
        />
      )}
      {xAttribute === "slp" && <Legend heading={"slp - slope"} />}
      {xAttribute === "caa" && (
        <Legend heading={"caa - number of major vessels"} />
      )}
      {xAttribute === "thall" && (
        <Legend heading={"thall - maximum heart rate achieved"} />
      )}
      {xAttribute === "output" && (
        <Legend
          heading={"output - chances of heart attack"}
          value1={[
            "0 - less chance of heart attack",
            "1 - more chance of heart attack",
          ]}
        />
      )}
      {xAttribute === "sex" && (
        <Legend
          heading={"Sex - gender of the patient"}
          value1={["0 - Female", "1 - Male"]}
        />
      )}

      {xAttribute === "Married" && (
        <Legend
          heading={"Married"}
          value1={["0 - Single/Divorced", "1 - Married"]}
        />
      )}
      {xAttribute === "BankCustomer" && (
        <Legend
          heading={"Bank Customer"}
          value1={[
            "0 - does not have a bank account",
            " 1 - has a bank account",
          ]}
        />
      )}
      {xAttribute === "PriorDefault" && (
        <Legend
          heading={"Prior Default"}
          value1={["0 - no prior default", " 1 - prior default"]}
        />
      )}
      {xAttribute === "Employed" && (
        <Legend
          heading={"Employed"}
          value1={["0 - not employed", " 1 - employed"]}
        />
      )}
      {xAttribute === "DriversLicense" && (
        <Legend
          heading={"Drivers License"}
          value1={["0 - no license", " 1 - has license"]}
        />
      )}
      {xAttribute === "Approved" && (
        <Legend
          heading={"Approved"}
          value1={["0 - not approved", " 1 - aprroved"]}
        />
      )}
      {xAttribute === "Gender" && (
        <Legend heading={"Gender"} value1={["0 - Female", " 1 - Male"]} />
      )}
      
    </Box>
  );
}
