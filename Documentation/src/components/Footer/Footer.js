import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
        
      }}
    >
      <Typography>
        &copy; {new Date().getFullYear()} Noorullah Niamatullah
      </Typography>

      <Typography>w18002720</Typography>
    </Box>
  );
}
export default Footer;
