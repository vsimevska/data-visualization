import {Box} from "theme-ui";
import React from "react";

export function Card({children}) {
  return (
    <Box
      sx={{
        backgroundColor: "#130e41",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        padding: "40px",
        boxShadow: "0 0 50px 1px #400080",
      }}
    >
      {children}
    </Box>
  );
}
