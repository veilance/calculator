import React from "react";
import { Grid, Typography } from "@mui/material";
import { Calculator } from "../components/Calculator";
import { Page } from "../components/Page";

export const IndexPage: React.FC = () => {
  return (
    <Page>
      <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: "70vh" }}>
        <Grid item>
          <Typography align="center">Vial's Wonderful Calculator!</Typography>
          <Calculator />
        </Grid>
      </Grid>
    </Page>
  );
};
