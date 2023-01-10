import React from "react";
import {Heading, Box, Image, Paragraph} from "theme-ui";
import heart2 from "../heart2.png";
import creditCardIcon from "../credit-card-icon.png";
import airPollution from "../air-pollution.png";
import {useNavigate} from "react-router-dom";
import data_cover from "../data_cover.gif";
import {keyframes} from "@emotion/react";

function Category({image, title, onClick}) {
  return (
    <Box
      sx={{
        backgroundColor:'white',
        borderRadius: "20px",
        height: "150px",
        width: "150px",
        transition: "transform .2s",
        "&:hover": {
          transform: "scale(1.2)",
        },
        boxShadow: "0 0 50px 5px #400080",
      }}
      onClick={onClick}
    >
      <Box sx={{height: "150px", width: "150px"}}>
        {" "}
        <Image
          sx={{height: "100%", width: "100%", borderRadius: "20px"}}
          src={image}
        />
        <Paragraph
          sx={{
            color: "white",
            fontFamily: "Oswald",
            letterSpacing: ".1rem",
            textAlign: "center",
          }}
        >
          {title}
        </Paragraph>
      </Box>
    </Box>
  );
}

export function HomePage() {
  const navigate = useNavigate();

  function handleClickMedical() {
    navigate("/medical");
  }
  function handleClickFinance() {
    navigate("/finance");
  }
  function handleClickAirPollution() {
    navigate("/air-pollution");
  }

  const typing = keyframes`
  from {
    width:0
  }
  to { width: 60% }
 `;
  const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        gap: 3,
        // backgroundImage: `url('https://i.pinimg.com/originals/62/c3/f6/62c3f6eba45836514e4a9c19ba4ae260.gif')`,
        // backgroundSize: "cover",
      }}
    >
      <Heading
        sx={{
          color: "white",
          fontSize: "90px",
          textTransform: "uppercase",
          fontFamily: "Oswald",
          overflow: "hidden",
          borderRight: ".15em solid white",
          whiteSpace: "nowrap",
          margin: " 0 auto",
          animation: `${typing} 2s steps(40, end),
          ${blink} .75s step-end infinite alternate`,
        }}
      >
        &lt; Data Visualization / &gt;
      </Heading>
      <Box sx={{display: "flex", flexDirection: "row", gap: 5}}>
        <Category
          image={heart2}
          title="Medical Data"
          onClick={handleClickMedical}
        />
        <Category
          image={creditCardIcon}
          title="Finance Data"
          onClick={handleClickFinance}
        />
        <Category
          image={airPollution}
          title="Air Polution Data"
          onClick={handleClickAirPollution}
        />
      </Box>
    </Box>
  );
}
