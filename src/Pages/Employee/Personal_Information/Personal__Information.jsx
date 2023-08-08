import React from "react";
import "../../Styles.css";
import { Typography, Box, Container } from "@mui/material";

const Personal__Information = () => {
  return (
    <>
      <Box className="sectionTitle">
        <Typography variant="h5" color="initial">
          Personal Information
        </Typography>
      </Box>
      <Container maxWidth="lg"></Container>
    </>
  );
};

export default Personal__Information;
