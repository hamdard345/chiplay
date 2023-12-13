import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import conference from "./img/alexandre-pellae.jpg";
/**
 * HomePage Class display credited Image, my name, ID and affiliation message along with a footer.
 *
 * @author Noorullah Niamatullah w18002720
 */

function Homepage() {
  return (
    <Container align="center">
      <Typography variant="h1" gutterBottom>
        Homepage
      </Typography>
      <Grid item xs={12} sm={12}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flexgrow: 1 }}>
            <Typography gutterBottom variant="h5" align="center">
              {" "}
              Message:This Web Application is for Northumbria University Module
              kf6012 coursework. It is Not Associted or endorsed by the CHI PLAY
              2021
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            image={conference}
            alt="Confernce room"
            sx={{ paddingTop: "56.25%" }}
          />
          <CardContent sx={{ flexgrow: 1 }}>
            <Typography gutterBottom variant="h5">
              {" "}
              Conference Image By Alexandre-pellae on unsplash
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}
export default Homepage;
