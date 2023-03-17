import React from "react";
import { AppBar, ContainerProps, Grid, Typography, Link, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

interface PageProps {
  children?: any;
}

export const Page: React.FC<PageProps & ContainerProps> = ({
  children,
  ...props
}: PageProps & ContainerProps) => {
  const navigation = useNavigate();
  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        style={{ backgroundColor: "black", padding: "15px" }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Link component={RouterLink} to="/">
              <img alt="Logo" src={"Vial Logo.svg"} />
            </Link>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent="space-evenly"
              alignItems="center"
              spacing={2}
            >
              {localStorage.getItem("email") ? (
                <>
                  <Grid item>
                    <Typography align="center">
                      {localStorage.getItem("email")}
                    </Typography>
                    <Typography align="center">Authenticated</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="text"
                      style={{
                        color: "white"
                      }}
                      onClick={() => {
                        localStorage.setItem("email", "")
                        navigation("/sign-in")
                      }}
                    >
                      Log Out
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item>
                    <Link
                      component={RouterLink}
                      to="/sign-in"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Sign In
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      component={RouterLink}
                      to="/sign-up"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Sign Up
                    </Link>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      <main
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
        {...props}
      >
        {children}
      </main>
    </>
  );
};
