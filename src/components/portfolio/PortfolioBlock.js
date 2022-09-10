import React from "react";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
  const { image, title } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      marginBottom={"40px"}
    >
      <Box component={"img"} src={image} alt={"mockup"} />
      <h1
        style={{
          fontSize: "2rem",
          marginLeft: "1rem",
          marginRight: "1rem",
          textAlign: "center",
        }}
      >
        {title}
      </h1>
    </Box>
  );
}

export default PortfolioBlock;
