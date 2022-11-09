import {Box} from "theme-ui";
import React from "react";

export function Card({children, title, isGender}) {
  return (
    <Box
      sx={{
        backgroundColor: "#130e41",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        padding: "40px",
        boxShadow:  '0 0 50px 1px #400080'
      }}
    >
      {/* <Card.CardTitle>{title}</Card.CardTitle> */}
      {children}
    </Box>
  );
}
// Card.CardTitle = function CardTitle({children}) {
//   return <Box sx={{display: "flex", gap: 5}}>{children}</Box>;
// };
