import {Box, Heading, Link, Paragraph, Button} from "theme-ui";
import {MdArrowBack} from "react-icons/md";
import React from "react";

export function Title({title, link, onClick, buttonText}) {
 
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        backgroundColor: "#130e41",
        color: "white",
        fontFamily: "Oswald",
        mb: "20px",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        zIndex: 1,
        padding: "20px",
      }}
    >
      <Button
        onClick={onClick}
        sx={{
          backgroundColor: "transparent",
          fontFamily: "Oswald",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
          <MdArrowBack style={{color: "white"}} size={25} />
          {buttonText}
        </Box>
      </Button>

      <Box sx={{margin: "0 auto"}}>
        <Heading sx={{fontSize: "60px", fontWeight: 400}}>{title}</Heading>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            fontSize: "20px",
            gap: 2,
          }}
        >
          <Paragraph>Read more </Paragraph>
          <Link sx={{color: "white"}} href={link}>
            here
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
